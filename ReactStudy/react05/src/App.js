import logo from "./logo.svg";
import "./App.css";
import MyAxios from "./components/MyAxios";
import WeatherPage from "./page/WeatherPage";

function App() {
  return (
    <div className="App">
      {/* <MyAxios></MyAxios> */}
      <WeatherPage></WeatherPage>
    </div>
  );
}

export default App;
