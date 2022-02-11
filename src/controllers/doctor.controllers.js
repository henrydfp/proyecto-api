import Doctor from '../models/Doctor';

//insertar (POST)
export async function createDoctor(req, res) {
   const {nomdoctor,apelldoctor,dnidoctor,teldoctor,emaildoctor,dirdoctor,espdoctor,clinicaid} = req.body;
   try {
    let newDoctor = await Doctor.create({
        nomdoctor,
        apelldoctor,
        dnidoctor,
        teldoctor,
        emaildoctor,
        dirdoctor,
        espdoctor,
        clinicaid
    },{
        fields:['nomdoctor','apelldoctor','dnidoctor','teldoctor','emaildoctor','dirdoctor','espdoctor','clinicaid']
    });
    if(newDoctor){
        const doctor = await Doctor.findOne({
            include:["clinica"],
            where:{
                id:newDoctor.id
            }
        });
        res.json({
         message: "Doctor creado correctamente",
         data:doctor
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
export async function getDoctors(req, res) {
    try {
        const doctors = await Doctor.findAll({
            include:["clinica"]
        });
        res.json({
            message: "Doctor obtenido correctamente",
        data:doctors
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Seleccionar un doctor por id (GET)
export async function getOneDoctor(req, res) {
    const {id} = req.params;
    try {
        const doctor = await Doctor.findOne({
            where:{
                id
            },
            include:["clinica"]
        });
        res.json({
            message: "Doctor obtenido correctamente",
            data: doctor
        });
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Actualizar (PUT)
export async function updateDoctor(req, res) {
    const {id} = req.params;
    try {
        const {nomdoctor,apelldoctor,dnidoctor,teldoctor,emaildoctor,dirdoctor,espdoctor,clinicaid} = req.body;
    const doctors = await Doctor.findAll({
        attributes:['id','nomdoctor','apelldoctor','dnidoctor','teldoctor','emaildoctor','dirdoctor','espdoctor','clinicaid'],
        where:{
            id
        }
    });
    if(doctors.length>0){
        doctors.forEach(async doctor =>{
            await doctor.update({
                nomdoctor,
                apelldoctor,
                dnidoctor,
                teldoctor,
                emaildoctor,
                dirdoctor,
                espdoctor,
                clinicaid
            })
        });
       
        }
        res.json({
            message: "Doctores actualizadas exitosamente",
            data: doctors
        });    
    } catch (error) {
        res.json({
            message: "Un error a ocurrido",
            error
        });
    }
}
//Eliminar por ID (DELETE)
export async function deleteDoctor(req, res) {
    const {id} = req.params;
    try {
        const deleteRowCount = Doctor.destroy({
            where:{
                id
            }
        });
        res.json({
            message: "Doctor eliminada exitosamente",
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
