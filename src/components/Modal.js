import React, { useRef, useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { TableComponent } from "./TableComponent";

import axios from "axios";

export const Modal = ({ showModal, setShowModal, arrayItems, id }) => {
  const modalRef = useRef();
  const [ObjectBundle, setObjectBundle] = useState([]);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setObjectBundle([]);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        setObjectBundle([]);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    if (arrayItems.length > 0 && showModal) {
      for (let i = 0; i < arrayItems.length; i++) {
        let element = arrayItems[i];
        axios
          .get(element)
          .then((res) => {
            setObjectBundle((prevState) => [...prevState, res.data]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [arrayItems, showModal]);

  // console.log("⌛", ObjectBundle);

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    setObjectBundle([]);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const renderDataModal = () => {
    switch (id) {
      case "planet":
        return (
          <TableComponent
            ObjectBundle={ObjectBundle}
            id={id}
            tableHeaders={["Name", "Terrain", "Climate"]}
            tableData={["name", "terrain", "climate"]}
          />
        );
      case "films":
        return (
          <TableComponent
            ObjectBundle={ObjectBundle}
            id={id}
            tableHeaders={["Title", "Director", "Producer"]}
            tableData={["title", "director", "producer"]}
          />
        );
      default:
        return (
          <TableComponent
            ObjectBundle={ObjectBundle}
            id={id}
            tableHeaders={["Name", "Model", "Manufacturer"]}
            tableData={["name", "model", "manufacturer"]}
          />
        );
    }
  };

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper showModal={showModal}>
            <ModalContent>{renderDataModal(id)}</ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: row;
  align-item: center;
  height: 100%;
  width: 100%;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  vertical-align: top;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  position: absolute;
  z-index: 10;
  border-radius: 5px;
  top: 20%;
  overflow-y: hidden;
  padding: 10px;
`;
const ModalContent = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  /* justify-content: center; */

  align-items: center;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
`;

const CloseModalButton = styled(MdClose)`
  background: none;
  color: #141414;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
