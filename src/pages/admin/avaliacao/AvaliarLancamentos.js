import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchPrivateData, postPrivateData } from "../../../services/ApiService";
import { useAuth } from "../../../providers/AuthProvider";
import API_ROUTES from "../../../constants/APIRoutes";
import TableList from "../../../components/TableList";

const tableHead = ["+-", "Turma", "Pontuacao", "Observação", "Situação", ""];
const tableKeys = [
  "operacao",
  "turma.nome",
  "resultado",
  "descricao",
  "aplicado",
];

const AvaliarLancamentos = () => {
  const { getToken } = useAuth();
  const [listAnos, setListAnos] = useState([]);
  const [anoLetivoSelected, setAnoLetivoSelected] = useState(0);
  const [data, setData] = useState([]);
  const [statusSelected, setStatusSelected] = useState(0);

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
          genericButton: !e.aplicado ? (
            <Button
              variant="contained"
              id={"btnAprovarLancamento" + e.id}
              key={"btnAprovar" + e.id}
              onClick={() => handleClickAprovar(e.contador, e.turma.id)}
            >
              Aprovar
            </Button>
          ) : (
            !e.anulado && (
              <Button
                variant="contained"
                id={"btnCancelarLancamento" + e.id}
                key={"btnAprovar" + e.id}
                onClick={() => handleClickCancelar(e.contador, e.turma.id)}
              >
                Cancelar
              </Button>
            )
          ),
        };
      });
      setData(lista);
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

  async function approve(data) {
    try {
      const result = await postPrivateData(
        API_ROUTES.PONTUACAO_APROVAR,
        JSON.stringify(data),
        getToken()
      );
      if (result) {
        fetchDataPontuacao();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function cancel(data) {
    try {
      const result = await postPrivateData(
        API_ROUTES.PONTUACAO_CANCELAR,
        JSON.stringify(data),
        getToken()
      );
      if (result) {
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

  const handleChangeStatusSelected = (e) => {
    debugger;
    setStatusSelected(e.target.value);
  };

  const handleClickBuscar = () => {
    anoLetivoSelected != undefined && fetchDataPontuacao();
  };

  const handleClickAprovar = (contador, idTurma) => {
    approve({contador: contador, id_turma: idTurma});
  }

  const handleClickCancelar = (contador, idTurma) => {
    cancel({contador: contador, id_turma: idTurma});
  }

  const getAplicado = () => {
    debugger;
    if (statusSelected == 1) {
      return "PENDENTE";
    } else if (statusSelected == 2) {
      return "APLICADO";
    } else if (statusSelected == 3) {
      return "ANULADO";
    }
  };

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
          Avaliação de Lançamentos
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
          labelId="Status"
          id="statusId"
          name="statusId"
          value={statusSelected}
          onChange={(e) => handleChangeStatusSelected(e)}
          size="small"
        >
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={1}>PENDENTE</MenuItem>
          <MenuItem value={2}>APLICADO</MenuItem>
          <MenuItem value={3}>ANULADO</MenuItem>
        </Select>

        <Button
          variant="contained"
          id="btnBuscarLancamentos"
          onClick={handleClickBuscar}
        >
          Buscar
        </Button>

        <TableList
          tableHead={tableHead}
          data={
            statusSelected != 0
              ? data.filter((e) => e.aplicado === getAplicado())
              : data
          }
          tableKeys={tableKeys}
        />
      </Box>
    </Container>
  );
};

export default AvaliarLancamentos;
