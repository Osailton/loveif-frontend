import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import API_ROUTES from "../../../constants/APIRoutes";
import { useAuth } from "../../../providers/AuthProvider";
import {
  fetchPrivateData,
  postPrivateData,
} from "../../../services/ApiService";
import TableList from "../../../components/TableList";
import { useFormik } from "formik";
import ErrorField from "../../../components/ErrorField";

const tableHead = ["+-", "Turma", "Pontuacao", "Observação", "Situação"];
const tableKeys = [
  "operacao",
  "turma.nome",
  "resultado",
  "descricao",
  "aplicado",
];

const Pontuacao = () => {
  const { getToken } = useAuth();
  const [listAnos, setListAnos] = useState([]);
  const [listTurmas, setListTurmas] = useState([]);
  const [anoLetivoSelected, setAnoLetivoSelected] = useState(0);
  const [turmaSelected, setTurmaSelected] = useState(0);
  const [data, setData] = useState([]);

  async function fetchDataPontuacao() {
    try {
      const result = await fetchPrivateData(
        API_ROUTES.PONTUACAO_LIST,
        getToken(),
        "?ano=" + anoLetivoSelected
      );

      const lista = result.map((e) => {
        return {
          ...e,
          operacao: e.operacao == "SUM" ? "BÔNUS" : "DESCONTO",
          aplicado: e.anulado
            ? "ANULADO"
            : e.aplicado
            ? "APLICADO"
            : "PENDENTE",
          resultado: (e.operacao == "SUM" ? "+ " : "- ") + e.pontos,
        };
      });
      setData(lista);

      let turmas = [];
      lista.map((e) => {
        if (!turmas.some((i) => i.id == e.turma.id && i.nome == e.turma.nome)) {
          turmas.push({ id: e.turma.id, nome: e.turma.nome });
        }
      });
      setListTurmas(turmas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function fetchDataAnoLetivo() {
    try {
      const result = await fetchPrivateData(
        API_ROUTES.ANO_LETIVO_LIST,
        getToken()
      );
      setListAnos(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function postPontos(data) {
    try {
      const result = await postPrivateData(
        API_ROUTES.PONTUACAO_LANCAMENTO,
        JSON.stringify(data),
        getToken()
      );
      if (result) {
        formik.values.pontos = 0;
        formik.values.descricao = "";
        formik.values.operacao = 1;
        fetchDataPontuacao();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchDataAnoLetivo();
  }, []);

  const handleChangeAnoLetivoSelected = (e) => {
    setAnoLetivoSelected(e.target.value);
  };

  const handleChangeTurmaSelected = (e) => {
    setTurmaSelected(e.target.value);
  };

  const handleClickBuscar = () => {
    setTurmaSelected(0);
    anoLetivoSelected != undefined && fetchDataPontuacao();
  };

  const validate = (values) => {
    const errors = {};

    if (!values.pontos) {
      errors.pontos = "Obrigatório";
    }

    if (values.pontos < 1) {
      errors.pontos = "Pontuação não pode ser 0";
    }

    if (!values.descricao) {
      errors.descricao = "Obrigatório";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      pontos: 0,
      descricao: "",
      operacao: 1,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values) => {
      debugger;
      postPontos({
        pontos: values.pontos,
        descricao: values.descricao,
        operacao: values.operacao == 1 ? "SUM" : values.operacao == 2 && "SUB",
        id_turma: turmaSelected,
      });
    },
  });

  return (
    <Container align="center">
      <Box
        sx={{
          mt: 6,
        }}
      >
        <Typography
          variant="h2"
          align="center"
          color="primary.dark"
          sx={{ mb: 4 }}
        >
          Pontuação
        </Typography>

        <Select
          sx={{ minWidth: 100, m: 2 }}
          labelId="Ano Letivo"
          id="anoLetivoId"
          name="anoLetivoId"
          value={anoLetivoSelected}
          onChange={(e) => handleChangeAnoLetivoSelected(e)}
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

        <Select
          sx={{ minWidth: 100, m: 2 }}
          labelId="Turmas"
          id="turmaId"
          name="turmaId"
          value={turmaSelected}
          onChange={(e) => handleChangeTurmaSelected(e)}
          size="small"
        >
          <MenuItem key={"menuTurma0"} value={0}>
            Todas as turmas
          </MenuItem>
          {listTurmas &&
            listTurmas.map((e) => {
              return (
                <MenuItem key={"menuTurma" + e.id} value={e.id}>
                  {e.nome}
                </MenuItem>
              );
            })}
        </Select>

        <Button
          variant="contained"
          id="btnBuscarPontuacao"
          onClick={handleClickBuscar}
        >
          Buscar
        </Button>

        {turmaSelected != 0 && (
          <Box border={1} sx={{ p: 2, borderRadius: 4 }}>
            <Box sx={{ mb: 2 }}>
              <TextField
                id="pontos"
                type="text"
                label="Pontos"
                size="small"
                value={formik.values.pontos}
                onChange={formik.handleChange}
              />
              {formik.errors.pontos ? (
                <ErrorField>{formik.errors.pontos}</ErrorField>
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
              <label>Operação</label>
              <Select
                sx={{ minWidth: 100, ml: 2 }}
                labelId="Operação"
                id="operacao"
                name="operacao"
                value={formik.values.operacao}
                onChange={formik.handleChange}
                size="small"
              >
                <MenuItem value={1}>BÔNUS</MenuItem>
                <MenuItem value={2}>DESCONTO</MenuItem>
              </Select>
            </Box>

            <Button
              sx={{ minWidth: 100, m: 2 }}
              variant="contained"
              id="btnBuscarPontuacao"
              onClick={formik.submitForm}
            >
              Lançar Pontuação
            </Button>
          </Box>
        )}

        <TableList
          tableHead={tableHead}
          data={
            turmaSelected != 0
              ? data.filter((e) => e.turma.id == turmaSelected)
              : data
          }
          tableKeys={tableKeys}
        />
      </Box>
    </Container>
  );
};

export default Pontuacao;
