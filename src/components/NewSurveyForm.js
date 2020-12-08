import React, { useState } from 'react';
import PropTypes from 'prop-types';
function NewSurveyForm(props) {

  const [inputList, setInputList] = useState([{ question: '', answer: '' }])

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

  function addSurveyToList(event) {
    event.preventDefault();
    props.onSubmitClick();
  }

  return (
    <React.Fragment>
      <form>
        <label name='prompt'>Survey Title</label>
        <input
          type='text'
          name='prompt'
          placeholder=' Survey category'
          required />

        {inputList.map((field, index) => {
          return (
            <div className='newField'>
              <label name='question'>Question</label>
              <input
                type='text'
                name='question'
                placeholder=' Write a question'
                value={field.question}
                required
                onChange={event => handleInputChange(event, index)} />
              <label name='answer'>Answer</label>
              <input
                type='text'
                name='answer'
                placeholder=' Answer field'
                value={field.answer}
                required
                onChange={event => handleInputChange(event, index)} />

              <div className="buttonBox">
                {inputList.length > 1 &&
                  <button type='button' onClick={() => handleRemoveClick(index)}>Remove Question</button>}
                {inputList.length - 1 <= 10 &&
                  <button type='button' onClick={() => handleAddClick(index)}>Add Question </button>}
              </div>
            </div>
          );
        })}
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}

NewSurveyForm.propTypes = {
  onSubmitClick: PropTypes.func
}

export default NewSurveyForm;