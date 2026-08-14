// // // // const math = require("./math");

// // // // console.log("Addition:", math.add(10, 5));

// // // // console.log("Subtraction:", math.subtract(10, 5));

// // // // console.log("Multiplication:", math.multiply(10, 5));

// // // // console.log("Division:", math.divide(10, 5));

// // // import {
// // //     add,
// // //     subtract,
// // //     multiply,
// // //     divide
// // // } from "./math.js";


// // // console.log("Addition:", add(10, 5));

// // // console.log("Subtraction:", subtract(10, 5));

// // // console.log("Multiplication:", multiply(10, 5));

// // // console.log("Division:", divide(10, 5));

// // // Import Express framework
// // // Express is used to create the web server and handle HTTP requests.
// // const express = require('express');

// // // Import body-parser
// // // body-parser reads data submitted through HTML forms and JSON requests.
// // const bodyParser = require('body-parser');


// // // Temporary in-memory notes data.
// // // In a real application, this data would normally be stored in a database.
// // const notes = [
// //     {
// //         noteId: 1,
// //         noteContent:
// //             "Hey, Prasunamba you can add your important notes here."
// //     }
// // ];


// // // Create an Express application.
// // const app = express();


// // // Tell Express that we are using EJS as our template/view engine.
// // app.set('view engine', 'ejs');


// // // Parse incoming JSON request bodies.
// // app.use(bodyParser.json());


// // // Parse data submitted through HTML forms.
// // // extended: true allows complex form data to be parsed.
// // app.use(
// //     bodyParser.urlencoded({
// //         extended: true
// //     })
// // );


// // // --------------------------------------------------
// // // GET "/" - Display all notes
// // // --------------------------------------------------

// // app.get("/", function (req, res) {

// //     // Render home.ejs.

// //     // "data" is passed from the backend to the EJS page.
// //     // The EJS file can access it using the variable "data".
// //     res.render("home", {
// //         data: notes
// //     });

// // });


// // // --------------------------------------------------
// // // POST "/" - Add a new note
// // // --------------------------------------------------

// // app.post("/", (req, res) => {

// //     // Get noteContent submitted from the HTML form.
// //     const noteContent = req.body.noteContent;


// //     // Generate a new ID.
// //     // Here we simply use the current array length + 1.
// //     const noteId = notes.length + 1;


// //     // Add the new note to the notes array.
// //     notes.push({

// //         noteId: noteId,

// //         noteContent: noteContent

// //     });


// //     // Render the home page again with the updated notes.
// //     res.render("home", {

// //         data: notes

// //     });

// // });


// // // --------------------------------------------------
// // // POST "/update" - Update an existing note
// // // --------------------------------------------------

// // app.post('/update', (req, res) => {

// //     // Get the note ID submitted by the form.
// //     var noteId = req.body.noteId;


// //     // Get the new note content.
// //     var noteContent = req.body.noteContent;


// //     // Search through all notes.
// //     notes.forEach(note => {

// //         // Find the note whose ID matches the submitted ID.
// //         if (note.noteId == noteId) {

// //             // Update its content.
// //             note.noteContent = noteContent;

// //         }

// //     });


// //     // Display the updated notes.
// //     res.render("home", {

// //         data: notes

// //     });

// // });


// // // --------------------------------------------------
// // // POST "/delete" - Delete a note
// // // --------------------------------------------------

// // app.post('/delete', (req, res) => {

// //     // Get the note ID from the submitted form.
// //     var noteId = req.body.noteId;


// //     // Variable used to keep track of the array position.
// //     var j = 0;


// //     // Loop through all notes.
// //     notes.forEach(note => {

// //         j = j + 1;


// //         // Check whether this is the note we want to delete.
// //         if (note.noteId == noteId) {

// //             // Remove the note from the array.

// //             // j - 1 is used because array indexes start from 0.
// //             notes.splice((j - 1), 1);

// //         }

// //     });


// //     // Render the page again after deleting the note.
// //     res.render("home", {

// //         data: notes

// //     });

// // });


// // // --------------------------------------------------
// // // Start the Express server
// // // --------------------------------------------------

// // app.listen(3000, (req, res) => {

// //     // Server will listen on port 3000.
// //     console.log("App is running on port 3000");

// // });

// // Import required modules
// const express = require("express");
// require("dotenv").config();


// // Initialize Express application
// const app = express();


// // --------------------------------------------------
// // Function to get weather information
// // --------------------------------------------------

// async function getWeather(city) {

//     try {

//         // Call OpenWeatherMap API
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`
//         );


//         // Check whether API request was successful
//         if (!response.ok) {

//             throw new Error(
//                 `Weather API returned ${response.status}`
//             );

//         }


//         // Convert response into JSON
//         const data = await response.json();


//         // Return only the information we need
//         return {

//             city: data.name,

//             country: data.sys.country,

//             forecast: data.weather[0].description,

//             temperature: data.main.temp,

//             feelsLike: data.main.feels_like,

//             humidity: data.main.humidity,

//             windSpeed: data.wind.speed

//         };

//     }

//     catch (error) {

//         console.error(
//             "Weather API Error:",
//             error.message
//         );


//         // Return error information
//         return {

//             error: "Unable to fetch weather information",

//             message: error.message

//         };

//     }

// }


// // --------------------------------------------------
// // Weather route
// // --------------------------------------------------

// app.get("/weather", async (req, res) => {

//     // Get city from query parameter.
//     // If city is not provided, use Bengaluru.
//     const city =
//         req.query.city || "Bengaluru";


//     // Call asynchronous weather function
//     const weatherData =
//         await getWeather(city);


//     // Send weather information as JSON
//     res.json(weatherData);

// });


// // --------------------------------------------------
// // Start the server
// // --------------------------------------------------

// app.listen(3000, () => {

//     console.log(
//         "Weather server running on port 3000"
//     );

// });

const mongoose = require("mongoose");


// 1. Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/bankingDB")
    .then(() => {

        console.log("Connected to MongoDB");

    })
    .catch((error) => {

        console.error("MongoDB connection error:", error);

    });


// 2. Define Schema

const userSchema = new mongoose.Schema({

    name: String,

    age: Number,

    email: {
        type: String,
        required: true
    }

});


// 3. Create Model

const User = mongoose.model(
    "User",
    userSchema
);


// 4. Insert a document

const newUser = new User({

    name: "Prasunamba",

    age: 30,

    email: "prasun@example.com"

});


// 5. Save the document

newUser.save()
    .then(() => {

        console.log("User saved successfully!");

    })
    .catch((error) => {

        console.error("Error saving user:", error);

    });