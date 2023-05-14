//Abrir HTTP (metodo,url)
//CRUD - metodos HTTP
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE


//FETCH API
const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

//SE ENCARGA DE HACER LA COMUNICACIO CO EL SERVIDOR Y RECIBIR LA RESPUESTA
const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()}),
  });
};

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "DELETE",
  });
};

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};
export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
};





