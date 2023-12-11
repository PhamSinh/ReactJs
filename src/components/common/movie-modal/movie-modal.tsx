import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { movieDetailAction } from '../../../store/movie-detail-slice';

const MovieModal: React.FC = () => {

  const { isShow } = useSelector((store: RootState) => store.detail);
  const dispatch = useDispatch();
  return (
    <>

      <Modal
        show={isShow}
        onHide={() => dispatch(movieDetailAction.setShow(false))}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <iframe
            src="https://www.youtube.com/embed/kI9ALX7RsYQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            height="500px"
            width="100%"
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MovieModal;