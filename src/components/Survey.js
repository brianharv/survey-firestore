import React from 'react';

function Survey(props) {
  return(
    <React.Fragment>
      <hr/>
      <h3>This is a survey. There will be many of us.</h3>
      <h4>{props.prompt}</h4>
      <h5>{props.choices}</h5>
      <h6>{props.results}</h6>
    </React.Fragment>
  )
}

export default Survey;