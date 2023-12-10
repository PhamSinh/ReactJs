import { Modal } from "react-bootstrap";
import { useEffect } from "react";

type NotifyModalProps = {
  SetIsSuccess: (value: boolean) => void;
  isSuccess: boolean;
};

const NotifyModal: React.FC<NotifyModalProps> = ({
  isSuccess,
  SetIsSuccess,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
        SetIsSuccess(false);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      <Modal
        show={isSuccess}
        onHide={() => {
          SetIsSuccess(false);
        }}
        contentClassName="bg-success-subtle text-dark"
      >
        <Modal.Header closeButton className="alert alert-success mb-0 fs-6">
            Checkout successfully, the movie will be sent to your email soon!
        </Modal.Header>
      </Modal>
    </>
  );
};

export default NotifyModal;
