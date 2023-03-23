import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4 text-center">
                <h1>Prueba Técnica</h1>
                <p className="text-medium-emphasis">
                  Por favor, seleccione una opción
                </p>

                <div className="d-grid p-3">
                  <CButton
                    color="success"
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    CASO #4
                  </CButton>
                </div>
                <div className="d-grid p-3">
                  <CButton
                    color="info"
                    style={{ color: "white" }}
                    onClick={() => {
                      navigate("/list");
                    }}
                  >
                    CASO #7-8
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
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
        </CRow>
      </CContainer>
    </div>
  );
};

export default Home;
