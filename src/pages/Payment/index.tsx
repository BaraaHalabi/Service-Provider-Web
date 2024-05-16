import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../../layout";

const PaymentPage = () => {
  return (
    <Layout>
      <div className="all">
        <div className="container">
          <form>
            <div className="row">
              <h4>Account</h4>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="Full Name" />
                <div className="input-icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              <div className="input-group input-group-icon">
                <input type="email" placeholder="Email Address" />
                <div className="input-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
              </div>
              <div className="input-group input-group-icon">
                <input type="password" placeholder="Password" />
                <div className="input-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-half">
                <h4>Date of Birth</h4>
                <div className="input-group">
                  <div className="col-third">
                    <input type="text" placeholder="DD" />
                  </div>
                  <div className="col-third">
                    <input type="text" placeholder="MM" />
                  </div>
                  <div className="col-third">
                    <input type="text" placeholder="YYYY" />
                  </div>
                </div>
              </div>
              <div className="col-half">
                <h4>Gender</h4>
                <div className="input-group">
                  <input
                    id="gender-male"
                    type="radio"
                    name="gender"
                    value="male"
                  />
                  <label htmlFor="gender-male">Male</label>
                  <input
                    id="gender-female"
                    type="radio"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="gender-female">Female</label>
                </div>
              </div>
            </div>
            <div className="row">
              <h4>Payment Details</h4>
              <div className="input-group">
                <input
                  id="payment-method-card"
                  type="radio"
                  name="payment-method"
                  value="card"
                  checked
                />
                <label htmlFor="payment-method-card">
                  <span>Credit Card</span>
                </label>
                <input
                  id="payment-method-paypal"
                  type="radio"
                  name="payment-method"
                  value="paypal"
                />
                <label htmlFor="payment-method-paypal">
                  <span>Paypal</span>
                </label>
              </div>
              <div className="input-group input-group-icon">
                <input type="text" placeholder="Card Number" />
                <div className="input-icon">
                  <FontAwesomeIcon icon={faCreditCard} />
                </div>
              </div>
              <div className="col-half">
                <div className="input-group input-group-icon">
                  <input type="text" placeholder="Card CVC" />
                  <div className="input-icon">
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                </div>
              </div>
              <div className="col-half">
                <div className="input-group">
                  <select>
                    <option>01 Jan</option>
                    <option>02 Jan</option>
                  </select>
                  <select>
                    <option>2015</option>
                    <option>2016</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <h4>Terms and Conditions</h4>
              <div className="input-group">
                <input id="terms" type="checkbox" />
                <label htmlFor="terms">
                  I accept the terms and conditions for signing up to this
                  service, and hereby confirm I have read the privacy policy.
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentPage;
