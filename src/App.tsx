import "./App.css";
import Application from "./components/getBy/Application";
import Skills from "./components/getAllBy/Skills";
import UserEvent from "./components/userEvent/UserEvent";

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
      <UserEvent />
    </div>
  );
}

export default App;
