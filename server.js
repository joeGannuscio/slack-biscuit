var express = require('express');

var app = express();

const {SLACK_TOKEN: slackToken, PORT} = process.env;
const port = PORT || 3000


app.post('/bug', (req, res) => {
    console.log("Command received");
    const slackReqObj = req.body;

    const response = {
        response_type: 'in_channel',
        channel: slackReqObj.channel_id,
        text: 'TEST'
    };

    console.log(slackReqObj.channel_id);
    return res.json(response);
})

app.listen(port, () => console.log(`app listening on port ${port}`));
app.get('/', (req, res) => res.send("hello world"));