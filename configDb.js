

const mongoose = require("mongoose");


const conexionDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://projectsjre:admin@cluster0.4qgpnke.mongodb.net/foro');
        console.log('Conexión a BBDD')
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    conexionDb
}
