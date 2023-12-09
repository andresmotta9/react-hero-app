import { useMemo } from "react";
import { HeroCard } from ".";
import { getHeroesByPublisher } from "../helpers"

export const HeroList: React.FC<{ publisher: string }> = (props) => {
  const heroes = useMemo(() => getHeroesByPublisher(props.publisher), [props.publisher]);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map(hero => (
        <HeroCard key={hero.id} {...hero}/>
      ))}
    </div>
  )
}