import express from "express";

const router = express.Router();

router.route("/").get((req, res) => res.send("CineVerse Here We Goo!"));

export default router;
