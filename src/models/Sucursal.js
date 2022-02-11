import Sequelize from 'sequelize'; // modulo
import {sequelize} from '../database/database'//conexion de la bd
 
import Clinica from './Clinica';
const Sucursal = sequelize.define('sucursals',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },    
    nomsucursal:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    dirsucursal:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    telsucursal:{
        type: Sequelize.STRING(11),
        allowNull:false
    },
    nrosillas:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    clinicaid:{
        type: Sequelize.INTEGER
    },
    estado:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false
});
 
Clinica.hasMany(Sucursal,{foreignKey:'clinicaid', sourceKey:'id', as:"sucursals"});
Sucursal.belongsTo(Clinica,{foreignKey:"clinicaid", sourceKey:'id', as:"clinica"});

export default Sucursal;
