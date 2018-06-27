import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

    // const store = createStore(todoApp, {})

    render() {
        return {

        }
    }
}

const mapStateToProps = state => {
    return {
      todo: state
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      destroyTodo: () =>
        dispatch({
          type: 'DESTROY_TODO'
        })
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)