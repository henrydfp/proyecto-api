import Clinica from '../models/Clinica';
 
//insertar (POST)
export async function createClinica(req, res) {
    const {rucclinica,nomclinica,dirclinica,telclinica,logoclinica} = req.body;
   try {
    let newClinica = await Clinica.create({
        rucclinica,
        nomclinica,
        dirclinica,
        telclinica,
        logoclinica
    },{
        fields:['rucclinica','nomclinica','dirclinica','telclinica','logoclinica']
    });
    if(newClinica){
        res.json({
         message: "Clinica creado correctamente",
         data:newClinica
        });
    }      
   } catch (error) {
       res.status(500).json({
           message:"Un error a ocurrido",
           data:{}
       });
   }
}
//seleccionar todo
export async function getClinicas(req, res) {
    try {
        const clinicas = await Clinica.findAll();
        res.json({
            message:"Clinicas correctamente obtenidos",
            data:clinicas
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Seleccionar una clinica por id (GET)
export async function getOneClinica(req, res) {
    const {id} = req.params;
    try {
        const clinica = await Clinica.findOne({
            where:{
                id
            }
        });
        res.json({
            message: "Clinica obtenido correctamente",
            data: clinica
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Actualizar (PUT)
export async function updateClinica(req, res) {
    const {id} = req.params;
    try {
        const {rucclinica,nomclinica,dirclinica,telclinica,logoclinica} = req.body;
    const clinicas = await Clinica.findAll({
        attributes:['id','rucclinica','nomclinica','dirclinica','telclinica','logoclinica'],
        where:{
            id
        }
    });
    if(clinicas.length>0){
        clinicas.forEach(async clinica =>{
            await clinica.update({
                rucclinica,
                nomclinica,
                dirclinica,
                telclinica,
                logoclinica
            })
        });
        }
        res.json({
            message: "Clinicas updated succesfully",
            data: clinicas
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Eliminar por ID (DELETE)
export async function deleteClinica(req, res) {
    const {id} = req.params;
    try {
        const deleteRowCount = Clinica.destroy({
            where:{
                id
            }
        });
        res.json({
            message: "Clinica deleted succesfully",
            count: deleteRowCount,
            data:{}
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
