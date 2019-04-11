var express = require('express');
var bodyParser = require('body-parser');
var urgentBugCommand = require('./commands/urgentBug.js');

var app = express();
app.use(bodyParser.urlencoded());

const {SLACK_TOKEN: slackToken, PORT} = process.env;
const port = PORT || 3000

app.post('/bug', (req, res) => {
    console.log("Command received");
    var bugText = urgentBugCommand.FormatUrgentBug(req.body.text);

    response = {
        "text": bugText,
        "response_type": "in_channel",
        "as_user": "true"

    }
    return res.json(response);
})

app.listen(port, () => console.log(`app listening on port ${port}`));
app.get('/', (req, res) => res.send("hello world"));