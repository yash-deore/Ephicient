import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import TagsInput from "../Components/TagsInput";
import { useNavigate } from "react-router-dom";

const Patient = () => {
    // const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [symptoms, setSymptoms] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState(0);

    const navigate = useNavigate();

    const patientLogin = (e) => {
        e.preventDefault();
        console.log(age, gender, symptoms, phoneNumber);
        localStorage.setItem("age", age);
        localStorage.setItem("gender", gender);
        localStorage.setItem("symptoms", symptoms);
        localStorage.setItem("phoneNumber", phoneNumber);

        navigate("/patient-dashboard");
    };

    return (
        <Container>
            <h1>Patient Login</h1>
            <Form onSubmit={patientLogin}>
                {/* Name */}
                {/* <Form.Group className="mb-3">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group> */}

                {/* Age */}
                <Form.Group className="mb-3">
                    <Form.Label>Age :</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter Age"
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Group>

                {/* Gender */}
                <Form.Group className="mb-3">
                    <Form.Label>Gender :</Form.Label>
                    <Form.Select
                        required
                        className="mb-3"
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="transgender">Transgender</option>
                        <option value="N/A">N/A</option>
                    </Form.Select>
                </Form.Group>
                {/* Symptoms */}
                <Form.Group className="mb-3">
                    <Form.Label>Symptoms :</Form.Label>
                    <TagsInput setFormTags={setSymptoms} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone number : </Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="Your phone number"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Form.Group>

                {/* Current Medications */}
                {/* <Form.Group className="mb-3">
                    <Form.Label>Current Medications :</Form.Label>
                    <TagsInput setFormTags={setCurrentMeds} />
                </Form.Group> */}

                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default Patient;
