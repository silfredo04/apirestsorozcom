import  express  from "express";
import RutasEmpleados from "./routes/employees.Routes.js";
import RutaIndex from "./routes/index.Routes.js";

// Mensaje de bienvenida

console.log("API arrancada!!");


// Crear servidor node
const app = express();
/* let puerto = 3000 */

// Convertir los datos que lleguen en cada peticion datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api",RutasEmpleados);
app.use("/api",RutaIndex);

app.use((req,res,next) =>{
    res.status(404).json({
        status:"Error",
        message:"Esta ruta no existe"
    })
})

export default app;