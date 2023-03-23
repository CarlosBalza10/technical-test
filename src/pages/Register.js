import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilListNumbered } from "@coreui/icons";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const resultado = parseInt(valor1) + parseInt(valor2);

    navigate(`/result/${resultado}`);
  };
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Sum Form</h1>
                  <p className="text-medium-emphasis">
                    Por favor, ingrese los valores
                  </p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilListNumbered} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Ingrese el primer valor"
                      autoComplete="none"
                      type="number"
                      required
                      onChange={(event) => setValor1(event.target.value)}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilListNumbered} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Ingrese el segundo valor"
                      autoComplete="none"
                      type="number"
                      required
                      onChange={(event) => setValor2(event.target.value)}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton
                      color="success"
                      style={{ color: "white" }}
                      type="submit"
                    >
                      Calcular
                    </CButton>
                  </div>
                  <div className="d-grid mt-2">
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
                </CForm>
                <p className="text-center mt-4">
                  2023 &#169; Developed by Carlos Balza for{" "}
                  <a
                    style={{ textDecoration: "none" }}
                    href="http://meicocienporsiempre.com/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    Meico S.A
                  </a>
                </p>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
