import { Card, Modal } from "react-bootstrap";
import "./checkout-modal.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import MovieStar from "../../common/movie-star/movie-star";
import { useForm } from "react-hook-form";

interface CheckOutModalProps {
  isCheckout: boolean;
  SetIsCheckout: (value: boolean) => void;
  SetIsSuccess: (value: boolean) => void;
}

const CheckOutModal: React.FC<CheckOutModalProps> = ({
  isCheckout,
  SetIsCheckout,
  SetIsSuccess,
}) => {
  const checkoutDone = () => {
    SetIsCheckout(false);
    setTimeout(() => SetIsSuccess(true), 500);
  };
  return (
    <>
      <Modal
        id="checkout-form"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={isCheckout}
        onHide={() => SetIsCheckout(false)}
      >
        <div className="app-container">
          <div className="row">
            <div className="col">
              {/* <Item name="Instax Mini 90 Neo Classic" price="$144.99" img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg" /> */}
              <CheckoutCard />
            </div>
            <div className="col no-gutters position-relative">
              <button
                type="button"
                className="btn-close position-absolute bg-secondary-subtle"
                aria-label="Close"
                onClick={() => SetIsCheckout(false)}
              ></button>
              <Checkout checkoutDone={checkoutDone} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const CheckoutCard = () => {
  const movie = useSelector((state: RootState) => state.detail.movieDetail);
  return (
    <Card style={{ width: "100%" }} className="bg-dark text-light">
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>
          <span className="fs-1">{movie.title}</span>
        </Card.Title>
        <Card.Text>
          <div className="text-warning">
            <MovieStar star={movie.vote} />
          </div>
          <div className="text-light">
            <i className="bx bxs-time"></i> {movie.time} minutes
          </div>
          <div className="text-light">
            <i className="bx bxs-movie"></i>{" "}
            {new Date(movie.release_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div className="text-warning mt-3">
            <span className="fs-1 fw-bold">$ {movie.price}</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

type CheckoutProps = {
  checkoutDone: VoidFunction;
};

type InputData = {
  cardName: string;
  cardNumber: number;
  expDate: string;
  cvv: number;
  email: string;
};

const Checkout: React.FC<CheckoutProps> = ({ checkoutDone }) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expDate: "",
      cvv: 0,
      email: "",
    },
  });
  return (
    <div className="checkout position-relative">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(JSON.stringify(data));
          checkoutDone();
        })}
      >
        <div className="checkout-container">
          <h3 className="heading-3">Credit card checkout</h3>
          <div className="input">
            <label>Email</label>
            <div className="input-field">
              <input type="email" {...register("email", { required: true })} />
            </div>
            {errors.email && (
              <span className=" text-danger">This field is required</span>
            )}
          </div>

          <div className="input">
            <label>Cardholder's Name</label>
            <div className="input-field">
              <input
                type="text"
                {...register("cardName", { required: true })}
              />
            </div>
            {errors.cardName && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <div className="input">
            <label>Card Number</label>
            <div className="input-field">
              <input
                type="number"
                {...register("cardNumber", { required: true })}
              />
              <img src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" />
            </div>
            {errors.cardNumber && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="position-absolute mb-3 w-100 d-flex bottom-0 start-0 justify-content-center">
          <button className="checkout-btn m-0" type="submit">
            Place order
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CheckOutModal;
