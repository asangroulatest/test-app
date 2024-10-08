import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { styled } from 'styled-components';
const FormControlWrapper = styled.div`
  width: 100%;
  flex-basis: 100%;
`;

const FormWrapper = ({ children }) => {
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
  width: 300px;
  max-width: 300px;
  position: relative;
  background: #ffffff;
  padding: 20px 24px;
  border-radius: 60px;
  flex-wrap: nowrap;
  justify-content: space-between;
  cursor: text;
  font-size: 14px;
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
  };
  font-size: 16px;
  /* &:focus {
        font-size: 14px !important;
        border: 1px solid green;
    } */
`;

const InputWrapper = styled.div`
  width: 100%;
  align-self: stretch;
  font-size: 14px;
`;

const IntialMessageTextWrapper = styled.div`
  width: 100%;
`;

function App() {

  const [showInput, setShowInput] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  let inputElementRef = useRef(null);


  const handleChange = (e) => {
    const { innerText } = e.target;
    setInputMessage(innerText);
  };




  const callbackRef = useCallback(inputElement => {
    if (inputElement) {
      //inputElement.style.fontSize = '30px';
      inputElementRef.current = inputElement;
      inputElement.focus();
    }
  }, []);

  console.log('renders show', showInput);


  const tooLong = inputMessage.length > 7;

  return (
    <div className="App">
      <Wrapper onClick={() => { console.log('clicked'); setShowInput(true) }}>
        {showInput && <InputWrapper><FormWrapper>{() => <StyledParagraph
          onInput={handleChange}
          error={tooLong}
          ref={callbackRef}
          contentEditable={true}

          placeholder="Write a message.." />
        }</FormWrapper></InputWrapper>}
        {!showInput && <IntialMessageTextWrapper><p>now 16px</p></IntialMessageTextWrapper>}
      </Wrapper>
    </div>
  );
}

export default App;
