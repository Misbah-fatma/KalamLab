import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../SideBar';

const App = () => {
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

  useEffect(() => {
    // Fetch the purchased courses and kits data from the backend
    const fetchPurchasedItems = async () => {
      try {
        const response = await axiosInstance.get('/api/all-purchased');
        setPurchasedItems(response.data.items);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };
  
    fetchPurchasedItems();
  }, []);
  

  console.log(purchasedItems)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
    <div className="app-main">
      <Sidebar />
      <div className="col mt-4">
      <div className="row">
          <div className="page-title-actions px-3 d-flex">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="">Meta Data</a></li>
                <li className="breadcrumb-item active" aria-current="page">Create</li>
              </ol>
            </nav>
          </div>
          <div className="row" id="deleteTableItem">
            <div className="col-md-12">
              <div className="main-card card d-flex h-100 flex-column">
                <div className="card-body m-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Payment ID</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Item Type</th>
            <th scope="col">Item Details</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {purchasedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.userDetails.paymentId}</td>
              <td>{item.userDetails.userName}</td>
              <td>{item.userDetails.email}</td>
              <td>{item.type}</td>
              <td>
                {item.type === 'Course' ? (
                  <div>
                    <strong>{item.data.courseName}</strong> - {item.data.description}
                  </div>
                ) : (
                  <div>
                    <strong>{item.data.name}</strong> ({item.data.type})
                  </div>
                )}
              </td>
              <td>₹{item.userDetails.amount}</td>
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

export default App;
