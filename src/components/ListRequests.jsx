import { useEffect, useState } from "react";
import Request from "./Request";
import axios from "axios";

const ListRequests = () => {
  const [dataSolicitudes, setDataSolicitudes] = useState([]);

  useEffect(() => {
    axios
      .get("api/solicitud/obtenersolicitudes")
      .then((res) => {
        console.log(res);
        setDataSolicitudes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const listaSolicitudes = dataSolicitudes.map((solicitud) => {
    return (
      <div>
        <Request solicitud={solicitud} />
      </div>
    );
  });

  return (
    <div>
      <h2> Lista de solicitudes </h2>
      {listaSolicitudes}
    </div>
  );
};

export default ListRequests;
