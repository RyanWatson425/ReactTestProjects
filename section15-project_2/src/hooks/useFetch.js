import { useState } from "react";

const useFetch = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url, {
            //the ternary operators give flexibility so when calling useFetch you don't need to pass dummy data for args you aren't using
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
};
    return {
        // isLoading: isLoading,
        // error: error,
        // sendRequest: sendRequest 
        // OR
        isLoading,
        error,
        sendRequest
    };
  };

export default useFetch;
