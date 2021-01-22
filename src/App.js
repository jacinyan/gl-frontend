import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';

import Test from './components/Test';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Home />
          <Test />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
