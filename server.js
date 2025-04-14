// Used for parsing contact form information into .json
const bodyParser = require('body-parser');
const fs = require('fs');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

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
    console.log(`Server listening at http://localhost:${port}/index.html`);
});