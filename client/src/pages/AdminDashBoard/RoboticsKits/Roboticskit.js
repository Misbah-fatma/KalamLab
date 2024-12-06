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
  const [popupText, setPopupText] = useState('');
  const [pdf, setPdf] = useState(null);
  const [message, setMessage] = useState('');
  const [kits, setKits] = useState([]);
  const [editingKit, setEditingKit] = useState(null);

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

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

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdf(file);
    } else {
      alert('Please select a valid PDF file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', kitName);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('image', image);
    formData.append('popupText', popupText);
    formData.append('pdf', pdf);

    try {
      const response = await axiosInstance.post('/kits/fill', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage(response.data.message);
      resetForm();
      refreshKits();
    } catch (error) {
      setMessage('Error adding kit: ' + error.message);
    }
  };

  const resetForm = () => {
    setKitName('');
    setDescription('');
    setCategory('');
    setPrice('');
    setImage(null);
    setPopupText('');
    setPdf(null);
  };

  const refreshKits = async () => {
    const response = await axiosInstance.get('/kits/details');
    setKits(response.data);
  };

  const handleEdit = (kit) => {
    setEditingKit(kit);
    setKitName(kit.name);
    setDescription(kit.description);
    setCategory(kit.category);
    setPrice(kit.price);
    setPopupText(kit.popupText);
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('name', kitName);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('popupText', popupText);
    if (image) formData.append('image', image);
    if (pdf) formData.append('pdf', pdf);

    try {
      await axiosInstance.put(`/kits/update/${editingKit._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Kit updated successfully.');
      resetForm();
      setEditingKit(null);
      refreshKits();
    } catch (error) {
      setMessage('Error updating kit: ' + error.message);
    }
  };

  const handleDelete = async (kitId) => {
    try {
      await axiosInstance.delete(`/kits/delete/${kitId}`);
      setMessage('Kit deleted successfully.');
      refreshKits();
    } catch (error) {
      setMessage('Error deleting kit: ' + error.message);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
    <div className="app-main">

        <SideBar />
        <div className="col mt-4">
          <div className="row">
            <div className="col-md-12">
              <div className="main-card card">
                <div className="card-body">
                  <h2>Add New Kit</h2>
                  {message && <div className="alert alert-info">{message}</div>}
                  <form onSubmit={handleSubmit}>
                    {/* Form Fields */}
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
                    <div className="mb-3">
                      <label htmlFor="popupText" className="form-label">
                        Popup Text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="popupText"
                        value={popupText}
                        onChange={(e) => setPopupText(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="pdf" className="form-label">PDF</label>
                      <input
                        type="file"
                        className="form-control"
                        id="pdf"
                        name="pdf"
                        accept="application/pdf"
                        onChange={handlePdfChange}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">Add Kit</button>
                  </form>

                  {/* Kits Table */}
                  <h3 className="mt-4">Existing Kits</h3>
                  <table className="table">
                    <thead>
                      <tr>
                      <th>Kit Name</th>
                          <th>Description</th>
                          <th>Category</th>
                          <th>Price</th>
                          <th>Image</th>
                          <th>Popup Text</th>
                          <th> PDF </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kits.map((kit) => (
                        <tr key={kit._id}>
                          <td>{kit.name}</td>
                          <td>{kit.description.split(' ').slice(0, 15).join(' ')}{kit.description.split(' ').length > 15 ? '...' : ''}</td>

                            <td>{kit.category}</td>
                            <td>{kit.price}</td>
                            <td>
                              <img src={kit.image} alt={kit.name} width="50" height="50" />
                            </td>
                            <td>
  {kit.popupText.split(' ').slice(0, 15).join(' ')}
  {kit.popupText.split(' ').length > 15 ? '...' : ''}
</td>

                           <td><a href={kit.pdf}>View</a></td> 
                          <td>
                            <button className="btn btn-warning" onClick={() => handleEdit(kit)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => handleDelete(kit._id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Edit Modal */}
                  {editingKit && (
                    <div className="modal show d-block" tabIndex="-1">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Edit Kit</h5>
                            <button type="button" className="btn-close" onClick={() => setEditingKit(null)}></button>
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <label htmlFor="editKitName" className="form-label">Kit Name</label>
                              <input
                                type="text"
                                className="form-control"
                                id="editKitName"
                                value={kitName}
                                onChange={(e) => setKitName(e.target.value)}
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="editDescription" className="form-label">Description</label>
                              <textarea
                                className="form-control"
                                id="editDescription"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows="3"
                              ></textarea>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="editCategory" className="form-label">Category</label>
                              <input
                                type="text"
                                className="form-control"
                                id="editCategory"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="editPrice" className="form-label">Price</label>
                              <input
                                type="number"
                                className="form-control"
                                id="editPrice"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                              />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="editPopupText" className="form-label">Popup Text</label>
                              <input
                                type="text"
                                className="form-control"
                                id="editPopupText"
                                value={popupText}
                                onChange={(e) => setPopupText(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="file" className="form-control" id="image" onChange={handleImageChange} />
                      </div>
                        
                      <div className="mb-3">
                        <label htmlFor="pdf" className="form-label">PDF</label>
                        <input type="file" className="form-control" id="pdf" accept="application/pdf" onChange={handlePdfChange} />
                      </div>
                          <div className="modal-footer">
                            <button className="btn btn-secondary" onClick={() => setEditingKit(null)}>Close</button>
                            <button className="btn btn-primary" onClick={handleUpdate}>Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
