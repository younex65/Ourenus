import { Modal, Fade, Backdrop, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import { handleCopyToClipboard } from "../utils/Helper";

const QrModal = ({ open, handleClose, title, link, id }) => {
  return (
    <Modal
      aria-labelledby={`qr-modal-title-${id}`}
      aria-describedby={`qr-modal-description-${id}`}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            borderRadius: "16px",
            transform: "translate(-50%, -50%)",
            width: 400,
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(8px)",
            border: "1px solid #ffffff6b",
            boxShadow: 24,
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography
            id={`qr-modal-title-${id}`}
            variant="h6"
            component="h2"
            style={{
              marginBottom: ".8rem",
              background: "rgba(214, 197, 221, 0.8)",
              borderRadius: "8px",
              backdropFilter: "blur(8px)",
            }}
          >
            {title}
          </Typography>
          <QRCode
            value={link}
            cursor={"pointer"}
            bgColor={"transparent"}
            onClick={() => handleCopyToClipboard(link)}
            id={2}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

QrModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default QrModal;
