import "./styles.css";
import { useAsync } from "./useAsync";

export default function App() {
  const { data, status, error } = useAsync();

  return (
    <div className="App">
      {status === "loading" && <p> Loading... </p>}
      {status === "error" && <p style={{ color: "red" }}> {error}</p>}
      {status === "success" && <p> {data} </p>}
    </div>
  );
}
