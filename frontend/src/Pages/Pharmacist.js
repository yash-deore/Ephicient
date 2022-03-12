import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pharmacist = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const pharmaLogin = (e) => {
        e.preventDefault();
        console.log(name, password);

        if (
            (name === "yash" && password === "yash") ||
            (name === "fei" && password === "fei") ||
            (name === "anita" && password === "anita")
        ) {
            localStorage.setItem("pharmacistName", name);
            navigate("/pharmacist-dashboard");
        }
    };

    return (
        <Container>
            <h1>Pharmacist Login</h1>
            <Form onSubmit={pharmaLogin}>
                {/* Name */}
                <Form.Group className="mb-3">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                {/* Password */}
                <Form.Group className="mb-3">
                    <Form.Label>Password :</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default Pharmacist;
