import "./Styles.css";
import moduleStyles from "./Styles.module.css";
import "./Styles.scss";

export default function Styles() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
    backgroundColor: "#61dafb",
  };
  return (
    <section className="estilos">
      <h2>CSS Styles in React</h2>
      <p>We can give styles to our work in diferent ways, such as:</p>
      <h3 className="bg-react">Styles in CSS from external file</h3>
      <h3
        style={{
          borderRadius: ".25rem",
          margin: "1rem auto",
          maxWidth: "40%",
          backgroundColor: "#61dafb",
        }}
      >
        Inline Styles (style attribute)
      </h3>
      <h3 style={myStyles}>Inline styles but with variable interpolation</h3>
      <h3 className="bg-react">
        Importing Normalize Styles with:
        <br /> {/*Go to "index.css"*/}
        <code>@import-normalize;</code>
      </h3>
      <h3 className={moduleStyles.error}>
        Styles with Modules:
        <br />
        Error!
      </h3>
      {/* Go to "Styles.module.css" */}
      <h3 className={moduleStyles.success}>
        Styles with Modules:
        <br />
        Success!
      </h3>
      <h3 className="bg-sass">Styles with SASS</h3>
      {/*Ir al archivo "Styles.scss"*/}
    </section>
  );
}
