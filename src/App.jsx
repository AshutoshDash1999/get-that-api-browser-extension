import axios from "axios";
import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [queryUrl, setQueryUrl] = useState("");
  const [jsonData, setJsonData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [requestMethod, setRequestMethod] = useState("get");
  const [payloadData, setPayloadData] = useState(null);

  const fetchAPIHandler = () => {
    setIsLoading(true);
    axios({
      method: requestMethod,
      url: queryUrl,
      data: payloadData,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((data) => {
        setJsonData(data.data);
        console.log(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setJsonData(error);
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.app__wrapper}>
      <div className={styles.api__request__form__wrapper}>
        <select
          name=""
          id=""
          onChange={(event) => setRequestMethod(event.target.value)}
          className={styles.api__methods__dropdown}
        >
          <option value="get">GET</option>
          <option value="post">POST</option>
        </select>
        <input
          type="text"
          placeholder="https://api.example.url"
          onChange={(event) => setQueryUrl(event.target.value)}
          className={styles.api__input__field}
        />
        <button
          className={styles.api__handle__button}
          onClick={fetchAPIHandler}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </div>
      {requestMethod === "post" ? (
        <div className={styles.payload__input__wrapper}>
          <textarea
            placeholder="Paste payload here"
            rows={4}
            cols={40}
            className={styles.api__input__field}
            onChange={(event) => setPayloadData(event.target.value)}
          ></textarea>
        </div>
      ) : null}
      {isLoading ? (
        <div className={styles.api__loading__text}>Loading...</div>
      ) : (
        <>
          <pre className={styles.response__view}>{JSON.stringify(jsonData, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default App;
