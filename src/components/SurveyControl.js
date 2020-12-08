import React from 'react';
import SurveyList from './SurveyList';
import NewSurveyForm from './NewSurveyForm';


class SurveyControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    }
  }  

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage}));
    }


  render () {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewSurveyForm />
      buttonText = "Return to Survey List";
    } else {
      currentlyVisibleState = <SurveyList />
      buttonText = "Create New Survey";
    }
    return (
      <React.Fragment>
       {currentlyVisibleState}
       <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
    
export default SurveyControl;