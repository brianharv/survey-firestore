import React from 'react';
import SurveyControl from './SurveyControl';

function Body() {
  return (
    <React.Fragment>
      <h1 className='text-center'>Welcome to our Survey Center</h1>
      <h3 className='text-center'>This is the Body</h3>
      <SurveyControl/>
    </React.Fragment>
  )
}

export default Body;