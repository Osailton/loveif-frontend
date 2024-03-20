import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../providers/AuthProvider";
import { fetchPrivateData } from "../../../services/ApiService";
import TableList from "../../../components/TableList";
import APIROUTES from "../../../constants/APIRoutes";
import TurmaInsert from "./TurmaInsert";

const tableHead = ["ID", "Nome", "Ano Letivo", ""];
const tableKeys = ["id", "nome", "anoLetivo.anoLetivo"];

const Turma = () => {
  const { getToken } = useAuth();
  const [data, setData] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [showData, setShowData] = useState(false);
  const [turma, setTurma] = useState(null);

  async function fetchData() {
    try {
      const result = await fetchPrivateData(APIROUTES.TURMA_LIST, getToken());
      const lista = result.map((e) => {
        return {
          ...e,
          edit: true,
        };
      });
      setData(lista);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddRegistro = () => {
    setShowData(true);
    setIsAddMode(true);
  };

  const handleEditRegistro = (id) => {
    const turma = data.filter((e) => e.id == id)[0];
    setTurma(turma);
    setShowData(true);
    setIsAddMode(false);
  };

  return (
    <Container align="center">
      <Box
        sx={{
          mt: 6,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h2"
            align="center"
            color="primary.dark"
            sx={{ mb: 4 }}
          >
            Turmas
          </Typography>
          {!showData && (
            <Button
              variant="contained"
              id="btnAddTurma"
              onClick={handleAddRegistro}
            >
              Adicionar Novo
            </Button>
          )}
        </Box>

        {showData &&
          (isAddMode ? (
            <TurmaInsert isAddMode={true} />
          ) : (
            <TurmaInsert isAddMode={false} turma={turma} />
          ))}

        <TableList
          tableHead={tableHead}
          data={data}
          tableKeys={tableKeys}
          edit={handleEditRegistro}
        />
      </Box>
    </Container>
  );
};

export default Turma;
