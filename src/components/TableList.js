import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const TableList = ({ tableHead, tableKeys, data, edit }) => {
  const handleEditButton = (id) => {
    edit(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHead.map((e, index) => (
              <TableCell align="center" key={"cellh" + index}>
                {e}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e, indextr) => (
            <TableRow key={"row" + indextr}>
              {Object.entries(e).map(([k, v]) =>
                tableKeys.map(
                  (tk, indextc) =>
                    k === tk && (
                      <TableCell key={"cell" + indextc} align="center">
                        {v}
                      </TableCell>
                    )
                )
              )}

              {e.edit && (
                <TableCell key={"cellEdit"} align="center">
                  <Button size="small" onClick={() => handleEditButton(e.id)}>
                    Editar
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
