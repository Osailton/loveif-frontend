import { Box, Container, Typography } from "@mui/material";

export default function AnoLetivo() {
  console.log("Ano Letivo!");
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
      </Box>
    </Container>
  );
}
