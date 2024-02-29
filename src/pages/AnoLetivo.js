import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import TableList from "../components/TableList";
import { fetchPrivateData } from "../services/ApiService";
import { useAuth } from "../providers/AuthProvider";
import APIROUTES from "../constants/APIRoutes";

const tableHead = ["ID", "Ano Letivo", "Status"];
const tableKeys = ["id", "anoLetivo", "status"];
const show = "anoLetivo";

export default function AnoLetivo() {
  const { getToken } = useAuth();
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const result = await fetchPrivateData(
        APIROUTES.LIST_ANO_LETIVO,
        getToken()
      );
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          Ano Letivo
        </Typography>
        <TableList tableHead={tableHead} data={data} tableKeys={tableKeys} />
      </Box>
    </Container>
  );
}
