import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from "../../components/Inputs/Input";

const CreateSessionForm = () => {
    const [formData, setFormData] = useState({
        role: "",
        experience: "",
        topicsToFocus: "",
        description: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (key, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    const handleCreateSession = async (e) => {
        e.preventDefault();

        const { role, experience, topicsToFocus } = formData;

        if(!role || !experience || !topicsToFocus) {
            setError("Please fill all the required fields.");
            return;
        }

        setError("");
    
    };
    return <div className=''>
        <h3 className=''>
            Start a New Interview Journey
        </h3>
        <p className=''>
            Fill out a few quick details and unlock your personalized set of
            interview questions!
        </p>
        <form onSubmit={handleCreateSession} className=''>
            <Input
                value={formData.role}
                onChange={({ target }) => handleChange("role", target.value)}
                label="Target Role"
                placeholder="(e.g., Frontend Developer, UI/UX Designer, etc.)"
                type="text"
            />

            <Input
                value={formData.experience}
                onChange={({ target }) => handleChange("experience", target.value)}
                label="Years of Experience"
                placeholder="(e.g., 1 year, 3 years, 5+ years)"
                type="number"
            />

            <Input
                value={formData.topicsToFocus}
                onChange={({ target }) => handleChange("topicsToFocus", target.value)}
                label="Topics to Focus On"
                placeholder="(Comma-seperated, e.g., React, Node.js, MongoDB)"
                type="text"
            />

            <Input
                value={formData.description}
                onChange={({ target }) => handleChange("description", target.value)}
                label="Description"
                placeholder="(Any specific goals or notes for this session)"
                type="text"
            />

            {error && <p className=''>{error}</p>}

            <button
                type="submit"
                className=''
                disabled={isLoading}
            >
                Create Session
            </button>
        </form>
    </div>
};

export default CreateSessionForm;