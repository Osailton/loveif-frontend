import { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import TableList from "../../../components/TableList";
import { fetchPrivateData } from "../../../services/ApiService";
import { useAuth } from "../../../providers/AuthProvider";
import APIROUTES from "../../../constants/APIRoutes";

import AnoLetivoInsert from "./AnoLetivoInsert";

const tableHead = ["ID", "Ano Letivo", "Status", ""];
const tableKeys = ["id", "anoLetivo", "status"];

const AnoLetivo = () => {
  const { getToken } = useAuth();
  const [data, setData] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [showData, setShowData] = useState(false);
  const [anoLetivo, setAnoLetivo] = useState(null);

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
    const anoLetivo = data.filter((e) => e.id == id)[0];
    setAnoLetivo(anoLetivo);
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
            Ano Letivo
          </Typography>
          {!showData && (
            <Button
              variant="contained"
              id="btnAddAnoLetivo"
              onClick={handleAddRegistro}
            >
              Adicionar Novo
            </Button>
          )}
        </Box>

        {showData &&
          (isAddMode ? (
            <AnoLetivoInsert isAddMode={true} />
          ) : (
            <AnoLetivoInsert isAddMode={false} anoLetivo={anoLetivo} />
          ))}

        <TableList tableHead={tableHead} data={data} tableKeys={tableKeys} edit={handleEditRegistro} />
      </Box>
    </Container>
  );
};

export default AnoLetivo;
