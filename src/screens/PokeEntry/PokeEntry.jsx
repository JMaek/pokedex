import React, { useEffect, useState } from "react";
import { PokeImage } from "../../components/PokeImage/PokeImage";
import "./PokeEntry.scss";
import axios from "axios";

export const PokeEntry = () => {
  const [pokemon, setPokemon] = useState({});
  const id = 1;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => setPokemon(response.data))
      .catch((err) => console.error(err));
  }, []);

  const type = pokemon?.types && pokemon?.types[0]?.type?.name;
  console.log(type, "sia pokemon");

  return (
    <div className={`PokeEntry ${type}`}>
      <div className="PokeEntry__infoPanel right">
        <div className="infoContainer"></div>
      </div>
      <PokeImage id={1} />
      <div className="PokeEntry__infoPanel left">
        <div className="infoContainer"></div>
      </div>
    </div>
  );
};
