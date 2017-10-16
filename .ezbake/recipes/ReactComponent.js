module.exports = {
  description: 'A sample React file',
  destination: '/components/',
  source: `
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
  
  function mapStateToProps(state) { // ch-ch-change
    const { user, routing } = state;
    return {
      user,
      routing
    };
  }
  
  export default connect(mapStateToProps)(<%= componentName %>);  
  `,
  ingredients: [
    {
      type: "input",
      name: "fileName",
      message: "What filename would you like to assign this component?",
      default: "MyComponent.js"
    },
    {
      type: "input",
      name: "componentName",
      message: "What is the name of this React component?",
      default: "MyComponent"
    }
  ],
  icing: [
    {
      description: 'Calls out to Facebook',
      cmd: ['node', 'web_api_icing.js']
    },
    {
      description: 'Says a job is done',
      cmd: ['echo', `"job's done"`]
    }
  ]
}