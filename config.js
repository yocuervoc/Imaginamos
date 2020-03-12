module.exports = {
    db: {
      database: process.env.DB_NAME || 'delivery',
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || 'password',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      setup: true,
      
    },
    auth:{
      secret: process.env.SECRET || 'llaveDelToken'
    }
  }