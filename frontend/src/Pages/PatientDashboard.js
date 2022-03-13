import { useState, useEffect } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PatientDashboard = () => {
    const navigate = useNavigate();

    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [isPregnant, setIsPregnant] = useState("no");
    const [symptoms, setSymptoms] = useState("");
    const [allergies, setAllergies] = useState("");
    const [currentMedications, setCurrentMedications] = useState("");
    const [success, setSuccess] = useState(false);

    const pregnancyStatus = () => {
        if (gender === "female")
            if (isPregnant === "no")
                return <Card.Title>Not Pregnant</Card.Title>;
            else return <Card.Title>Pregnant</Card.Title>;
    };

    const confirmPatientRequest = () => {
        axios
            .post(
                "https://damp-fjord-26709.herokuapp.com/submitting_the_form",
                {
                    age: age,
                    gender: gender,
                    allergy: allergies,
                    current_medications: currentMedications,
                    phone_number: phoneNumber,
                    pregnant: isPregnant,
                    description: description,
                    symptom: symptoms,
                    location: "Queue_BBBBB",
                }
            )
            .then((response) => {
                console.log(response, "success");
                setSuccess(true);
            });
    };

    useEffect(() => {
        if (
            localStorage.getItem("age") === null ||
            localStorage.getItem("gender") === null ||
            localStorage.getItem("phoneNumber") === null
        ) {
            navigate("/patient");
        } else {
            setAge(localStorage.getItem("age"));
            setPhoneNumber(localStorage.getItem("phoneNumber"));
            setDescription(localStorage.getItem("description"));
            setGender(localStorage.getItem("gender"));
            if (gender === "female")
                if (localStorage.getItem("isPregnant") === "yes")
                    setIsPregnant("yes");

            setSymptoms(localStorage.getItem("symptoms"));
            setAllergies(localStorage.getItem("allergies"));
            setCurrentMedications(localStorage.getItem("currentMedications"));
        }
    });

    return (
        <Container>
            <h1>😄 Welcome 😄</h1>
            <Card>
                <Card.Body>
                    <Card.Title>
                        {age} years, {gender}
                    </Card.Title>

                    {pregnancyStatus()}

                    <Card.Text>
                        <b>Phone Number:</b> {phoneNumber}
                    </Card.Text>
                    <hr />

                    <Card.Text>
                        <b>Description:</b> {description}
                    </Card.Text>

                    <Card.Text>
                        <b>Symptoms:</b> {symptoms}
                    </Card.Text>

                    <Card.Text>
                        <b>Allergies:</b>{" "}
                        {allergies === "" ? "None" : allergies}
                    </Card.Text>

                    <Card.Text>
                        <b>Current Medications:</b>{" "}
                        {currentMedications === ""
                            ? "None"
                            : currentMedications}
                    </Card.Text>

                    {success ? (
                        <h4>Request Submitted 😃</h4>
                    ) : (
                        <Button onClick={confirmPatientRequest()}>
                            Confirm Request
                        </Button>
                    )}

                    <Button onClick={confirmPatientRequest()}>
                        Confirm Request
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default PatientDashboard;
