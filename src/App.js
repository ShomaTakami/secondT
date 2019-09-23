import React from "react";
import "./App.css";
import SimpleTable from "./SimpleTable";
import Filter from "./filter";
import Header from "./header";

function App() {
  return (
    <div className='App'>
      <Header />
      <Filter />
      <SimpleTable className='table_sim' />
    </div>
  );
}

export default App;
