import { useState } from "react";

///// Easy Form /////
// export default function Formularios() {
//   const [nombre, setNombre] = useState("");
//   const [sabor, setSabor] = useState("");
//   const [lenguaje, setLenguaje] = useState("");
//   const [terminos, setTerminos] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("El formulario se ha enviado")
//   }
//   return (
//     <>
//       <h2>Formularios</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Nombre">Nombre</label>
//         <input
//           type="text"
//           id="Nombre"
//           name="nombre"
//           value={nombre}
//           onChange={(e) => setNombre(e.target.value)}
//         />
//         <p>Elije tu Sabor JS Favorito:</p>
//         <input
//           type="radio"
//           id="vanilla"
//           name="sabor"
//           value="vanilla"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//         />
//         <label htmlFor="vanilla">Vanilla</label>
//         <input
//           type="radio"
//           id="react"
//           name="sabor"
//           value="react"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//         />
//         <label htmlFor="react">React</label>
//         <input
//           type="radio"
//           id="angular"
//           name="sabor"
//           value="angular"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//         />
//         <label htmlFor="angular">Angular</label>
//         <input
//           type="radio"
//           id="vue"
//           name="sabor"
//           value="vue"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//           defaultChecked
//         />
//         <label htmlFor="vue">Vue</label>
//         <input
//           type="radio"
//           id="svelte"
//           name="sabor"
//           value="svelte"
//           onChange={(e) => {
//             setSabor(e.target.value);
//           }}
//         />
//         <label htmlFor="svelte">Svelte</label>
//         <p>Elije tu lenguaje de programación favorito:</p>
//         <select
//           name="lenguaje"
//           onChange={(e) => {
//             setLenguaje(e.target.value);
//           }}
//           defaultValue=""
//         >
//           <option value="">---</option>
//           <option value="js">JavaScript</option>
//           <option value="php">PHP</option>
//           <option value="py">Python</option>
//           <option value="go">GO</option>
//           <option value="rb">Ruby</option>
//         </select>
//           <br />
//           <label htmlFor="terminos">Acepto términos y condiciones</label>
//           <input type="checkbox" id="terminos" name="terminos" onChange={e => {setTerminos(e.target.checked)}}/>
//           <br />
//           <input type="submit" />
//       </form>
//     </>
//   );
// }

export default function Forms() {
  const [form, setForm] = useState({ name: "" });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submited, check your console!");
    console.log(form);
  };
  return (
    <>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label><br />
        <input
          type="text"
          id="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p>Choose your favourite JS flavour:</p>
        <input
          type="radio"
          id="vanilla"
          name="flavor"
          value="Vanilla"
          onChange={handleChange}
        />
        <label htmlFor="vanilla">Vanilla</label>
        <input
          type="radio"
          id="react"
          name="flavor"
          value="React"
          onChange={handleChange}
        />
        <label htmlFor="react">React</label>
        <input
          type="radio"
          id="angular"
          name="flavor"
          value="Angular"
          onChange={handleChange}
        />
        <label htmlFor="angular">Angular</label>
        <input
          type="radio"
          id="vue"
          name="flavor"
          value="Vue"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="vue">Vue</label>
        <input
          type="radio"
          id="svelte"
          name="flavor"
          value="Svelte"
          onChange={handleChange}
        />
        <label htmlFor="svelte">Svelte</label>
        <p>Choose your favourite coding language:</p>
        <select name="language" onChange={handleChange} defaultValue="">
          <option value="">---</option>
          <option value="js">JavaScript</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br />
        <label htmlFor="terms">I accept the terms and conditions</label>
        <input
          type="checkbox"
          id="terms"
          name="Terms"
          onChange={handleChecked}
        />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
