import {pool} from '../db.js'
import {obtenerEmpleadosModel,obtenerUnEmpleadoModel,crearEmpleadosModel,existeEmpleado,actualizarEmpleado,eliminarEmpleadosModel} from "../modelos/employees.Modelos.js";


export const obtenerEmpleados = async (req,res) =>{
    try{
        let empleados = await obtenerEmpleadosModel()
        if(empleados.length != 0){
            // devolver respuesta
            return res.status(200).json({
                status: "success",
                message: "empleados....",
                empleados:empleados
            }); 
        }else{
            // devolver respuesta
            return res.status(400).json({
                status: "Error",
                message: "No hay empleados....",
            }); 
        }
    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }
}

export const obtenerUnEmpleado = async (req,res) =>{

    try{
        let id = req.params.id

        let empleado = await obtenerUnEmpleadoModel(id)

        if(empleado.length != 0){
            // devolver respuesta
            return res.status(200).json({
                status: "success",
                message: "Empleado",
                empleados:empleado
            }); 
        }else{
            // devolver respuesta
            return res.status(400).json({
                status: "Error",
                message: "No se encontro empleado",
            }); 
        }

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

}



export const crearEmpleados = async (req,res) =>{
    try{
        let persona = req.body;
        if(!persona || !persona.name || !persona.salary){
            return res.status(400).json({
                status: "error",
                message: "Faltan datos por enviar"
            });
        }
        try{
            
            let respuesta = await crearEmpleadosModel(persona.name,persona.salary);
            
            persona.id = respuesta.insertId;
            if(respuesta){
                // devolver respuesta
                return res.status(200).json({
                    status: "success",
                    message: "empleados creado con exito....",
                    persona
                }); 
            }else{
                // devolver respuesta
                return res.status(400).json({
                    status: "error",
                    message: "No se a podido regitrar el empleado...",
                });
            }
        }catch(error){
            return res.status(500).json({
                status: "error",
                message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
            });
    }

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }
    
    
}



export const actualizarEmpleados = async (req,res) =>{

    try{
        // recoger el id para hacer la consulta y validar si existe
         let idParams = req.params.id
        // recoger los datos del body
        let persona = req.body;
        // devolver respuesta

        // validar si existe 

        let existe = await existeEmpleado(idParams)
    
        if(existe.length == 0){
            return res.status(400).json({
                status:"error",
                message:"Empleado no encontrado"
            })
        }else{
            let respuesta = await actualizarEmpleado(persona.name,persona.salary,idParams)
            let empleadoAct = await existeEmpleado(idParams)
            if(respuesta[0].affectedRows == 1){
                return res.status(200).json({
                    status: "success",
                    message: "Empleado actualizado",
                    empleadoAct
                }); 
            }
        }

    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }
}



export const eliminarEmpleados = async (req,res) =>{

    try{
        let idParams = req.params.id;
        let estado = 0
        let existe = await existeEmpleado(idParams)
        if(existe.length == 0){
            return res.status(400).json({
                status:"error",
                message:"Empleado no encontrado"
            })
        }else{
            let actualizado = await eliminarEmpleadosModel(estado,idParams)
            // devolver respuesta
            if(actualizado){
                return res.status(200).json({
                    status: "success",
                    message: "Empleado eliminado",
                }); 
            }
        }
        
    }catch(error){
        return res.status(500).json({
            status: "error",
            message: 'Ocurrió un error, contacte al administrador de sistemas.' + error
        });
    }

}

