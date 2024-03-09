import { useFormik } from "formik";
import InsertEditBox from "../../../components/InsertEditBox";
import ErrorField from "../../../components/ErrorField";
import { postPrivateData } from "../../../services/ApiService";
import APIROUTES from "../../../constants/APIRoutes";
import { useAuth } from "../../../providers/AuthProvider";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const AnoLetivoInsert = ({ isAddMode, anoLetivo }) => {
  const { getToken } = useAuth();

  async function postAnoLetivo(data) {
    try {
      const result = await postPrivateData(
        APIROUTES.ANO_LETIVO_INSERT,
        JSON.stringify(data),
        getToken()
      );
      if (result) {
        window.location.reload(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const validate = (values) => {
    const errors = {};
    if (!values.ano) {
      errors.ano = "Obrigatório";
    } else if (
      !/^(181[2-9]|18[2-9]\d|19\d\d|2\d{3}|30[0-3]\d|304[0-8])$/.test(
        values.ano
      )
    ) {
      errors.ano = "Valor inválido";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      ano: isAddMode ? "" : anoLetivo.anoLetivo,
      aberto: isAddMode ? "" : (anoLetivo.status == "Aberto" ? true : false),
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      if (isAddMode) {
        postAnoLetivo({ ano_letivo: values.ano, aberto: values.aberto });
      } else {
        console.log("Aberto?: " + values.aberto);
        postAnoLetivo({
          id: anoLetivo.id,
          ano_letivo: values.ano,
          aberto: values.aberto,
        });
      }
    },
  });

  return (
    <InsertEditBox isAddMode={isAddMode} title={"Ano Letivo"}>
      <Box>
        <TextField
          id="ano"
          type="text"
          label="Ano Letivo"
          size="small"
          value={formik.values.ano}
          onChange={formik.handleChange}
        />
        {formik.errors.ano ? (
          <ErrorField>{formik.errors.ano}</ErrorField>
        ) : null}
      </Box>
      <Box>
        <label>Aberto?</label>
        <Checkbox
          id="aberto"
          label="Aberto?"
          value={formik.values.aberto}
          onChange={formik.handleChange}
          checked={formik.values.aberto}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          id="btnEnviarAnoLetivo"
          onClick={formik.submitForm}
        >
          Enviar
        </Button>
      </Box>
    </InsertEditBox>
  );
};

export default AnoLetivoInsert;
