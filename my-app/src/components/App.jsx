import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Footer from "./Footer";
import Notes from "./Notes";

const App = () => {
  return ReactDOM.render(
    <div>
      <header>
        <Heading />
      </header>
      <Notes />
      <footer>
        <Footer />
      </footer>
    </div>,
    document.getElementById("root")
  );
};

export default App;
