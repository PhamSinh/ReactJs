import "./button.scss";

interface ButtonProps {
  icon?: JSX.Element;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MovieButton: React.FC<ButtonProps> = ({ icon, label, onClick }) => {
  return (
    <>
      <span className="btn btn-hover movie-button" onClick={onClick}>
        {icon ? icon : <i className="bx bxs-right-arrow"></i>}
        <span>{label}</span>
      </span>
    </>
  );
};
export default MovieButton;
