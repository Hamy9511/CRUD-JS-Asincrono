//Abrir HTTP (metodo,url)
//CRUD - metodos HTTP
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE


//FETCH API
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

//SE ENCARGA DE HACER LA COMUNICACIO CO EL SERVIDOR Y RECIBIR LA RESPUESTA

export const clientServices = {
  listaClientes,
};





