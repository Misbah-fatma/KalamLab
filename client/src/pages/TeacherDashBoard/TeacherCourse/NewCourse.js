import React, { useEffect, useState } from "react";
import Sidebar from '../SideBar';
import { useDispatch } from "react-redux";
import { fetchAllCourseInfo } from "../../../redux/course/courseAction";
import axios from "axios";
import { ChakraProvider, useToast } from "@chakra-ui/react";

const CreateCourse = () => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [courseThumbnail, setCourseThumbnail] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [coursePdf, setCoursePdf] = useState("");

  const [pdfLabel, setPdfLabel] = useState("Choose PDF");
  const [imgLabel, setImgLabel] = useState("Choose photo");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const [userData, setUserData] = useState(null);

  // State for details schema
  const [details, setDetails] = useState({
    title: "",
    text: "",
    features: "",
    overview: "",
    cards: [{ icon: "", heading: "", description: "" }] // Initial card
  });

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('user');
    if (userDataFromStorage) {
      try {
        const parsedData = JSON.parse(userDataFromStorage);
        setUserData(parsedData);
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    }
  }, []);

  const teacherName = userData?.userName;

  const [lectures, setLectures] = useState([
    {
      title: "",
      description: "",
      videoUrl: "",
      pdfUrl: null, 
    }
  ]);

  const handleDetailsChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleCardChange = (index, e) => {
    const updatedCards = [...details.cards];
    updatedCards[index][e.target.name] = e.target.value;
    setDetails({ ...details, cards: updatedCards });
  };

  const handleAddCard = () => {
    setDetails({
      ...details,
      cards: [...details.cards, { icon: "", heading: "", description: "" }]
    });
  };

  const handleRemoveCard = (index) => {
    const updatedCards = [...details.cards];
    updatedCards.splice(index, 1);
    setDetails({ ...details, cards: updatedCards });
  };

  const [showLectureButton, setShowLectureButton] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL});
  const dispatch = useDispatch();

  const courseFormHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseDescription", courseDescription);
    formData.append("img", courseThumbnail);
    formData.append("courseLink", courseLink);
    formData.append("coursePrice", coursePrice);
    formData.append("pdf", coursePdf);
    formData.append("teacherName", teacherName);  // Add teacherName here

    // Append lectures data
    const updatedLectures = lectures.map((lecture, index) => {
      formData.append(`lecturePdf-${index}`, lecture.pdfFile); // Append PDF file to formData
      return { ...lecture, pdfFile: undefined }; // Remove pdfFile before converting to JSON
    });

    formData.append("lectures", JSON.stringify(updatedLectures));

    // Append details schema data
    formData.append("details", JSON.stringify(details));

    axiosInstance
      .post("/post-course", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("auth_token"),
        },
      })
      .then((response) => {
        setLoading(false);
        toast({
          title: "Course created successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        // Reset form
        setCourseDescription("");
        setCourseName("");
        setCourseThumbnail("");
        setCourseLink("");
        setCoursePrice("");
        setCoursePdf("");
        setPdfLabel("Choose PDF");
        setLectures([
          {
            title: "",
            description: "",
            videoUrl: "",
            pdfFile: null,
          }
        ]);
        setDetails({
          title: "",
          text: "",
          features: "",
          overview: "",
          cards: [{ icon: "", heading: "", description: "" }]
        });
        dispatch(fetchAllCourseInfo());
        dispatch({
          type: "GET__COURSES",
          payload: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const handleLectureChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...lectures];
    list[index][name] = value;
    setLectures(list);
  };

  const handleLectureFileChange = (index, e) => {
    const list = [...lectures];
    list[index].pdfFile = e.target.files[0];
    setLectures(list);
  };

  const handleAddLecture = () => {
    setLectures([
      ...lectures,
      {
        title: "",
        description: "",
        videoUrl: "",
        pdfUrl: null,
      }
    ]);
  };

  const handleRemoveLecture = (index) => {
    const list = [...lectures];
    list.splice(index, 1);
    setLectures(list);
  };

  return (
    <div>
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
          <div className="app-main">
            <Sidebar />
            <div className="col mt-4">
            <div className="row">
                <div className="page-title-actions px-3 d-flex">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                      <li className="breadcrumb-item"><a href="">Create Course</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Create</li>
                    </ol>
                  </nav>
                </div>

                <div className="row" id="deleteTableItem">
                  <div className="col-md-12">
                    <div className="main-card card d-flex h-100 flex-column">
                      <div className="card-body">
                        <h5 className="card-title py-2">New Course</h5>
                        <form onSubmit={courseFormHandler} encType="multipart/form-data">
                          <input type="hidden" name="_token" value="zApQm200TRCSwlgCvq8JHVIYRC6flSbhaWtzbvCd" autoComplete="off"/>
                          <div className="row">
                          <div className="col-4">
                              <div className="mb-3">
                                <label className="form-label">Course Name</label>
                                <input
                                  onChange={(e) => setCourseName(e.target.value)}
                                  value={courseName}
                                  type="text"
                                  placeholder="Enter course name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="mb-3">
                                <label className="form-label">Course Description</label>
                                <input
                                  onChange={(e) => setCourseDescription(e.target.value)}
                                  value={courseDescription}
                                  className="form-control"
                                  placeholder="Enter course Description"
                                />
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="mb-3">
                                <label className="form-label">Course Thumbnail</label>
                                <input
                                  type="file"
                                  className="form-control"
                                  multiple 
                                  filename="img"
                                  onChange={(e) => {
                                    console.log(e.target.files[0]);
                                    setCourseThumbnail(e.target.files[0]);
                                    setImgLabel(`${e.target.files.length} file(s) selected`);
                                  }}
                                  id="custom-file"
                                  custom
                                  label={imgLabel ? `${imgLabel}` : "Choose photo"}
                                />
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="mb-3">
                                <label className="form-label">Course Link</label>
                                <input
                                  onChange={(e) => setCourseLink(e.target.value)}
                                  value={courseLink}
                                  as="textarea"
                                  rows={1}
                                  placeholder="Enter course link"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="mb-3">
                                <label className="form-label">Course Price</label>
                                <input
                                  onChange={(e) => setCoursePrice(e.target.value)}
                                  value={coursePrice}
                                  as="textarea"
                                  rows={1}
                                  placeholder="Enter course price"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-4">
                              <div className="mb-3">
                                <label className="form-label">Course PDF (.pdf)</label>
                                <div className="input-group">
                                  <input
                                    type="file"
                                    filename="pdf"
                                    className="form-control"
                                    multiple
                                    onChange={(e) => {
                                      console.log(e.target.files[0]);
                                      setCoursePdf(e.target.files[0]);
                                      setPdfLabel(`${e.target.files.length} file(s) selected`);
                                    }}
                                    id="custom-file-pdf"
                                    custom
                                    label={pdfLabel ? `${pdfLabel}` : "Choose PDF"}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-flex justify-content-between align-items-center mb-3">
                                <h3></h3>
                                {showLectureButton && <button type="button" className="btn btn-primary" onClick={handleAddLecture}>Add Lecture</button>}
                              </div>
                              {lectures.map((lecture, index) => (
                                <div key={index}>
                                  <h4>Add Lecture {index + 1}</h4>
                                  <div className="mb-3">
                                    <label className="form-label">Title</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={lecture.title}
                                      onChange={(e) => handleLectureChange(index, e)}
                                      name="title"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                      className="form-control"
                                      value={lecture.description}
                                      onChange={(e) => handleLectureChange(index, e)}
                                      name="description"
                                    ></textarea>
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">Video URL</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={lecture.videoUrl}
                                      onChange={(e) => handleLectureChange(index, e)}
                                      name="videoUrl"
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">Lecture PDF</label>
                                    <input
                                      type="file"
                                      className="form-control"
                                      onChange={(e) => handleLectureFileChange(index, e)}
                                    />
                                  </div>
                                  <div className="float-right">
                                    <div className="d-flex justify-content-end">
                                      <button type="button" className="btn btn-danger btn-sm ml-2" onClick={() => handleRemoveLecture(index)}>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* New fields for details schema */}
                            <div className="col-12">
                              <h5 className="mt-3">Course Details</h5>
                              <div className="mb-3">
                                <label className="form-label">Details Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={details.title}
                                  name="title"
                                  onChange={handleDetailsChange}
                                />
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Details Text</label>
                                <textarea
                                  className="form-control"
                                  value={details.text}
                                  name="text"
                                  onChange={handleDetailsChange}
                                ></textarea>
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Features</label>
                                <textarea
                                  className="form-control"
                                  value={details.features}
                                  name="features"
                                  onChange={handleDetailsChange}
                                ></textarea>
                              </div>
                              <div className="mb-3">
                                <label className="form-label">Overview</label>
                                <textarea
                                  className="form-control"
                                  value={details.overview}
                                  name="overview"
                                  onChange={handleDetailsChange}
                                ></textarea>
                              </div>
                              <h6>Cards</h6>
                              {details.cards.map((card, index) => (
                                <div key={index} className="card my-2 p-2">
                                  <div className="mb-2">
                                    <label className="form-label">Icon URL</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={card.icon}
                                      name="icon"
                                      onChange={(e) => handleCardChange(index, e)}
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">Heading</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={card.heading}
                                      name="heading"
                                      onChange={(e) => handleCardChange(index, e)}
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">Description</label>
                                    <textarea
                                      className="form-control"
                                      value={card.description}
                                      name="description"
                                      onChange={(e) => handleCardChange(index, e)}
                                    ></textarea>
                                  </div>
                                  <div className="float-right">
                                  <div className="d-flex justify-content-end">
                                  <button type="button" className="btn btn-danger btn-sm ml-2"  onClick={() => handleRemoveCard(index)}>
                                    Remove Card
                                  </button>
                                  </div>
                                  </div>
                                </div>
                              ))}
                              <button type="button" className="btn btn-primary mt-3" onClick={handleAddCard}>
                                Add Card
                              </button>
                            </div>
                          </div>
                          {/* Submit Button */}
                          <button type="submit" className="btn btn-primary mt-4">
                            Create Course
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CreateCourse;
