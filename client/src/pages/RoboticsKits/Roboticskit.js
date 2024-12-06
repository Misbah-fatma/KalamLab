import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../SideBar";

const AddKitForm = () => {
  const [kitName, setKitName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [kits, setKits] = useState([]); // State to hold the list of kits

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  // Fetch all kits on component mount
  useEffect(() => {
    const fetchKits = async () => {
      try {
        const response = await axiosInstance.get('/kits/details');
        setKits(response.data);
      } catch (error) {
        console.error("Error fetching kits:", error);
      }
    };

    fetchKits();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', kitName);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axiosInstance.post('/kits/fill', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
      setKitName('');
      setDescription('');
      setCategory('');
      setPrice('');
      setImage(null);

      // Refresh the list of kits after successful addition
      const updatedKits = await axiosInstance.get('/kits/details');
      setKits(updatedKits.data);
    } catch (error) {
      setMessage('Error adding kit: ' + error.message);
    }
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
      <div className="app-main">
        <SideBar />
        <div className="col mt-4">
          <div className="row">
            <div className="page-title-actions px-3 d-flex">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                  <li className="breadcrumb-item"><a href="#">Instructor</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Create</li>
                </ol>
              </nav>
            </div>
            <div className="row" id="deleteTableItem">
              <div className="col-md-12">
                <div className="main-card card d-flex h-100 flex-column">
                  <div className="card-body">
                    <h2>Add New Kit</h2>
                    {message && <div className="alert alert-info">{message}</div>}
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="kitName" className="form-label">
                          Kit Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="kitName"
                          value={kitName}
                          onChange={(e) => setKitName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          rows="3"
                          required
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="category" className="form-label">
                          Category
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="price" className="form-label">
                          Price
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="image" className="form-label">
                          Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          name="image"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Add Kit
                      </button>
                    </form>

                    {/* Display the Kits in a Table */}
                    <h3 className="mt-4">Existing Kits</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Kit Name</th>
                          <th>Description</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Image</th>
                        </tr>
                      </thead>
                      <tbody>
                        {kits.map((kit) => (
                          <tr key={kit._id}>
                            <td>{kit.name}</td>
                            <td>{kit.description}</td>
                            <td>{kit.category}</td>
                            <td>{kit.price}</td>
                            <td>
                              <img src={kit.image} alt={kit.name} width="50" height="50" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default AddKitForm;
