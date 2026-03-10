import { useState } from "react";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import './App.css';

function App() {
    const [isEditing, setIsEditing] = useState(true);

    const [cvData, setCvData] = useState({
        name: "",
        email: "",
        phone: "",
        school: "",
        degree: "",
        eduDate: "",
        company: "",
        position: "",
        expDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCvData({
            ...cvData,
            [name]: value,
        });
    };

    return (
        <div className="container">
            {cvData.name !== "" ? (<h1>{cvData.name}</h1>) : <h1>TOP CV</h1>}

            <General
                data={cvData}
                handleChange={handleChange}
                isEditing={isEditing}
            />

            <Education
                data={cvData}
                handleChange={handleChange}
                isEditing={isEditing}
            />

            <Experience
                data={cvData}
                handleChange={handleChange}
                isEditing={isEditing}
            />

            {isEditing ? (
                <button onClick={() => setIsEditing(false)}>Submit</button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
}

export default App;