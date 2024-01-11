import PropTypes from "prop-types";

function Modal({
  isOpen,
  onClose,
  message,
  overlayStyle,
  modalStyle,
  buttonStyle,
  buttonText = "Close",
}) {
  if (!isOpen) return null;

  const defaultOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1000,
  };

  const defaultModalStyle = {
    backgroundColor: "white",
    padding: "20px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: "4px",
    gap: "20px",
  };

  const defaultButtonStyle = {
    maxWidth: "70px",
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#667910",
    color: "white",
  };

  return (
    <div style={{ ...defaultOverlayStyle, ...overlayStyle }}>
      <div style={{ ...defaultModalStyle, ...modalStyle }}>
        <p>{message}</p>
        <button onClick={onClose} style={{ ...defaultButtonStyle, ...buttonStyle }}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string,
  overlayStyle: PropTypes.object,
  modalStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonText: PropTypes.string,
};

export default Modal;
