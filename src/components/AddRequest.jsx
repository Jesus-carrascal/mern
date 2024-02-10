import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddRequest = () => {
  const [nombre, setNombre] = useState("");
  const [curso, setCurso] = useState("");
  const [tipo, setTipo] = useState("");

  const navegar = useNavigate();

  const agregarSolicitud = () => {
    let solicitud = {
      nombre: nombre,
      curso: curso,
      tipo: tipo,
    };
    //console.log(solicitud);

    axios
      .post("/api/solicitud/agregarsolicitud", solicitud)
      .then((res) => {
        Swal.fire("Solicitud creada correctamente");
        navegar("/");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Crear una nueva solicitud</h2>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="curso" className="form-label">
              Curso
            </label>
            <input
              type="text"
              className="form-control"
              value={curso}
              onChange={(e) => {
                setCurso(e.target.value);
              }}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="tipo" className="form-label">
              Tipo de solicitud
            </label>
            <input
              type="text"
              className="form-control"
              value={tipo}
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            ></input>
          </div>

          <button onClick={agregarSolicitud} className="btn-success">
            Agregar solicitud
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRequest;
