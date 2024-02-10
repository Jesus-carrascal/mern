import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditRequest = () => {
  const { id } = useParams();

  const [nombre, setNombre] = useState("");
  const [curso, setCurso] = useState("");
  const [tipo, setTipo] = useState("");

  const navegar = useNavigate();

  useEffect(() => {
    axios.post("/api/solicitud/obtenerdatasolicitud/" + id).then((res) => {
      const dataSolicitud = res.data;
      setNombre(dataSolicitud.nombre);
      setCurso(dataSolicitud.curso);
      setTipo(dataSolicitud.tipo);
    });
  }, [id]);

  const editarSolicitud = () => {
    const actualizarSolicitud = {
      nombre: nombre,
      curso: curso,
      tipo: tipo,
    };

    axios
      .post("/api/solicitud/actualizarsolicitud/" + id, actualizarSolicitud)
      .then((res) => {
        console.log(res.data);
        Swal.fire("Solicitud editada correctamente");
        navegar("/");
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar solicitud</h2>
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

          <button onClick={editarSolicitud} className="btn-success">
            Editar solicitud
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRequest;
