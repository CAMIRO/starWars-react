import React from "react";
import styled from "styled-components";

export const TableComponent = ({
  ObjectBundle,
  id,
  tableHeaders,
  tableData,
}) => {
  if (ObjectBundle.length < 1) {
    return (
      <TableContainer>
        <p>{`No ${id} to show`}</p>
      </TableContainer>
    );
  }
  return (
    <TableContainer>
      <table>
        <caption>{id}</caption>
        <thead>
          <tr>
            <th />
            {tableHeaders.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ObjectBundle.map((object, i) => {
            return (
              <tr key={object.url}>
                <td>{i + 1}</td>
                {tableData.map((data) => (
                  <td key={data}>{object[data]}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  background: #fff;
  width: 100%;
  table {
    background: #fff;
    text-align: center;
    width: 100%;
  }
  th,
  tr,
  tbody {
    margin-bottom: 1rem;
    background: none;
  }
  td {
    background: none;
    color: #141414;
  }
  p,
  caption {
    background: none;
    color: #1e3445;
    font-weight: bold;
    font-size: x-large;
  }
`;
