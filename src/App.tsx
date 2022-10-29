import Simple from './components/0-Simple/Simple';
import UserEvent from './components/1-user-event/UserEvent';

import AppProviders from './providers/AppProviders';
import MuiMode from './components/mui/MuiMode';
import Skills from './components/getAllBy/Skills';
import Users from './components/httpRequests/Users';

function App() {
  return (
    <AppProviders>
      <>
        <Simple />
        <UserEvent />
        {/*<Skills skills={['HTML', 'CSS', 'JavaScript']} /> */}
        {/* <Users /> */}
        {/* <MuiMode /> */}
      </>
    </AppProviders>
  );
}

export default App;
