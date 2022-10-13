import React, { useState } from "react";
import './App.scss';
import { Container, Row } from "react-bootstrap";
import AllSearches from "./components/AllSearches/AllSearches";
import ApplicationSearch from './components/ApplicationSearch/ApplicationSearch';

function App() {
  let searches = JSON.parse(sessionStorage.getItem("searches")) || [];
  let [searchHistory, setSearchHistory] = useState(searches);

  function handleSearchHistory(value){
    setSearchHistory([...searchHistory, ...[value]]);
    sessionStorage.setItem("searches", JSON.stringify([...searchHistory, ...[value]]));
  }

  function clearHistory(){
    sessionStorage.removeItem("searches");
    setSearchHistory([]);
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <AllSearches searchHistory={searchHistory} setSearchHistory={handleSearchHistory} clearHistory={clearHistory} />
          <ApplicationSearch setSearchHistory={handleSearchHistory} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
