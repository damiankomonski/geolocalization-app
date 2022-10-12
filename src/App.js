import './App.scss';
import { Container, Row } from "react-bootstrap";
import AllSearches from "./components/AllSearches/AllSearches";
import ApplicationSearch from './components/ApplicationSearch/ApplicationSearch';

function App() {
  // sessionStorage.clear();
  // sessionStorage.setItem("test", "test1");

  return (
    <div className="App">
      <Container>
        <Row>
          <AllSearches />
          <ApplicationSearch />
        </Row>
      </Container>
    </div>
  );
}

export default App;
