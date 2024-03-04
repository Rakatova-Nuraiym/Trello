import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ProviderPage from "./pages/Provider/ProviderPage";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ProviderPage>
          <App />
        </ProviderPage>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
