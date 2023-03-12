import axios from "axios";
import { useState } from "react";
import styles from "./App.module.css";
import { DELETE, GET, PATCH, POST, PUT } from "./services";

function App() {
  const [queryUrl, setQueryUrl] = useState("");
  const [jsonData, setJsonData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [requestMethod, setRequestMethod] = useState("GET");
  const [payloadData, setPayloadData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchAPIHandler = async () => {
    setIsLoading(true);
    try {
      switch (requestMethod) {
        case "GET":
          setJsonData(await GET(queryUrl));
          break;
        case "POST":
          setJsonData(await POST(queryUrl, payloadData));
          break;
        case "PUT":
          setJsonData(await PUT(queryUrl, payloadData));
          break;
        case "PATCH":
          setJsonData(await PATCH(queryUrl, payloadData));
          break;
        case "DELETE":
          setJsonData(await DELETE(queryUrl));
          break;
        default:
          break;
      }

      // axios({
      //   method: requestMethod,
      //   url: queryUrl,
      //   data: payloadData,
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //   },
      // })
      //   .then((data) => {
      //     setJsonData(data.data);
      //     console.log(data.data);
      //     setIsLoading(false);
      //   })
      //   .catch((error) => {
      //     setJsonData(error);
      //     console.log(error);
      //     setIsLoading(false);
      //   });
    } catch (error) {
      console.log(error);
      if (err.response.status === 404) {
        setErrorMessage("Resource could not be found!");
      } else {
        setErrorMessage(err.message);
      }
    } finally {
      setIsLoading(false);
    }
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
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
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
      {requestMethod === "POST" ||
      requestMethod === "PUT" ||
      requestMethod === "PATCH" ? (
        <div className={styles.payload__input__wrapper}>
          <textarea
            placeholder={` Please keep the format as follows(avoid trailing comma, key value in string):
            {
              "title": "foo",
             "body": "bar",
             "userId": "1"
         }`}
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
          <div>{errorMessage}</div>
          <pre className={styles.response__view}>
            {JSON.stringify(jsonData, null, 2)}
          </pre>
        </>
      )}
    </div>
  );
}

export default App;
