import { useRef } from "react";

export default function References() {
  //Usamos una referencia para seleccionar el elemento que queremos usar
  //Este es el "getelementby...()" de React:
  let refMenuBtn = useRef(),
    refMenu = useRef();
  // console.log(refMenu, refMenuBtn);

  //En componentes de Clase sería:
  // let refMenuBtn = createRef(),
  // refMenu = createRef();

  /////Modo de hacerse con Vanilla JS/////
  //   const handleToggleMenu = (e) => {
  //     const $menu = document.getElementById("menu");

  //     if (e.target.textContent === "Abrir") {
  //       e.target.textContent = "Cerrar";
  //       $menu.style.display = "block";
  //     } else {
  //       e.target.textContent = "Abrir";
  //       $menu.style.display = "none";
  //     }
  //   };

  const handleToggleMenu = (e) => {
    if (refMenuBtn.current.textContent === "Open!") {
      refMenuBtn.current.textContent = "Close!";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Open!";
      refMenu.current.style.display = "None";
    }
  };

  return (
    <>
      <h2>References</h2>
      <p>
        Refs provide a way to access DOM nodes or React elements created in the
        render method, just like the method "getElementBtId()" in javascript.
      </p>
      <p>Here you can see how we can create a deployable menu with Refs to imitate JS coding</p>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Open!
      </button>
      <nav id="menu" ref={refMenu} style={{ display: "none" }}>
        <a
          href="https://reactjs.org/docs/refs-and-the-dom.html"
          rel="noreferrer"
          target="_blank"
        >
          Refs and the DOM
        </a>
        <br />
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          rel="noreferrer"
          target="_blank"
        >
          Most Popular React hooks in 2023!
        </a>
        <br />
        <a href="https://matias.ma/nsfw/" rel="noreferrer" target="_blank">
          A good time!
        </a>
        <br />
        <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
          Youtube
        </a>
        <br />
        <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
          Youtube again!
        </a>
        <br />
      </nav>
    </>
  );
}
