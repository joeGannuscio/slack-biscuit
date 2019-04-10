var express = require('express');

var app = express();

const {SLACK_TOKEN: slackToken, PORT} = process.env;
const port = PORT || 3000


app.post('/bug', (req, res) => {
    console.log("Command received");
    response = {
        "text": "test"

    }
    return res.json(response);
})

app.listen(port, () => console.log(`app listening on port ${port}`));
app.get('/', (req, res) => res.send("hello world"));