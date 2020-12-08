import React from 'react';
import SurveyList from './SurveyList';


class SurveyControl extends React.Component {

  constructor(props) {
    super(props);
  }  

  render () {

    return (
      <React.Fragment>
        <h1>SurveyControl</h1>
          <SurveyList/>
      </React.Fragment>
    );
  }
}
    
export default SurveyControl;