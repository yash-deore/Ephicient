import { Container, Tabs, Tab, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PharmacistDashboard = () => {
    const navigate = useNavigate();
    const [pharmaName, setPharmaName] = useState("");
    const [globalQueue, setGlobalQueue] = useState([]);

    const retrieve = async () => {
        try {
            const response = await axios.get(
                "https://damp-fjord-26709.herokuapp.com/retrieval_of_queue_information",
                { withCredentials: true }
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const acceptTask = (
        taskId,
        age,
        allergies,
        current_medications,
        description,
        gender,
        pharmacist,
        phone_number,
        pregnant,
        symptoms
    ) => {
        console.log("Task accepted", taskId);

        axios.post(
            "https://damp-fjord-26709.herokuapp.com/submitting_the_form",
            {
                age: age,
                gender: gender,
                allergy: allergies,
                current_medications: current_medications,
                phone_number: phone_number,
                pregnant: pregnant,
                description: description,
                symptom: symptoms,
                pharmacist: pharmaName,
            }
        );

        axios
            .put(
                `https://damp-fjord-26709.herokuapp.com/fuflling_a_queue/${taskId}`,
                { withCredentials: true }
            )
            .then((response) => {
                console.log(response, "deleted successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(async () => {
        const data = await retrieve();
        console.log(data);
        setGlobalQueue(data);
    }, []);

    useEffect(() => {
        // Checks if the user is logged in or not
        if (
            localStorage.getItem("pharmacistName") === null ||
            localStorage.getItem("pharmacistName") === undefined
        ) {
            navigate("/pharmacist");
        } else {
            setPharmaName(localStorage.getItem("pharmacistName"));
        }
    }, []);

    return (
        <Container>
            <h1>Welcome {pharmaName}</h1>
            Here we will have the task queues.
            <Tabs defaultActiveKey="all tasks" className="mb-3">
                <Tab eventKey="all tasks" title="All Tasks">
                    All the retrieved tasks here
                    {globalQueue.map(
                        ({
                            age,
                            allergy,
                            current_medications,
                            description,
                            gender,
                            pharmacist,
                            phone_number,
                            pregnant,
                            symptom,
                            req_id,
                        }) => (
                            <div key={req_id}>
                                {pharmacist === "" ? (
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                {age} years, {gender}
                                            </Card.Title>

                                            {pregnant === "yes" ? (
                                                <Card.Title>
                                                    Pregnant
                                                </Card.Title>
                                            ) : (
                                                ""
                                            )}

                                            <Card.Text>
                                                <b>Phone Number:</b>{" "}
                                                {phone_number}
                                            </Card.Text>
                                            <hr />

                                            <Card.Text>
                                                <b>Description:</b>{" "}
                                                {description}
                                            </Card.Text>

                                            <Card.Text>
                                                <b>Symptoms:</b> {symptom}
                                            </Card.Text>

                                            <Card.Text>
                                                <b>Allergies:</b>{" "}
                                                {allergy === ""
                                                    ? "None"
                                                    : allergy}
                                            </Card.Text>

                                            <Card.Text>
                                                <b>Current Medications:</b>{" "}
                                                {current_medications === ""
                                                    ? "None"
                                                    : current_medications}
                                            </Card.Text>

                                            {/* <Card.Text>
                                                <b>Request Id:</b> {req_id}
                                            </Card.Text> */}

                                            <Button
                                                onClick={() =>
                                                    acceptTask(
                                                        req_id,
                                                        age,
                                                        allergy,
                                                        current_medications,
                                                        description,
                                                        gender,
                                                        pharmacist,
                                                        phone_number,
                                                        pregnant,
                                                        symptom
                                                    )
                                                }
                                            >
                                                Accept Task
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                ) : (
                                    ""
                                )}

                                <br />
                            </div>
                        )
                    )}
                </Tab>

                <Tab eventKey="local tasks" title="Accepted Tasks">
                    All the accepted tasks here
                    {globalQueue.map(
                        ({
                            age,
                            allergy,
                            current_medications,
                            description,
                            gender,
                            pharmacist,
                            phone_number,
                            pregnant,
                            symptom,
                            req_id,
                        }) => (
                            <div key={req_id}>
                                {pharmacist === pharmaName ? (
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>
                                                {age} years, {gender}
                                            </Card.Title>

                                            {pregnant === "yes" ? (
                                                <Card.Title>
                                                    Pregnant
                                                </Card.Title>
                                            ) : (
                                                ""
                                            )}

                                            <Card.Text>
                                                <b>Phone Number:</b>{" "}
                                                {phone_number}
                                            </Card.Text>
                                            <hr />

                                            <Card.Text>
                                                <b>Description:</b>{" "}
                                                {description}
                                            </Card.Text>

                                            <Card.Text>
                                                <b>Symptoms:</b> {symptom}
                                            </Card.Text>

                                            <Card.Text>
                                                <b>Allergies:</b>{" "}
                                                {allergy === ""
                                                    ? "None"
                                                    : allergy}
                                            </Card.Text>

                                            <Card.Text>
                                                <b>Current Medications:</b>{" "}
                                                {current_medications === ""
                                                    ? "None"
                                                    : current_medications}
                                            </Card.Text>

                                            {/* <Card.Text>
                                                <b>Request Id:</b> {req_id}
                                            </Card.Text> */}

                                            {/* <Button
                                                onClick={() =>
                                                    acceptTask(
                                                        req_id,
                                                        age,
                                                        allergy,
                                                        current_medications,
                                                        description,
                                                        gender,
                                                        pharmacist,
                                                        phone_number,
                                                        pregnant,
                                                        symptom
                                                    )
                                                }
                                            >
                                                Accept Task
                                            </Button> */}
                                        </Card.Body>
                                    </Card>
                                ) : (
                                    ""
                                )}

                                <br />
                            </div>
                        )
                    )}
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PharmacistDashboard;
