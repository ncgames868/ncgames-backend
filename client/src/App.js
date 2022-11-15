import styled from 'styled-components';
import './app.css'
import Register from './Components/register/Register';

function App() {
  return (
    <AppContainer>
      <Register />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  h1,h2,h3,h4,h5 {
    margin: 0;
    padding: 0;
  }
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Inter';
`