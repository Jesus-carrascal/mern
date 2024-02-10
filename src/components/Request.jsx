import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Request = ({ solicitud }) => {
  const navegar = useNavigate();

  const borrarSolicitud = (id) => {
    axios
      .delete("/api/solicitud/borrarsolicitud/" + id)
      .then((res) => {
        console.log(res.data);
        navegar(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
          <ul className="list-group">
            <li className="list-group-item">{solicitud.nombre}</li>
            <li className="list-group-item">{solicitud.curso}</li>
            <li className="list-group-item">{solicitud.tipo}</li>
          </ul>

          <Link to={`/editarsolicitud/${solicitud._id}`}>
            <li className="btn btn-success">Editar</li>
          </Link>
          <span style={{ margin: "0 10px" }}></span>
          <button
            className="btn btn-danger"
            onClick={(e) => {
              borrarSolicitud(solicitud._id);
            }}
          >
            Borrar
          </button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
};

export default Request;
