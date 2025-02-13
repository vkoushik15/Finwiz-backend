require('dotenv').config({ path: require('path').join(__dirname, '../.env') });

const config = {
    mongoURI: process.env.MONGODB_URI || 'fallback_uri_here',
    port: process.env.PORT || 3000
};

console.log('Config loaded:', config);

module.exports = config; 