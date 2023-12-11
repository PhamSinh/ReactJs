import { Card } from "react-bootstrap";
import "./checkout-modal.scss";
import { RootState } from "../../../store";
import MovieStar from "../../common/movie-star/movie-star";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { movieDetailAction } from '../../../store/movie-detail-slice';

interface CheckOutModalProps {
  detailData: Object;
  isCheckout: boolean;
  SetIsCheckout: (value: boolean) => void;
  SetIsSuccess: (value: boolean) => void;
}
let data = {};
const CheckOutModal: React.FC<CheckOutModalProps> = ({
  detailData,
  SetIsCheckout,
  SetIsSuccess,
}) => {
  const dispatch = useDispatch();
  const checkoutDone = () => {
    SetIsCheckout(false);
    dispatch(movieDetailAction.setShowPay(true));
    dispatch(movieDetailAction.setShowPay(true));
    dispatch(movieDetailAction.setClose(true));
    setTimeout(() => SetIsSuccess(true), 500);
  };
  data = detailData;
  const close = () => {
    SetIsCheckout(false);
  }
  return (
    <>
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
            onClick={() => close}
          ></button>
          <Checkout checkoutDone={checkoutDone} />
        </div>
      </div>
    </>
  );
};

const CheckoutCard = () => {
  const movie = data;

  return (
    <Card style={{ width: "100%" }} className="bg-dark text-light">
      <Card.Body>
        <Card.Title>
          <span className="fs-1">{movie.title} - {movie.original_title}</span>
        </Card.Title>
        <Card.Text>
          <div className="text-warning">
            <MovieStar star={movie.vote_average} />
          </div>
          <div className="text-light">
            <i className="bx bxs-time"></i> {movie.vote_count} minutes
          </div>

          <div className="text-warning mt-3">
            <span className="fs-1 fw-bold">$ {movie.vote_count}</span>
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
