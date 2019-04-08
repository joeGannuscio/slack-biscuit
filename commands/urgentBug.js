var bugBracketString = '<!> URGENT BUG <!>';

function FormatUrgentBug(message) {
    return bugBracketString + ' ' + message + ' ' + bugBracketString;
};

module.exports = {FormatUrgentBug};