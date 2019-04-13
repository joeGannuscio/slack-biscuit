var assert = require('assert');
var urgentBugCommand = require('../commands/urgentBug.js');

it('should append bug brackets', function(){
    var result = urgentBugCommand.FormatUrgentBug('test');
    var expected = '<!> URGENT BUG <!> TeSt <!> URGENT BUG <!>';
    assert.equal(result, expected);
});