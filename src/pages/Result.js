import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import { useNavigate, useParams } from "react-router-dom";

const Result = () => {
  let { result } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1>El resultado de la operación es: {result}</h1>
                <div className="d-grid">
                  <CButton
                    color="secondary"
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

export default Result;
