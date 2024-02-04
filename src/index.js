import {PUERTO} from './config.js'
import app from "./app.js";



// Poner el servidor a escuchar peticiones http
app.listen(PUERTO,()=>{
    console.log("Server ejecutado en el puerto "+PUERTO)
});
