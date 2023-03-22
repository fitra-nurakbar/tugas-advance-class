import axios from "axios";
import { useEffect, useState } from "react";

export default function useAsync(url) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      axios(url, {
        method: "GET",
        header: {
          "Content-Type": "Application/json",
        },
      })
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchData();
  }, [url]);

  return { loading, data, error };
}
