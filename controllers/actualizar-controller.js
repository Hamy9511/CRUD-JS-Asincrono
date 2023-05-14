import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));

    if(id == null){
        window.location.href = "/screens/error.html";
    }

const nombre = document.querySelector("[data-nombre]")
const email = document.querySelector("[data-email]")
const perfil = await clientServices.detalleCliente(id);
        nombre.value = perfil.nombre;
        email.value = perfil.email;
};

obtenerInformacion();

formulario.addEventListener("submit",async (evento) =>{
    evento.preventDefault() //evitar que el formulario trate de hacer la peticion y usamos js
    const url = new URL(window.location);
    const id = (url.searchParams.get("id"));

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    const actualizar = await clientServices.actualizarCliente(nombre,email,id);
        window.location.href = "/screens/edicion_concluida.html";
});