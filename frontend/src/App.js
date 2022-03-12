import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";

// Importing all the pages
import HomePage from "./Pages/HomePage";
import Patient from "./Pages/Patient";
import PatientDashboard from "./Pages/PatientDashboard";
import Pharmacist from "./Pages/Pharmacist";
import PharmacistDashboard from "./Pages/PharmacistDashboard";

const App = () => {
    return (
        <div>
            {/* Setting all the routes */}
            <Router>
                <Navigation />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/patient" element={<Patient />} />
                    <Route path="/pharmacist" element={<Pharmacist />} />
                    <Route
                        path="/pharmacist-dashboard"
                        element={<PharmacistDashboard />}
                    />
                    <Route
                        path="/patient-dashboard"
                        element={<PatientDashboard />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
