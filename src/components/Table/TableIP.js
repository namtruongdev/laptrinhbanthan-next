import React from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

const rows = [
  { ip: "139.255.108.114", port: 8080 },
  { ip: "139.255.73.130", port: 3128 },
  { ip: "202.152.63.98", port: 80 },
  { ip: "202.137.25.8", port: 8080 },
  { ip: "139.255.58.202", port: 8080 },
  { ip: "36.67.231.3", port: 8080 },
  { ip: "171.102.244.138", port: 3128 },
  { ip: "180.254.186.144", port: 80 },
  { ip: "202.154.27.184", port: 8080 },
  { ip: "150.107.143.233", port: 9797 },
]
export const TableIP = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Bảng Proxy IP miễn phí">
        <TableHead>
          <TableRow>
            <TableCell>Proxy IP miễn phí</TableCell>
            <TableCell align="right">Cổng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.ip}>
              <TableCell component="th" scope="row">
                {row.ip}
              </TableCell>
              <TableCell align="right">{row.port}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
