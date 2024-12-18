import express from "express";
import * as dotenv from 'dotenv';
import axios from 'axios';
const app = express();

// Middleware to parse JSON request body
app.use(express.json());
dotenv.config();

const router = express.Router();

// Hugging Face API configuration
const HF_API_KEY = process.env.HF_API_KEY; // Add your Hugging Face API key to your .env file
const HF_MODEL_URL ='https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4'; // Hugging Face model endpoint

// Route to send a greeting
router.route('/').get((req, res) => {
    res.send('Hello From ImaginIQ');
});

// Route to handle image generation requests
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Call the Hugging Face API
        const hfResponse = await axios.post(
            HF_MODEL_URL,
            { inputs: prompt },
            {
                headers: {
                    Authorization: `Bearer ${HF_API_KEY}`,
                    "Content-Type": "application/json",
                },
                responseType:'arraybuffer',
            }
        );

        // Handle Hugging Face response
     //   console.log(response.data);
     const base64Image = Buffer.from(hfResponse.data, 'binary').toString('base64');
    // console.log(base64Image);


          const image = `data:image/jpeg;base64,${base64Image}`;
 // Hugging Face returns image as base64
        res.status(200).json({ photo: image });
     }// catch (err) {
    //     console.log('Error from ImaginIQRoutes while doing a post request', err.response?.data || err.message);
    //     res.status(500).send(err?.response?.data?.error || "Something went wrong with Hugging Face API");
    // }
    catch (err) {
    let errorMessage;

    // Check if response data exists and handle Buffer
    if (err.response?.data) {
        if (Buffer.isBuffer(err.response.data)) {
            // Convert Buffer to string for better readability
            const errorDataString = err.response.data.toString('utf-8');

            try {
                // Parse string into JSON if applicable
                const errorDataJson = JSON.parse(errorDataString);
                errorMessage = errorDataJson.error || errorDataJson.message || "Unknown error from Hugging Face API";
            } catch (jsonParseError) {
                // If parsing fails, use the raw string
                errorMessage = errorDataString;
            }
        } else {
            // If it's not a Buffer, use it directly
            errorMessage = err.response.data.error || err.response.data.message || "Unknown error from Hugging Face API";
        }
    } else {
        // Fallback for no response data
        errorMessage = err.message || "Unknown error occurred.";
    }

    console.error('Error from ImaginIQRoutes while doing a post request:', errorMessage);

    // Send response to client
    res.status(500).send(errorMessage);
}

});

export default router;


