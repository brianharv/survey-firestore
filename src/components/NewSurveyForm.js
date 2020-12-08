import React, { useState } from 'react';

function NewSurveyForm() {
  const [inputList, setInputList] = useState([{question: '', answer: ''}])

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
   
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
   
  const handleAddClick = () => {
    setInputList([...inputList, { question: "", answer: "" }]);
  };


  return(
    <React.Fragment>
      <form>
        <label name='prompt'>Survey Title</label>
        <input 
          type='text'
          name='prompt'
          value='' /> <br></br>
        <label name='question'>Question</label>
        <input 
          type='text'  
          name='question'
          value=''/> <br></br>

        {inputList.map((field, index) => {
          return (
            <div className='newField'>
            <label name='question'>Question</label>
            <input 
              type='text'  
              name='question'
              placeholder='write a question'
              value={field.question} 
              onChange={event => handleInputChange(event, index)} /> <br></br>
            <label name='answer'>Answer</label>
            <input 
              type='text'
              name='answer'
              placeholder='answer field'  
              value={field.answer} 
              onChange={event => handleInputChange(event, index)} />

          {inputList.length > 1 && 
            <button type='button' onClick={() => handleRemoveClick(index)}>Remove Question</button>}
          {inputList.length - 1 <= 10 && 
            <button type='button' onClick={() => handleAddClick(index)}>Add Question </button>} 
            </div>
          ); 
        })}  
      </form>
    </React.Fragment>
  )
}

export default NewSurveyForm;