import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef, useCallback } from 'react';
import { styled } from 'styled-components';

 function generateFontStylesheet(fontFamily,url) {
  console.log('called')
  const fontStylesheet = document.createElement('style');
  //const url = 'https://api-na1.hubspotqa.com/_hcms/googlefonts/fonts/Noto_Sans/200';
  //const url = 'https://cdn1.hubspot.net/googlefonts/fonts/Noto_Sans/regular';
  fontStylesheet.textContent = `@font-face {
        font-family: ${fontFamily};
        src: url("${url}.woff2") format("woff2"), url("${url}.woff") format("woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }`
      document.head.appendChild(fontStylesheet);
}

function App() {

  useEffect(() => {
generateFontStylesheet('MontSerrat','https://cdn1.hubspot.net/googlefonts/fonts/Montserrat/regular' );
 generateFontStylesheet('Noto_Sans','https://api-na1.hubspotqa.com/_hcms/googlefonts/Noto_Sans/regular' );
 generateFontStylesheet('Noto_Sans','https://api.hubapi.com/_hcms/googlefonts/Noto_Sans/regular' );
  },[])




  return (
    <div className="App">
     <h2 >Default Font!!</h2>
     <h2 style={{fontFamily: 'Montserrat'}}>Montserrat!!</h2>
     <h2 style={{fontFamily: 'Noto_Sans'}}>Noto Sans(Doesn't apply)!!</h2>

    </div>
  );
}

export default App;
