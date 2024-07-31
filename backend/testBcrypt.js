const bcrypt = require('bcrypt');

const testHashing = async () => {
    try {
        const saltRounds = 10;
        const password = 'testpassword';
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hashed Password:', hashedPassword);

        const match = await bcrypt.compare(password, hashedPassword);
        console.log('Password Match:', match);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

testHashing();
