import { Field, useFormik } from "formik";
import InsertEditBox from "../../../components/InsertEditBox";
import ErrorField from "../../../components/ErrorField";
import {
  postPrivateData,
  fetchPrivateData,
} from "../../../services/ApiService";
import APIROUTES from "../../../constants/APIRoutes";
import { useAuth } from "../../../providers/AuthProvider";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const TurmaInsert = ({ isAddMode, turma }) => {
  const { getToken } = useAuth();

  const [listAnos, setListAnos] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await fetchPrivateData(
        APIROUTES.ANO_LETIVO_LIST,
        getToken()
      );
      const lista = result.map((e) => {
        return {
          ...e,
          edit: true,
        };
      });
      setListAnos(lista);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function postTurma(data) {
    try {
      const result = await postPrivateData(
        APIROUTES.TURMA_INSERT,
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

    if (!values.nome) {
      errors.nome = "Obrigatório";
    }

    if (!values.descricao) {
      errors.descricao = "Obrigatório";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      anoLetivoId: isAddMode ? "" : turma.anoLetivo.id,
      nome: isAddMode ? "" : turma.nome,
      descricao: isAddMode ? "" : turma.descricao,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      if (isAddMode) {
        postTurma({
          ano_letivo_id: values.anoLetivoId,
          nome: values.nome,
          descricao: values.descricao,
        });
      } else {
        postTurma({
          id: turma.id,
          ano_letivo_id: values.anoLetivoId,
          nome: values.nome,
          descricao: values.descricao,
        });
      }
    },
  });

  return (
    <InsertEditBox isAddMode={isAddMode} title={"Turma"}>
      <Box sx={{ mb: 2 }}>
        <label>Ano Letivo</label>
        <Select
          sx={{ minWidth: 100, ml: 2 }}
          labelId="Ano Letivo"
          id="anoLetivoId"
          name="anoLetivoId"
          value={formik.values.anoLetivoId}
          onChange={formik.handleChange}
          size="small"
        >
          {listAnos &&
            listAnos.map((e) => {
              return (
                <MenuItem key={"menuAno" + e.id} value={e.id}>
                  {e.anoLetivo}
                </MenuItem>
              );
            })}
        </Select>
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          id="nome"
          type="text"
          label="Nome da Turma"
          size="small"
          value={formik.values.nome}
          onChange={formik.handleChange}
        />
        {formik.errors.nome ? (
          <ErrorField>{formik.errors.nome}</ErrorField>
        ) : null}
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          id="descricao"
          type="text"
          label="Descrição"
          size="small"
          value={formik.values.descricao}
          onChange={formik.handleChange}
        />
        {formik.errors.descricao ? (
          <ErrorField>{formik.errors.descricao}</ErrorField>
        ) : null}
      </Box>
      <Box sx={{ mb: 2 }}>
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

export default TurmaInsert;
