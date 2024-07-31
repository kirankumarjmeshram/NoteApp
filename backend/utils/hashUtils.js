const crypto = require('crypto');

const hashString = (string) => {
    const hash = crypto.createHash('sha256').update(string).digest('hex');
    return hash;
};

exports.exports = hashString;