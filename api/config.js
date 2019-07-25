exports.app = {
    PORT : 8080,
    MONGODB_URI: 'mongo://' + process.env.MONGO_HOST + ':27017/userDatabase',
    logErrors: true
};
