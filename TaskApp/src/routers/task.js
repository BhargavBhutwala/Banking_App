const express = require("express");

const Task = require("../models/task");

const auth = require("../middleware/auth");

const router = express.Router();


// =========================================
// POST /tasks
// Create task
// =========================================

router.post("/", auth, async (req, res) => {

    try {

        const task = new Task({

            description: req.body.description,

            owner: req.user._id

        });


        await task.save();


        res.status(201).json(task);

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }

});


// =========================================
// GET /tasks
// Filter + Sort + Pagination
// =========================================

router.get("/", auth, async (req, res) => {

    try {

        // ------------------------------
        // Filter
        // ------------------------------

        const filter = {

            owner: req.user._id

        };


        if (req.query.completed !== undefined) {

            filter.completed =
                req.query.completed === "true";

        }


        // ------------------------------
        // Pagination
        // ------------------------------

        const limit =
            Math.min(
                parseInt(req.query.limit) || 10,
                100
            );


        const skip =
            parseInt(req.query.skip) || 0;


        // ------------------------------
        // Sorting
        // ------------------------------

        let sort = {
            createdAt: -1
        };


        if (req.query.sortBy) {

            const [
                field,
                direction
            ] = req.query.sortBy.split(":");


            const allowedFields = [
                "createdAt",
                "updatedAt",
                "description",
                "completed"
            ];


            if (allowedFields.includes(field)) {

                sort = {

                    [field]:
                        direction === "asc"
                            ? 1
                            : -1

                };

            }

        }


        // ------------------------------
        // Query MongoDB
        // ------------------------------

        const tasks = await Task.find(filter)

            .sort(sort)

            .skip(skip)

            .limit(limit);


        const total =
            await Task.countDocuments(filter);


        res.json({

            count: tasks.length,

            total,

            limit,

            skip,

            tasks

        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});


// =========================================
// PATCH /tasks/:id
// Update task
// =========================================

router.patch("/:id", auth, async (req, res) => {

    try {

        const updates = {};


        if (req.body.description !== undefined) {

            updates.description =
                req.body.description;

        }


        if (req.body.completed !== undefined) {

            updates.completed =
                req.body.completed;

        }


        const task =
            await Task.findOneAndUpdate(

                {
                    _id: req.params.id,

                    owner: req.user._id
                },

                updates,

                {
                    new: true,

                    runValidators: true
                }

            );


        if (!task) {

            return res.status(404).json({
                error: "Task not found"
            });

        }


        res.json(task);

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }

});


// =========================================
// DELETE /tasks/:id
// Delete task
// =========================================

router.delete("/:id", auth, async (req, res) => {

    try {

        const task =
            await Task.findOneAndDelete({

                _id: req.params.id,

                owner: req.user._id

            });


        if (!task) {

            return res.status(404).json({
                error: "Task not found"
            });

        }


        res.json({

            message: "Task deleted successfully",

            task

        });

    } catch (error) {

        res.status(400).json({
            error: error.message
        });

    }

});


module.exports = router;