import express from 'express';

const router = express.Router();

router.route("/").get((req, res) => res.send("hello"));

router.route("/authenticate").post((req, res) => {
    const { username } = req.body;
    return res.json({ username: username, secret: "secret,," });
});

export default router;
