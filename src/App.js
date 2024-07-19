import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useRef} from 'react';
import {styled} from 'styled-components';
const FormControlWrapper = styled.div`
  width: 100%;
  flex-basis: 100%;
`;

const FormWrapper = ({children}) => {
  const renChildren = children({});
  return <FormControlWrapper>
    {renChildren}
  </FormControlWrapper>
}

const Wrapper = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  min-height: 95px;
  width: 400px;
  position: relative;
  background: #ffffff;
  padding: 20px 24px;
  border-radius: 60px;
  flex-wrap: nowrap;
  justify-content: space-between;
  cursor: text;
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

const InputWrapper = styled.div`
  width: 100%;
  align-self: stretch;
`;

function App() {

const [showInput, setShowInput] = useState(false);
const [inputMessage, setInputMessage] = useState('');
const ref = useRef(null);

const handleChange = (e) => {
  const { innerText } = e.target;
  setInputMessage(innerText);
};



useEffect(() => {
  if(ref.current){
    ref.current.focus();
  }

},[showInput])
console.log('show input', showInput)

const tooLong = inputMessage.length > 7;

  return (
    <div className="App">
        <Wrapper onClick={() => {console.log('clicked'); setShowInput(true)}}>
          {showInput && <InputWrapper><FormWrapper>{() => <StyledParagraph onInput={handleChange} error={tooLong} ref={ref} contentEditable={true} placeholder="Write a message.."/>}</FormWrapper></InputWrapper>}
          {!showInput && <p>more styles</p>}
        </Wrapper>
    </div>
  );
}

export default App;
