import React,{ useState,useEffect} from 'react';

import Editor from './editor.js';
import logo from './logo.svg';
import './App.css';



function App() {

const [html,setHtml] = useState('')
const [css,setCss] = useState('')
const [js,setJs] = useState('')
const [srcDoc,setSrcDoc] = useState('')

useEffect(() => {

  const timeout = setTimeout(() =>{
  
  setSrcDoc(
        `  <html>
    
     <body> ${html} </body>
     <style> ${css} </style>
     <script> ${js} </script>

  </html>
  
  `
    )

  },250
    )


  return () => clearTimeout(timeout)

},[html,css,js]

  )


  return (

   <>

      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} /*HTML code editor*//>  
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}/*CSS code editor*//>
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs}/*JS code editor*//>
      </div>   


    <div className="pane">
        <iframe
          srcDoc={srcDoc} 
          title="output" /*Title option*/
          sandbox="allow-scripts" /*sandbox option*/
          frameBorders="0"   /*frameBorder option*/
          width="100%"       /*width-height option*/
          height="100%"
  
        ></iframe>
      </div>

  </> 

    
  );
}





export default App;
