import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

export default function PopupDetail({
  show,
  handleClose,
  dataDetailPost = {},
}) {
  const { id, userId, title, body } = dataDetailPost;
  return (
    <ModalContainer>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <ul>
            <li>
              <strong>id:</strong> {id}
            </li>
            <li>
              <strong>userId:</strong> {userId}
            </li>
            <li>
              <strong>Title:</strong> {title}
            </li>
            <li>
              <strong>Body:</strong> {body}
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  li {
    border-bottom: 1px solid #ccc;
  }
`;
