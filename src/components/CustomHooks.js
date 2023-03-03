import { useFetch } from "../hooks/useFetch";

export default function CustomHooks() {
  // console.log(useFetch());
  let url = "https://jsonplaceholder.typicode.com/users";

  let { data, error } = useFetch(url);
  // console.log(data, isPending, error);
  // console.log(error);
  return (
    <>
      <h2>Custom Hooks</h2>
      <p>
        Hooks can also be created! For this example, you will find a a hook
        named "useFetch" in the "hooks" foolder
      </p>
      <p>
        This time will use the API of{" "}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          rel="noreferrer"
        ></a>{" "}
        to show what kind of error and data our custom hook brought
      </p>
      {error && (
        <p>
          The error property is: <mark>{JSON.stringify(error.err)}</mark>
        </p>
      )}
      <div>
        <p>The data:</p>
        {data !== null ? (
          <ul>
            {data.map((el, index) => (
              <li key={index}>{el.name}</li>
            ))}
          </ul>
        ) : (
          <p>Refresh the page!</p>
        )}
      </div>
    </>
  );
}
