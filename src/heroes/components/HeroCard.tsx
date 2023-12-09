import { Link } from "react-router-dom";
import { HeroI, heroProps } from "../data/heroInterface";

export const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters
}: heroProps) => {
  const heroImg = `/assets/heroes/${id}.jpg`;
  const charactersByHero = (<p>{characters}</p>);
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImg} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {
                (alter_ego !== characters) && charactersByHero
              }
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/hero/${id}`}>More info</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
