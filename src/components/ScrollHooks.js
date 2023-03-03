import { useEffect, useState } from "react";

export default function Scrollhooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // console.log("Moving the Scroll");

    const detectscroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", detectscroll);

    return () => {
      window.removeEventListener("scroll", detectscroll);
    };
  }, [scrollY]);

  return (
    <>
      <h2>Hooks - useEffect</h2>
      <p>
        This hook lets you perform side effects in function components, and it
        can be reused thanks to the arguments that we can pass to it.
      </p>
      <p>
        Navigator Scroll Y: <b>{scrollY}px</b>
      </p>
    </>
  );
}
