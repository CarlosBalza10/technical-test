import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import usuarios from "../data/Users.json";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(usuarios);

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10} lg={8} xl={8}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1>Listado de Usuarios</h1>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Edad</th>
                      <th>Teléfono</th>
                      <th>Tipo Teléfono</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{user.Nombre}</td>
                        <td>{user.Edad} años</td>
                        <td>{user.Telefono}</td>
                        <td>{user.TipoTelefono}</td>
                        <td>{user.Email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-grid p-3">
                  <CButton
                    color="primary"
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Regresar
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Form;
