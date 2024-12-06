import React, { useEffect, useState } from "react";
import Navbar from "../LandingPage/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../../redux/cart/cartAction";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../LandingPage/Footer";
import logo from "../LandingPage/logo10.png";

const Cart = () => {
  const state = useSelector(state => state.cart);
  console.log(state);
  const [userData, setUserData] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null); // For invoice link

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("user");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const userId = userData ? userData._id : null;
  const userName = userData ? userData.userName : null;
  const email = userData ? userData.email : null;
  const address = userData?.address || null;
  const dispatch = useDispatch();
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL });

// components/Cart.js

const checkoutHandler = async (amount, items) => {
  if (!userData) {
    console.error("User data not loaded.");
    return;
  }
  try {
    const { data: { key } } = await axiosInstance.get("/api/getkey");
    const { data: { order, invoiceLink, paymentId } } = await axiosInstance.post("/api/checkout", { amount });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Advisions Lab",
      image: logo,
      order_id: order.id,
      callback_url: "https://kalamlab.com/api/paymentverification", // Corrected the URL
      prefill: {
        name: userName,
        email: email,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
      handler: function (response) {
        axiosInstance
          .post("/api/paymentverification", {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userId,
            courseIds: items.map((item) => item.product._id), 
            amount,
            userName, 
            email,
            address,
            courseName: items
            .map((item) => {
              const name = item.product.name ? `Name: ${item.product.name}` : "";
              const courseName = item.product.courseName ? `Course Name: ${item.product.courseName}` : "";
              return [name, courseName].filter(Boolean).join(" / ");
            })
            .join(", "),
            quantity: items.map((item) => item.qty), // Pass quantities to backend
          })
          .then((res) => {
            const invoiceLink = res.data.invoiceLink;
            window.location.href = `https://kalamlab.com/paymentsuccess?reference=${response.razorpay_payment_id}&invoice=${encodeURIComponent(invoiceLink)}`;
            console.log("DOWNLOAD LINK", invoiceLink);
          })
          .catch((err) => {
            console.error("Payment verification error:", err);
          });
      },
    };

    if (window.Razorpay) {
      const razor = new window.Razorpay(options);
      razor.open();
    } else {
      console.error("Razorpay SDK not loaded");
    }
  } catch (error) {
    console.error("Checkout error:", error);
  }
};


  const EmptyCart = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-5 bg-light text-center">
          <h4 className="p-3 display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const addItem = (product) => {
    dispatch(addCart(product.product));
  };

  const removeItem = (product) => {
    dispatch(delCart(product.product));
  };

  const ShowCart = () => {
    let gst = 0.0;
    const [total, setTotal] = useState({ total_price: 0, total_qty: 0 });
  
    useEffect(() => {
      if (state.length > 0) {
        let total_price = 0;
        let total_item_qty = 0;      
        state.forEach((item) => {
          const price = item.product.coursePrice
            ? item.product.coursePrice
            : item.product.price || 0;         
          total_price += price * item.qty;
          total_item_qty += item.qty;
        });
        
        setTotal({ total_price, total_qty: total_item_qty });
      }
    }, [state]);
    
    
  
    gst = 0.18 * total.total_price; // 18% GST
    return (
      <div>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-8">
              {state.map((item) => (
        <div className="card mb-4" key={`${item.type}-${item.product._id}`}>
          <div className="card-body">
            <div className="row d-flex align-items-center">
              <div className="col-lg-3 col-md-12">
                <img
                  src={item.product.image || item.product.courseThumbnail}
                  alt={item.product.name || item.product.courseName}
                  width={100}
                  height={75}
                />
              </div>
              <div className="col-lg-5 col-md-6">
                <p>
                  <strong>{item.product.name || item.product.courseName}</strong>
                  <br />
                  <small>Type: {item.type}</small>
                </p>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                  <button className="btn px-3" onClick={() => removeItem(item)}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <button className="btn px-5">{item.qty}</button>
                  <button className="btn px-3" onClick={() => addItem(item)}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <p className="text-start text-md-center">
                  <strong>
                    <span className="text-muted">{item.qty}</span> x ₹{item.product.price}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({total.total_qty})<span>₹{total.total_price}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        GST (18%)<span>₹{gst}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong>₹{total.total_price + gst}</strong>
                        </span>
                      </li>
                    </ul>
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      onClick={() => checkoutHandler(total.total_price + gst, state.map((item) => ({
                        ...item,
                        qty: item.qty // Pass quantity along with each item
                      })))}
                    >
                      Buy Now
                    </button>
  
                    {/* Render download link if available */}
                    {downloadLink && (
                      <div className="formbold-mt-5">
                        <a href={downloadLink} download="invoice.pdf" className="btn btn-outline-dark mt-3">
                          Download Invoice
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  

  return (
    <div>
      <Navbar />
      <div className="container my-3 py-3">
        {state && state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
