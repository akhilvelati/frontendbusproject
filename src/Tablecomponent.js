import React from "react";
import { Table } from "reactstrap";

const DestinationList = ({ tableData }) => {
  console.log(tableData);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>id</th>
          <th>routeNo</th>
          <th>starting_point</th>
          <th>destination_point</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((a, i) => (
          <tr>
            <th scope="row">{i + 1}</th>

            <td>{a.routeNo}</td>
            <td>{a.starting_point}</td>
            <td>{a.destination_point}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default DestinationList;
