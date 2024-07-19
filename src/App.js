import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useRef} from 'react';
import {styled} from 'styled-components';

const Wrapper = styled.div`
width: 400px;
height: 100px;
`

const StyledParagraph = styled.p``

function App() {

const [showInput, setShowInput] = useState(false);
const ref = useRef(null);

useEffect(() => {
  if(ref.current){
    ref.current.focus();
  }

},[showInput])
console.log('show input', showInput)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Wrapper onClick={() => {console.log('clicked'); setShowInput(true)}}>
          {showInput && <StyledParagraph ref={ref} contentEditable={true}>Who is this</StyledParagraph>}
          {!showInput && <p>Not this</p>}
        </Wrapper>

      </header>
    </div>
  );
}

export default App;
