import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Container } from "reactstrap";

// Components
import Header from "./components/Header";

// Pages
import IdentityPage from "./pages/user/identity";
import ChatPage from "./pages/chat/room";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Container className="my-5">
          <Switch>
            <Route path="/" exact component={IdentityPage} />
            <Route path="/chat" exact component={ChatPage} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
