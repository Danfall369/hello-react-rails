// Entry point for the build script in your package.json
import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Message from "./components/Message";

function App() {
  return <h2>React-Rails</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Provider store={store}>
        <Message />
      </Provider>
    </Router>
  </React.StrictMode>
);
