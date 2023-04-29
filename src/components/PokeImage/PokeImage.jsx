/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./PokeImage.scss";
import axios from "axios";
import { BsStars } from "react-icons/bs";

export const PokeImage = ({ id }) => {
  const [shiny, setShiny] = useState(false);
  const [defaultImg, setDefaultImg] = useState("");
  const [shinyImg, setShinyImg] = useState("");

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        setDefaultImg(
          response.data.sprites?.other?.["official-artwork"].front_default
        ),
          setShinyImg(
            response.data.sprites?.other?.["official-artwork"].front_shiny
          );
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="PokeImage">
        <div className="PokeImage__pokeImage">
          <div className="PokeImage__moving ">
            <div className="bar left"></div>
            <div className="bar top"></div>
            <div className="bar right"></div>
            <div className="bar bottom"></div>
            <div className="PokeImage__imageContainer">
              <div className="PokeImage__iconContainer">
                <BsStars
                  className="PokeImage__shinyIcon"
                  onClick={() => {
                    setShiny((prevShiny) => !prevShiny);
                  }}
                />
              </div>
              <img
                className={shiny ? "PokeImage__img" : "PokeImage__transparent"}
                src={shinyImg}
              />
              <img
                className={shiny ? "PokeImage__transparent" : "PokeImage__img"}
                src={defaultImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
