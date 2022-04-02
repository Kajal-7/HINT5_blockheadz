import React from "react";
import "./styles/GetStarted.css";
import GooglePayButton from '@google-pay/button-react';
import donationpic from "./assets/donationpic.png";
import donate from "./assets/donate.png";
import "./styles/Carousel.css";
import "./styles/Home.css";
import "./styles/Donate.css";


import Navbar from "./components/Navbar/Navbar";

function Donate() {
    return (
        <div id="main">
            <Navbar />
            <div class="row featurette" id="back">
                <div class="col-md-7">
                    <div class = 'text'>
                        <p class="lead">
                            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
                            ligula porta felis euismod semper. Praesent commodo cursus magna,
                            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                            commodo. Donec ullamcorper nulla non metus auctor fringilla.
                            Vestibulum id ligula porta felis euismod semper. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur. Fusce dapibus,
                            tellus ac cursus commodo. Donec ullamcorper nulla non metus auctor
                            fringilla. Vestibulum id ligula porta felis euismod semper. Praesent
                            commodo cursus magna, vel scelerisque nisl consectetur. Fusce
                            dapibus, tellus ac cursus commodo.
                        </p>
                    </div>
                    <div class = 'pay'>
                        <hr />
                        <GooglePayButton
                            environment="TEST"
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'example',
                                                gatewayMerchantId: 'exampleGatewayMerchantId',
                                            },
                                        },
                                    },
                                ],
                                merchantInfo: {
                                    merchantId: '12345678901234567890',
                                    merchantName: 'Demo Merchant',
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: '100.00',
                                    currencyCode: 'USD',
                                    countryCode: 'US',
                                },
                                shippingAddressRequired: true,
                                callbackIntents: ['PAYMENT_AUTHORIZATION'],
                            }}
                            onLoadPaymentData={paymentRequest => {
                                console.log('load payment data', paymentRequest);
                            }}
                            onPaymentAuthorized={paymentData => {
                                console.log('Payment Authorized Success', paymentData)
                                return { transactionState: 'SUCCESS' }
                            }}
                            existingPaymentMethodRequired='false'
                            buttonColor="black"
                            buttonType="donate"
                        />

                    </div>

                </div >
                <div class="col-md-5" >
                    <img
                        class="featurette-image img-fluid mx-auto"
                        src={donate}
                        alt="Generic placeholder"
                        style={{ height: "80%", width: "100%", marginTop: "40px"}}
                    ></img>
                </div>
            </div>


        </div>
    );
}

export default Donate;

