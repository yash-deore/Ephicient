import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PharmacistDashboard = () => {
    const navigate = useNavigate();
    const [pharmaName, setPharmaName] = useState("");

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
        <div>
            <h1>Welcome {pharmaName}</h1>
            Here we will have the task queues.
        </div>
    );
};

export default PharmacistDashboard;
