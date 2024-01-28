import { useState } from 'react'
import './App.css'

function App() {
  const customDisct = {

    teh: "the",
  
    wrok: "work",
  
    fot: "for",
  
    exampl: "example"
  
  };
  
  const [text,setText]= useState("");
  const [suggestedText,setSuggestedText] = useState("");
  const handleInputChange =(e)=>{
    const text = e.target.value;
    setText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word)=>{
      const correctedWord = customDisct[word.toLowerCase()];
      return correctedWord || word ;
    });
    const firstCorrection = correctedWords.find((word,idx)=>word!=words[idx]);
    setSuggestedText(firstCorrection||"");

  }

  return (
    <>
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea value={text} onChange={handleInputChange} placeholder='Enter text ...' rows={5} cols={20}/>
        {suggestedText && <p>Did you mean: <strong>{suggestedText}?</strong></p>}

        
      </div>
    </>
  )
}

export default App
