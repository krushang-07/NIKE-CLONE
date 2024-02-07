import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/RegisterPage.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form submit handler
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post("/api/v1/users/register", values);
      setLoading(false);
      message.success("Registration Successful");
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  // Check if the user is already logged in
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <div className="background-info">
          <h2>Welcome to Money Manager</h2>
          <p>
            Efficiently manage your expenses with our user-friendly Money
            Management.
          </p>

          <p>
            {" "}
            <b>Register now to get started!</b>
          </p>
        </div>
        <div className="register-form">
          <Form layout="vertical" onFinish={submitHandler}>
            <h2>Register Here!!</h2>
            <Form.Item label="Name" name="name" required>
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Email" name="email" required>
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password" required>
              <Input type="password" />
            </Form.Item>
            <div className="d-flex justify-content-between">
              <Link to="/login">Already registered? Login here!</Link>
              <button className="btn">Register</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
