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

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };


  const onsubmit = async (e) => {
    e.preventDefault();
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
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
            onChange={onChange}
            value={user?.firstName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
            onChange={onChange}
            value={user?.lastName}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
                onChange={onChange}
              value={user?.email}
            />
            <Form.Control.Feedback type="invalid">
              Please type correct email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Number" required value={user?.phoneNumber} onChange={onChange} />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeho
          lder="password" required value={user?.password}  onChange={onChange}/>
          <Form.Control.Feedback type="invalid" >
            Enter your password.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" required value={user?.confirm} onChange={onChange}/>
          <Form.Control.Feedback type="invalid">
           Confirm your password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
      )}
    </Formik>
  );
}

export default FormExample;