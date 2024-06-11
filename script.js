document.addEventListener("DOMContentLoaded", function() {
    const subirArchivoBtn = document.getElementById("subirArchivoBtn");
    const archivoInput = document.getElementById("archivoInput");

    subirArchivoBtn.addEventListener("click", function() {
        const archivo = archivoInput.files[0];
        if (archivo) {
            subirArchivo(archivo);
        } else {
            console.log("Por favor selecciona un archivo.");
        }
    });

    function subirArchivo(archivo) {
        const formData = new FormData();
        formData.append("archivo", archivo);

        fetch("/subir-archivo", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log("Archivo subido correctamente.");
            } else {
                console.error("Error al subir el archivo.");
            }
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
        });
    }
});
