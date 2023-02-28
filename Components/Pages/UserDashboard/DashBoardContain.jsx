import React from 'react';
import { Col, Row } from 'reactstrap';
import { UserDashboardData } from '../../../Data/UserDashboardData';
import { CommonPath } from '../../Constant';
import AccountInformation from './AccountInformation';

const DashBoardContain = ({
  fullName, email, address,
  country, city, zipCode,
  processing, delivered, numberOfWishlist
}) => {

  return (
    <div className='dashboard-right'>
      <div className='dashboard'>
        <div className='page-title title title1 title-effect'>
          <h2>My Dashboard</h2>
        </div>
        <div className='welcome-msg'>
          <h6 className='font-light'>
            Hello <span>{fullName}</span>
          </h6>
          <p className='font-light'>In this dashboard you can see your short information about your account.</p>
        </div>

        <div className='order-box-contain my-4'>
          <Row className='g-4'>
            {/* Pending orders */}
            <Col lg='4' sm='6' >
              <div className='order-box'>
                <div className='order-box-image'>
                  <img src={`/assets/images/svg/box.png`} className='img-fluid' alt='order' />
                </div>
                <div className='order-box-contain'>
                  <img src={`/assets/images/svg/box1.png`} className='img-fluid' alt='box' />
                  <div>
                    <h5 className='font-light'>Pending Orders</h5>
                    <h3>{processing}</h3>
                  </div>
                </div>
              </div>
            </Col>

            {/* Completed orders */}
            <Col lg='4' sm='6' >
              <div className='order-box'>
                <div className='order-box-image'>
                  <img src={`/assets/images/svg/sent.png`} className='img-fluid' alt='order' />
                </div>
                <div className='order-box-contain'>
                  <img src={`/assets/images/svg/sent1.png`} className='img-fluid' alt='box' />
                  <div>
                    <h5 className='font-light'>Sent Orders</h5>
                    <h3>{delivered}</h3>
                  </div>
                </div>
              </div>
            </Col>

            {/* Wishlist */}
            <Col lg='4' sm='6' >
              <div className='order-box'>
                <div className='order-box-image'>
                  <img src={`/assets/images/svg/wishlist.png`} className='img-fluid' alt='order' />
                </div>
                <div className='order-box-contain'>
                  <img src={`/assets/images/svg/wishlist1.png`} className='img-fluid' alt='box' />
                  <div>
                    <h5 className='font-light'>Wishlist</h5>
                    <h3>{numberOfWishlist}</h3>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
        </div>
        <div className='box-account box-info'>
          <div className='box-head'>
            <h3>Account Information</h3>
          </div>
          <Row>
            <Col lg="6" sm='12'>
              <div className='box'>
                <div className='box-title'>
                  <h4>Contact Information</h4>
                </div>
                <div className='box-content'>
                  <div>
                    <p className='font-light' style={{ fontSize: "16px" }}>Full Name</p>
                    <p style={{ fontSize: "16px" }}>{fullName}</p>
                  </div>

                  <div className='mt-3'>
                    <p className='font-light' style={{ fontSize: "16px" }}>Email Address</p>
                    <p style={{ fontSize: "16px" }}>{email}</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="6" sm='12'>
              <div className='box'>
                <div className='box-title'>
                  <h4>Address Information</h4>
                </div>
                <div className='box-content'>
                  <div className='mt-3'>
                    <p className='font-light' style={{ fontSize: "16px" }}>Country</p>
                    <p style={{ fontSize: "16px" }}>{country ? country : "Not specified"}</p>
                  </div>
                  <div className='mt-3'>
                    <p className='font-light' style={{ fontSize: "16px" }}>City</p>
                    <p style={{ fontSize: "16px" }}>{city ? city : "Not specified"}</p>
                  </div>
                  <div className='mt-3'>
                    <p className='font-light' style={{ fontSize: "16px" }}>Zip Code</p>
                    <p style={{ fontSize: "16px" }}>{zipCode ? zipCode : "Not specified"}</p>
                  </div>
                  <div className='mt-3'>
                    <p className='font-light' style={{ fontSize: "16px" }}>Address</p>
                    <p style={{ fontSize: "16px" }}>{address ? address : "Not specified"}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        {/* <AccountInformation elem={elem} /> */}
      </div>
    </div>
  );
};

export default DashBoardContain;
