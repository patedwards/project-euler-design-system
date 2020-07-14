import React, { Component } from 'react';

export const TheContext = React.createContext();

export class TheContextProvider extends Component {
  state = {
      foo: "bar",
      setFoo: newFoo => {
        this.setState({
          foo: newFoo,
      });
    }
  }

  render() {
    return <TheContext.Provider
        value={this.state}
      >      
        {this.props.children}
      </TheContext.Provider>
  }
}

export const TheContextConsumer = TheContext.Consumer;