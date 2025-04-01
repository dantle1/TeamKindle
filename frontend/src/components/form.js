import { useState } from 'react';
import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

const url = apiURL

function Form() {
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(url);
        try {
            // Send a POST request to JSONPlaceholder's /posts endpoint with the message as the "body" parameter
            const response = await axios.post(url + '/api/postmessages', {
                message: message
            });

            // Handle the successful response (you can access response.data for the returned data)
            console.log("Success! Response:", response.data);
        } catch (error) {
            // Handle any errors that occur during the POST request
            console.error("Error sending POST request:", error);
        }
    }

    return (
        <div style={{ marginBottom: "30px" }}>
            <b>YOUR MESSAGE: {message}</b>
            <form onSubmit={handleSubmit}>
                <label>Enter your message:
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;
