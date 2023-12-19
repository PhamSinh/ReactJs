import { Modal } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../../store';
import { movieDetailAction } from "../../../store/movie-detail-slice";
type NotifyModalProps = {
  SetIsSuccess: (value: boolean) => void;
  isSuccess: boolean;
};
const NotifyModal: React.FC<NotifyModalProps> = ({
  isSuccess,
  SetIsSuccess,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      SetIsSuccess(false);
      isSuccess = false;
      dispatch(movieDetailAction.setShowPay(false))
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });
  let { isShowPay } = useSelector((store: RootState) => store.detail);

  return (
    <>
      <Modal
        show={!!(isSuccess && isShowPay)}
        onHide={() => {
          SetIsSuccess(false);
        }}
        contentClassName="bg-success-subtle text-dark"
      >
        <Modal.Header className="alert alert-success mb-0 fs-6">
          Checkout successfully, the movie will be sent to your email soon!
        </Modal.Header>
      </Modal>
    </>
  );
};

export default NotifyModal;
