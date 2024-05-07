import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import {REGISTER} from "../../redux/actions/authentication";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

function FormExample() {
  const { Formik } = formik;
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirm: "",
    role: "user",
  });
  // console.log("🚀 ~ FormExample ~ user:", user);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().required(),
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();



  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 ~ FormExample Line No. 52 ~ user:", user);
    if (user?.password.length < 6 || user?.password !== user?.confirm) {
        toast.error("Password must be at least 6 characters or match the confirmation.")
        return; // Add this to prevent further execution if there's an error
    }
    try {
       await dispatch(REGISTER(user, navigate
        )) 
    } catch (error) {
       toast.error("Register component error...") 
    }
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (user?.password.length < 6 || user?.password !== user?.confirm) {
        toast.error("Password must be at least 6 characters or match the confirmation.")
        return; // Add this to prevent further execution if there's an error
    }
    try {
       await dispatch(REGISTER(user, navigate
        )) 
    } catch (error) {
       toast.error("Register component error...") 
    }

    setValidated(true);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        email: "",
    phoneNumber: "",
    password: "",
    confirm: "",
    role: "user",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={onSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={user?.firstName}
                onChange={onChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={user?.lastName}
                onChange={onChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={user?.email}
                  onChange={onChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phoneNumber"
                value={user?.phoneNumber}
                onChange={onChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                name="password"
                value={user?.password}
                onChange={onChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm"
                name="confirm"
                value={user?.confirm}
                onChange={onChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={onChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormExample;