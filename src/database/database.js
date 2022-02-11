import Sequelize from 'sequelize';
import "dotenv/config";
 
export const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    {
    dialect: 'postgres',
    logging:false,
    dialectOptions: {
        ssl: false
    }
});
sequelize.authenticate().then(()=>{
    console.log('La conexión se ha establecido con éxito');
}).catch(err => {
    console.log('No se puede conectar a la base de datos:', err);
})
