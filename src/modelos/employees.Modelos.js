import {pool} from '../db.js'



export const obtenerEmpleadosModel = async () =>{
    try{
        const [empleados] = await pool.query('SELECT * FROM employee WHERE estado = 1');
        return empleados;
    }catch(error){
        return error;
    }
}


export const obtenerUnEmpleadoModel = async (id) =>{
    try{
        const [empleado] = await pool.query('SELECT * FROM employee WHERE estado = 1 and id = ?',[id]);
        return empleado;
    }catch(error){
        return error;
    }
}


export const crearEmpleadosModel = async (name,salary) =>{
    try{
        const [respuesta] = await pool.query("INSERT INTO employee (name,salary) VALUES (?, ?)",[name,salary]);
        return respuesta;
    }catch(error){
        return error;
    }
}

export const existeEmpleado = async (idParams) =>{
    try{
        const [existe] = await pool.query("SELECT * FROM employee WHERE id = ? and estado = 1",[idParams])
        return existe;
    }catch(error){
        return error;
    }
}

export const actualizarEmpleado = async (name,salary,idParams) =>{
    try{
        const respuesta = await pool.query("UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ? and estado = 1",[name,salary,idParams])
        return respuesta;
    }catch(error){
        return error;
    }
}

export const eliminarEmpleadosModel = async (estado,idParams) => {
    try{
        const [actualizado] = await pool.query("UPDATE employee SET estado = ? WHERE id = ? and estado = 1",[estado,idParams]);
        return actualizado;
    }catch(error){
        return error;
    }
}