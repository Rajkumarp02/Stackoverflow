import React,{useEffect} from 'react'
import Widget from './Widget'
import Tags from './Tags'
import './Rightside.css'
export default function RightSidebar() {

 /*  var g_gTranslateIsAdded = false;
  const googleTranslateElementInit = () =>{
    if (!g_gTranslateIsAdded) {
      g_gTranslateIsAdded = true;
          new window.google.translate.TranslateElement({pageLanguage: 'en',
    }, 'google_translate_element');
      }
    } */
  
   /*  useEffect(() => {
      var addScript = document.createElement("script");
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
     
         window.googleTranslateElementInit = googleTranslateElementInit;
      
    }, []); */

  return (
    <aside className='Right-side'> 
      
    <Widget/>
    <Tags/>
    </aside>
  )
}
