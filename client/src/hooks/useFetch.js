import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .catch((error) => console.error(error))
      .then(setData);
  }, [url]);
  return [data];
}

export default useFetch;