// components/PaymentSuccess.js

import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const referenceNum = searchParams.get("reference");
    const invoiceLink = searchParams.get("invoice"); 
    console.log(invoiceLink)

    return (
        <Box className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <div className="card shadow border-success">
                        <div className="card-body">
                            <i className="fa fa-check-circle fa-3x text-success" aria-hidden="true"></i>
                            <h2 className="mt-3 text-success">Your Payment Was Successful</h2>
                            <p className="mt-3">
                                Thank you for your payment. We will<br />
                                be in contact with more details shortly.
                            </p>
                            <Text fontSize="lg" fontWeight="bold">
                                Reference No: {referenceNum}
                            </Text>
                            <p className="mt-4">
                                Have a great day! An invoice has been sent to your email.
                            </p>

                            {invoiceLink && (
                                <a
                                    href={invoiceLink}
                                    className="btn btn-primary mt-3"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download Invoice
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="py-3">
                        <a href="/" className="btn btn-outline-secondary px-4">
                            Go Back
                        </a>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default PaymentSuccess;
