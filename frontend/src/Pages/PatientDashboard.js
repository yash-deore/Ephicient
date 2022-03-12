import { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PatientDashboard = () => {
    const navigate = useNavigate();

    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [isPregnant, setIsPregnant] = useState("no");
    const [symptoms, setSymptoms] = useState("");
    const [allergies, setAllergies] = useState("");
    const [currentMedications, setCurrentMedications] = useState("");

    const pregnancyStatus = () => {
        if (gender === "female")
            if (isPregnant === "no")
                return <Card.Title>Not Pregnant</Card.Title>;
            else return <Card.Title>Pregnant</Card.Title>;
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
            <Card style={{ width: "18rem" }}>
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
                </Card.Body>
            </Card>
            Your request is under process <br />
            Patient Id:
        </Container>
    );
};

export default PatientDashboard;
