import React from "react";
import { Provider } from "react-redux";
import Button from "./components/Button";
import NewsItem from "./components/NewsItem";
import Loading from "./components/Loading";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Button />
      <Loading />
      <NewsItem />
    </Provider>
  );
}

export default App;
