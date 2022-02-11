import Sucursal from '../models/Sucursal';
//insertar (POST)
export async function createSucursal(req, res) {
    const {nomsucursal,dirsucursal,telsucursal,nrosillas,clinicaid} = req.body;
    try {
     let newSucursal = await Sucursal.create({
         nomsucursal,
         dirsucursal,
         telsucursal,
         nrosillas,
         clinicaid
     },{
         fields:['nomsucursal','dirsucursal','telsucursal','nrosillas','clinicaid']
     });
     if(newSucursal){
         const sucursal = await Sucursal.findOne({
             include:["clinica"],
             where:{
                 id:newSucursal.id
             }
         });
         res.json({
          message: "Sucursal creado correctamente",
          data:sucursal
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
 export async function getSucursals(req, res) {
     try {
         const sucursals = await Sucursal.findAll({
             include:["clinica"]
         });
         res.json({
             message: "Sucursal obtenido correctamente",
         data:sucursals
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Seleccionar una sucursal por id (GET)
export async function getOneSucursal(req, res) {
    const {id} = req.params;
    try {
        const sucursal = await Sucursal.findOne({
            where:{
                id
            },
            include:["clinica"]
        });
        res.json({
            message: "Sucursal obtenido correctamente",
            data: sucursal
        });
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Actualizar (PUT)
export async function updateSucursal(req, res) {
    const {id} = req.params;
    try {
        const {nomsucursal,dirsucursal,telsucursal,nrosillas,clinicaid} = req.body;
    const sucursals = await Sucursal.findAll({
        attributes:['id','nomsucursal','dirsucursal','telsucursal','nrosillas','clinicaid'],
        where:{
            id
        }
    });
    if(sucursals.length>0){
        sucursals.forEach(async sucursal =>{
            await sucursal.update({
                nomsucursal,
                dirsucursal,
                telsucursal,
                nrosillas,
                clinicaid
            })
        });
       
        }
        res.json({
            message: "Sucursales actualizadas exitosamente",
            data: sucursals
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Eliminar por ID (DELETE)
export async function deleteSucursal(req, res) {
    const {id} = req.params;
    try {
        const deleteRowCount = Sucursal.destroy({
            where:{
                id
            }
        });
        res.json({
            message: "Sucursal eliminada exitosamente",
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
 