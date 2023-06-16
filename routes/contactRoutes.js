const express = require('express');
const router = express.Router();

router.route("/").get((req,res) => {
    res.send("you are at contact pages");
});

router.route("/").post((req,res) => {
    res.send("contact pages create with help of");
});

router.route("/:id").get((req,res) => {
    res.send(`contact of ${req.params.id}`);
});

router.route("/:id").put((req,res) => {
    res.send(`contact update of ${req.params.id}`);
});

router.route("/:id").delete((req,res) => {
    res.send(`delete contact of ${req.params.id}`);
});


module.exports = router