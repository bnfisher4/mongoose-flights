const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connetted to ${db.name} at ${db.host}: ${db.port}`)
});