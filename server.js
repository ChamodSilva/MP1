// Used for parsing contact form information into .json
const bodyParser = require('body-parser');
const fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//API call from lichess.org
app.post('/lichess-api', async (req, res) =>
{
    const { gameId } = req.body;
    const url = `https://lichess.org/game/export/${gameId}`;

    try
    {
        const response = await fetch(url,
        {
            headers:
            {
                Accept: "application/json",
            }
        });
        if (!response.ok)
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    }
    catch(error)
    {
        console.error('Proxy error:', error);
        res.status(500).json({ error: 'Proxy error' });
    }
});

//Post call to make/add to contact_submission.json
app.post("/submit-contact", (req, res) =>
{
    const { name, email, message } = req.body;

    const submission = { name, email, message };

    fs.readFile("contact_submissions.json", "utf8", (err, data) =>
    {
        let submissions = [];

        if (!err && data)
        {
            submissions = JSON.parse(data);
        }

        submissions.push(submission);

        fs.writeFile("contact_submissions.json", JSON.stringify(submissions, null, 2), (err) =>
        {
            if (err)
            {
                console.error("Error writing to JSON:", err);
                res.status(500).send("An error occurred.");
            }
            else
            {
                console.log("Submission saved to JSON.");
                res.send("Thank you for your submission!");
            }
        });
    });
});

app.listen(port, () =>
{
    console.log(`Server is running. To close server press: CTRL + C`);
    console.log(`===================================================`);
    console.log(`Click (CTRL + CLICK in some cases) on the following link to get to home page:`);
    console.log(`http://localhost:${port}/index.html`);
});