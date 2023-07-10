import { useEffect, useState } from "react";

function GetPost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError("There was a problem!"))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      {error ? <div>{error}</div> : loading ? <div>Loading ...</div> : null}
      {!error && !loading && <div>{data.title}</div>}
    </div>
  );
}

export default GetPost;
