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
width: 500px;
height: 70px;
border: 1px solid green;
padding: 20px;
margin: 50px;
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
const [inputMessage, setInputMessage] = useState('');
const ref = useRef(null);

const handleChange = (e) => {
  const { innerText } = e.target;
  setInputMessage(innerText);
};

const handlePaste = (event) => {
  event.preventDefault();

  const text = event?.clipboardData?.getData('text/plain');
  const selection = window.getSelection();
  if (!selection?.rangeCount) {
    return;
  }
  selection.deleteFromDocument();
  const node = document.createTextNode(text);
  selection.getRangeAt(0).insertNode(node);
  const textNodes = [];
  const parent = selection.getRangeAt(0).commonAncestorContainer;
  const children = parent.childNodes;
  for (const child of children) {
    textNodes.push(child.nodeValue);
  }
  const inputText = textNodes.join('');
  setInputMessage(inputText || '');
  selection.collapseToEnd();
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
          {showInput && <FormWrapper>{() => <StyledParagraph onPaste={handlePaste} tabIndex={0} onInput={handleChange} error={tooLong} ref={ref} contentEditable={true} placeholder="Write a message.."/>}</FormWrapper>}
          {!showInput && <p>With large width</p>}
        </Wrapper>
    </div>
  );
}

export default App;
