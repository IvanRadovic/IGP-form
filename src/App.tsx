import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

/*=========== STYLE =============*/
import "./App.css";

/*=========== REDUX ===========*/
import { store } from "./redux/store.ts";

/*=========== NAVIGATION ===========*/
import AppRoutes from "./routes/AppRoutes.tsx";

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <AppRoutes />
    </Provider>
  );
}

export default App;
