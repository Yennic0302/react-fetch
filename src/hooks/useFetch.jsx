import { useState, useEffect } from "react";

export function useFecth(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    const requestFetch = async () => {
      setLoading(true);
      try {
        let request = await fetch(url);

        if (!request.ok) {
          let error = new Error("error en la peticion Fecth");
          error.status = request.status || "00";
          error.statusText = request.statusText || "ocurrio un error  ";
          throw error;
        }
        let resRequest = await request.json();
        if (!signal.aborted) {
          setData(resRequest);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError(error);
          setData(null);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    requestFetch();
    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
