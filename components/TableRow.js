const TableRow = (rowTitle, value, key = null) =>
  value ? (
    <tr key={key}>
      <td>{rowTitle}</td>
      <td>{value}</td>
    </tr>
  ) : null;

export default TableRow;
