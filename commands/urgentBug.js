var bugBracketString = '<!> URGENT BUG <!>';

function FormatUrgentBug(message) {
    return bugBracketString + ' ' + CrazyCaps(message) + ' ' + bugBracketString;
};

function CrazyCaps(message) {
    var chars = message.toLowerCase().split("");

    for (var i = 0; i < chars.length; i += 2) {
        chars[i] = chars[i].toUpperCase();
    }
    
    return chars.join("");
}


module.exports = {FormatUrgentBug};