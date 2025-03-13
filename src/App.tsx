import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

/*=========== STYLE =============*/
import "./App.css";
import "./style/index.css";

/*=========== REDUX ===========*/
import { store } from "./store/store.ts";

/*=========== NAVIGATION ===========*/
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <AppRoutes />
    </Provider>
  );
}

export default App;
