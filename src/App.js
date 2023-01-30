import "./App.css";
import Landing from "./components/Landing";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
