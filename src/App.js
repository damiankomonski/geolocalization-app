import './App.scss';
import { Container, Row } from "react-bootstrap";
import AllSearches from "./components/AllSearches/AllSearches";
import ApplicationSearch from './components/ApplicationSearch/ApplicationSearch';

function App() {
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
