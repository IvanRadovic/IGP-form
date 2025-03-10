import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

/*=========== STYLE =============*/
import "./App.css";

/*=========== REDUX ===========*/
import { store } from "./redux/store.ts";

/*=========== NAVIGATION ===========*/
import AppNavigation from "./navigation/AppNavigation.tsx";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <AppNavigation />
    </Provider>
  );
}

export default App;
