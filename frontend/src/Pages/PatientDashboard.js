import { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
    const navigate = useNavigate();

    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [symptoms, setSymptoms] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState(0);

    useEffect(() => {
        if (
            localStorage.getItem("age") === null ||
            localStorage.getItem("gender") === null ||
            localStorage.getItem("symptoms") === null ||
            localStorage.getItem("phoneNumber") === null
        ) {
            navigate("/patient");
        } else {
            setAge(localStorage.getItem("age"));
            setGender(localStorage.getItem("gender"));
            setSymptoms(localStorage.getItem("symptoms"));
            setPhoneNumber(localStorage.getItem("phoneNumber"));
        }
    });

    return (
        <Container>
            <h1>😄 Welcome 😄</h1>
            <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Card.Title>
                        {age} years, {gender}
                    </Card.Title>
                    <hr />

                    <Card.Text>
                        <b>Symptoms:</b> {symptoms}
                    </Card.Text>

                    <Card.Text>
                        <b>Phone Number:</b> {phoneNumber}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PatientDashboard;
