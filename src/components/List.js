import React, { useState } from "react";
import { Modal } from "./Modal";
import styled, { keyframes } from "styled-components";
export const List = ({ people }) => {
  const [showModal, setShowModal] = useState(false);
  const [arrayItems, setArrayItems] = useState([]);
  const [idString, setId] = useState("");

  const openModal = (items, id) => {
    setShowModal((prev) => !prev);
    setArrayItems(items);
    setId(id);
  };

  const RenderTable = () => {
    return (
      <TableContainer>
        <Logo />
        <Table>
          <thead>
            <tr>
              <Th>Name</Th>
              <Th>height (Mts)</Th>
              <Th>Mass (Kms)</Th>
              <Th>Hair color</Th>
              <Th>Skin color</Th>
              <Th>Eye color</Th>
              <Th>Date of birth</Th>
              <Th>Gender</Th>
              <Th>Origin's planet</Th>
              <Th>films</Th>
              <Th>starships</Th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => {
              return (
                <tr key={person.name}>
                  <Td>{person.name}</Td>
                  <Td>{person.height}</Td>
                  <Td>{person.mass}</Td>
                  <Td>{person.hair_color}</Td>
                  <Td>{person.skin_color}</Td>
                  <Td>{person.eye_color}</Td>
                  <Td>{person.birth_year}</Td>
                  <Td>{person.gender}</Td>
                  <TdButton
                    onClick={() => openModal([person.homeworld], "planet")}
                  >
                    show planet
                  </TdButton>
                  <TdButton onClick={() => openModal(person.films, "films")}>
                    show films
                  </TdButton>
                  <TdButton
                    onClick={() => openModal(person.starships, "starships")}
                  >
                    show starships
                  </TdButton>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Container>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        arrayItems={arrayItems}
        id={idString}
      />
      <RenderTable />
      <Twinkling />
    </Container>
  );
};

const Container = styled.div``;

const move_twinkle_back = keyframes`
0% { 
  transform: translateX(0px);
}
25%  { 
  transform: translateX(42px);
}
50% { 
  transform: translateX(20px);
}
100% { 
  transform: translateX(0rem);
}
`;

const Twinkling = styled.div`
  width: 90%;
  height: 800px;
  display: inline-block;
  background: transparent;
  background-image: url(${require(`../images/twinkling.png`)});
  background-repeat: repeat;
  animation: ${move_twinkle_back} 2s linear infinite;
`;

const Logo = styled.div`
  padding: 10px;
  width: 150px;
  height: 79px;
  display: inline-block;
  background: transparent;
  background-image: url(${require(`../images/logo.png`)});
  background-repeat: no-repeat;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Table = styled.table`
  background: #181919;
  text-align: center;
  table-layout: fixed;
  width: 90%;
  border: 3px solid #1e3445;
`;

const Th = styled.th`
  padding: 15px;
  background: #1e3445;
`;

const Td = styled.td`
  padding: 10px;
`;

const TdButton = styled.td`
  padding: 10px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    text-decoration: underline;
    text-shadow: 
      0 0 1px white , 
      0 0 5px white , 
      0 0 10px #1e7deb , 
      0 0 20px #1e7deb , 
      0 0 10px #1e7deb ;
}
  }
  &:active {
  background-color: #1e3445;
`;
