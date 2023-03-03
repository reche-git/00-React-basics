import { useState, useEffect } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  ///// useEffect asíncronos: /////

  useEffect(() => {
    
    const getPokemons = async () => {
      let url = "https://pokeapi.co/api/v2/pokemon";
      let res = await fetch(url),
        json = await res.json();
      // console.log(json);

      json.results.forEach(async (el) => {
        let res = await fetch(el.url),
          json = await res.json();

        // console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon]);
      });
    };
    getPokemons();
  }, []);

  ///// usual useEffect: /////

  //   useEffect(() => {
  //     let url = "https://pokeapi.co/api/v2/pokemon";
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         // console.log(json);
  //         json.results.forEach((el) => {
  //           fetch(el.url)
  //             .then((res) => res.json())
  //             .then((json) => {
  //               // console.log(json);
  //               let pokemon = {
  //                 id: json.id,
  //                 name: json.name,
  //                 avatar: json.sprites.front_default,
  //               };

  //               setPokemons((pokemons) => [...pokemons, pokemon]);
  //             });
  //         });
  //       });
  //   }, []);
  return (
    <>
      <h2>Async Fetch in Hooks</h2>
      <p>We can also use asynchronous petitions inside a useEffect, and of corse we are fetching pokémons (the API is free)</p>
      {pokemons.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        pokemons.map((el) => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
