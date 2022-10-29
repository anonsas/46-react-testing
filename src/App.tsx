import './App.css';
import AppProviders from './providers/AppProviders';
import MuiMode from './components/mui/MuiMode';
import Application from './components/getBy/Application';
import Skills from './components/getAllBy/Skills';
import UserEvent from './components/userEvent/UserEvent';
import Users from './components/httpRequests/Users';

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={['HTML', 'CSS', 'JavaScript']} />
        {/* <UserEvent /> */}
        <Users />
        {/* <MuiMode /> */}
      </div>
    </AppProviders>
  );
}

export default App;
