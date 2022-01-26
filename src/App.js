import React,{ useState,useEffect} from 'react';
// if want to use JSX
import Editor from './editor.js';
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
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}    /*CSS code editor*//>
        <Editor language="javascript" displayName="JS" value={js} onChange={setJs}/*JS code editor*//>
      </div>   


    <div className="pane"> 
        <iframe     
          srcDoc={srcDoc}                                                                          /* Specifies the HTML content of the page to show in the <iframe>*/
          title="output" 
          sandbox="allow-scripts" 
          frameBorders="0"  
          width="100%"       
          height="100%"
  
        ></iframe>
    </div>

  </> 

    
  );
}





export default App;
