require("dotenv").config();

const express = require("express");

const connectDB =
    require("./db/mongoose");

const userRouter =
    require("./routers/user");

const taskRouter =
    require("./routers/task");


const app = express();


// Middleware
app.use(express.json());


// Routes
app.use("/users", userRouter);

app.use("/tasks", taskRouter);


// Basic home route
app.get("/", (req, res) => {

    res.json({
        message: "Task App API is running"
    });

});


// Start server only when this file
// is executed directly.
if (require.main === module) {

    connectDB()
        .then(() => {

            app.listen(3000, () => {

                console.log(
                    "Server running on port 3000"
                );

            });

        })
        .catch((error) => {

            console.error(
                "Unable to start server:",
                error.message
            );

        });

}


module.exports = app;