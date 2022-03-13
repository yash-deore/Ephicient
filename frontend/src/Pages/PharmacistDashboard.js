import { Container, Tabs, Tab, Card } from "react-bootstrap";
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
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    const renderTasks = () => {
        globalQueue.map(
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
            }) => <Card>Hello</Card>
        );
    };

    useEffect(async () => {
        const data = await retrieve();
        setGlobalQueue(data);
        console.log("data: ", data);
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
    });

    return (
        <Container>
            <h1>Welcome {pharmaName}</h1>
            Here we will have the task queues.
            <Tabs defaultActiveKey="all tasks" className="mb-3">
                <Tab eventKey="all tasks" title="All Tasks">
                    {renderTasks()}
                    All the retrieved tasks here
                </Tab>

                <Tab eventKey="local tasks" title="Accepted Tasks">
                    All the accepted tasks here
                </Tab>
            </Tabs>
        </Container>
    );
};

export default PharmacistDashboard;
