import {pool} from '../db.js'


export const ping = async (req, res) =>{
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    return res.status(200).json({
        status: "success",
        message: "ping....",
        result:result[0]
    }); 
}