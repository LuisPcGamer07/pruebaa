const express = require("express");
const multer  = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de multer para procesar la subida de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta para subir archivos
app.post("/subir-archivo", upload.single("archivo"), function(req, res) {
    // Aquí puedes realizar operaciones adicionales con el archivo subido, como moverlo a otra ubicación, procesarlo, etc.
    console.log("Archivo subido:", req.file.originalname);
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
