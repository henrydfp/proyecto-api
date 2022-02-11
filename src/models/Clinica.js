import Sequelize from 'sequelize'; // modulo
import {sequelize} from '../database/database'//conexion de la bd
 
const Clinica = sequelize.define('clinicas',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },    
    rucclinica:{
        type: Sequelize.STRING(11),
        allowNull: false
    },
    nomclinica:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    dirclinica:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telclinica:{
        type: Sequelize.STRING(12),
        allowNull:false
    },
    logoclinica:{
        type: Sequelize.STRING(50),
        allowNull: true
    },
    estado:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false
});
 
export default Clinica;
