const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('../schema.json');

function validate(data) {
    var valid = ajv.validate(schema, data);
    if (!valid) throw JSON.stringify(ajv.errors);
}

console.log('Validating video-providers.json...');
validate(require('../video-providers.json'));
console.log('Valid!');
