import { Image } from "react-bootstrap";
import { ActorModel } from "../../../services/MediaType.model";
import "./movie-actor.scss"

interface MovieActorProps {
    actor: ActorModel
}

const MovieActor: React.FC<MovieActorProps> = ({actor}) => {
    return (
        <div className="justify-content-center">
            <Image className="actor-avatar" src={actor.avatarUrl} roundedCircle />
            <h5 className="actor-name text-center mt-2 text-capitalize fw-bolder">{actor.name}</h5>
        </div>
    )
}

export default MovieActor;