const env = {
    database: 'jobPortal',  // Database Name
    username: 'root',       // Database Username
    password: 'root',       // Database Password
    host: 'localhost',      // Stockage Db: Localhost or IP Adresse
    dialect: 'mysql',       // Type Stockage Db
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;