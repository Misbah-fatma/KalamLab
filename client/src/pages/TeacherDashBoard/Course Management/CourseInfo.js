import React, { useState, useEffect } from "react";
import Sidebar from '../SideBar';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCourseInfo } from "../../../redux/course/courseAction";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from 'react-router-dom';

const CourseInfo = ({ course }) => {
    const courseData = useSelector((state) => state.course.courseInfo);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const userDataFromStorage = localStorage.getItem("user");
      if (userDataFromStorage) {
        try {
          const parsedData = JSON.parse(userDataFromStorage);
          setUserData(parsedData);
        } catch (error) {
          console.error("Failed to parse user data:", error);
        }
      }
    }, []);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const userId = userData?._id;
    console.log(courseData)

    useEffect(() => {
        dispatch(fetchAllCourseInfo());
    }, [course, dispatch]);

    // Filter courses created by the logged-in user
    const filteredCourses = Array.isArray(courseData)
        ? courseData.filter(course => course.teacher?._id === userId)
        : [];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
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
                                        <li className="breadcrumb-item"><a href="/studentDashboard">Dashboard</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Course</li>
                                    </ol>
                                </nav>
                            </div>

                            <div className="row" id="deleteTableItem">
                                <div className="col-md-12">
                                    <div className="card mb-5">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table id="dataTable" className="table table-responsive-xl">
                                                    <thead>
                                                        <tr className="text-center">
                                                            <th><strong>Course</strong></th>
                                                            <th><strong>Description</strong></th>
                                                            <th><strong>Price</strong></th>
                                                            <th><strong>Instructor</strong></th>
                                                            <th><strong>Course Link</strong></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredCourses
                                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                                            .map((row) => (
                                                                <tr key={row._id}>
                                                                    <td className="tableProduct">
                                                                        <div className="listproduct-section">
                                                                            <div className="product-pera">
                                                                                <p className="priceDis">
                                                                                    {typeof row.courseName === 'string' ? row.courseName : "N/A"}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="tableCustomar">
                                                                    {row.courseDescription
        ? row.courseDescription.split(' ').slice(0, 15).join(' ') + (row.courseDescription.split(' ').length > 15 ? '...' : '')
        : "N/A"}
                                                                    </td>
                                                                    <td className="tableId">{row.coursePrice}</td>
                                                                    <td className="tableId">
                                                                        {row.teacher?.userName}
                                                                    </td>
                                                                    <td className="tableId">
                                                                        {typeof row.courseLink === 'string' 
                                                                            ? row.courseLink 
                                                                            : (row.courseLink && row.courseLink.url) 
                                                                                ? row.courseLink.url 
                                                                                : "N/A"}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                            <TablePagination
                                                rowsPerPageOptions={[5, 10, 25]}
                                                component="div"
                                                count={filteredCourses.length}
                                                rowsPerPage={rowsPerPage}
                                                page={page}
                                                onPageChange={handleChangePage}
                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                            />
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

export default CourseInfo;
