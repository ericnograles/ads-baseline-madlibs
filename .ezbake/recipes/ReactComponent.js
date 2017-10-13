module.exports = {
  destination: '/components/',
  recipe: `
  import React from 'react';
  import { connect } from 'react-redux';
  import { Redirect, Route } from 'react-router-dom';
  
  const LOGIN_PATH = '/auth/login';
  
  class <%= componentName %> extends React.Component {
    render() {
      const { component, user } = this.props;
      const { isPrivate } = component;
      const isAuthenticated = user.userEmail; // The existence of this in redux means that we were able to get the user's info
  
      if (!isPrivate) {
        return <Route {...props} component={component} />;
      } else {
        if (!isAuthenticated) {
          return <Redirect to={LOGIN_PATH} />;
        }
        return <Route {...props} component={component} />;
      }
    }
  }
  
  function mapStateToProps(state) {
    const { user, routing } = state;
    return {
      user,
      routing
    };
  }
  
  export default connect(mapStateToProps)(<%= componentName %>);  
  `,
  questions: [
    {
      "type": "input",
      "name": "fileName",
      "message": "What would you like this React Component to be named?",
      "default": "MyComponent.js"
    },
    {
      "type": "input",
      "name": "componentName",
      "message": "What is the name of the component you would like to create?",
      "default": "MyComponent"
    }
  ]
}