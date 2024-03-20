import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

// This class returns a generic table, acording to a list of headers
// The data must have its attributes keys described in tablekeys
// Nested attributes can be used, it makes a recursive call, having
// them separated by a dot (".")
const TableList = ({ tableHead, tableKeys, data, edit }) => {
  const handleEditButton = (id) => {
    edit(id);
  };

  const extractValue = (keyArray, object, initIndex) => {
    const index = initIndex ? initIndex : 0;
    if (!keyArray[index + 1]) {
      return object[keyArray[index]];
    } else {
      const nextObject = object[keyArray[index]];
      if (nextObject) {
        return extractValue(keyArray, nextObject, index + 1);
      } else {
        return undefined;
      }
    }
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
              {tableKeys.map((tk, indextc) => {
                return (
                  <TableCell key={"cell" + indextc} align="center">
                    {extractValue(tk.split("."), e)}
                  </TableCell>
                );
              })}

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
