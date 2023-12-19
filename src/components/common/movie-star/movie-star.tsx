
interface MovieStarProps {
    star: number;
}

const MovieStar: React.FC<MovieStarProps> = ({star}) => {
    const itemList = [
      <i className="bx bx-star" key={1}></i>,
      <i className="bx bx-star" key={2}></i>,
      <i className="bx bx-star" key={3}></i>,
      <i className="bx bx-star" key={4}></i>,
      <i className="bx bx-star" key={5}></i>
    ];
  for (let index = 0; index < star; index++) {
    itemList[index] = <i className="bx bxs-star" key={index+1}></i>;
  }
    return (
        <>{itemList}</>
    )
}

export default MovieStar;