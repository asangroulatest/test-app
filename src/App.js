import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useRef} from 'react';
import {styled} from 'styled-components';

const Wrapper = styled.div`
width: 400px;
height: 100px;
`

const StyledParagraph = styled.p`
  outline: none !important;
  height: 100%;
  word-break: break-word;
  border: ${({ error }) => (error ? '1px solid red' : 'none')};
  &:empty {
    ::before {
      content: '${({ placeholder }) => placeholder}';
      opacity: 0.6;
    }
  }
`;

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
          {showInput && <StyledParagraph ref={ref} contentEditable={true} placeholder="Write a message.."/>}
          {!showInput && <p>Not this empty input</p>}
        </Wrapper>

      </header>
    </div>
  );
}

export default App;
