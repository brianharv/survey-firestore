import React from 'react';
// import PropTypes from 'prop-types';
import Survey from './Survey';
// import { useSelector } from 'react-redux';
// import { useFirestoreConnect , isLoaded, isEmpty } from 'react-redux-firebase';

const masterSurveyList = {
  1: {
    prompt: 'Choose your age bracket?',
    choices: ['18-24 ', '25-35 ', '36-50 ', '51+'],
    results: [ 9, 12, 7, 3],
    responseId: 1
  },
  2: {
    prompt: 'What\'s Your Favorite Food?',
    choices: ['Burger ', 'Pizza ', 'Cake ', 'Tacos '],
    results: [12, 14, 7, 10],
    responseId: 1
  },
  3: {
    prompt: 'Favorite Super Hero',
    choices: ['Captain America ', 'Thor ', 'Batman ','Superman'],
    results: [10, 11, 8, 10], 
    responseId: 3
  }
}

function SurveyList() {
  return (
    <React.Fragment>
      <hr/>
      {Object.values(masterSurveyList).map((survey, index) => 
        <Survey prompt={survey.prompt}
          choices={survey.choices}
          results={survey.results}
          responseId={survey.responseId}
          id={survey.id}
          key={index}/>
      )}
    </React.Fragment>
  )
}

export default SurveyList;