
class Button extends React.Component {
	render() {
  	return(
  	<button onClick={this.props.incrementCounter}>
    	+1
    </button>
  	);
  }
}

const Result = (props) => {
	return (
  <div>...</div>
  );
};

class App extends React.Component {
	state = { counter: 5 };
  incrementCounter = () => {
  	this.setState((prevState) => {
    	return {
      	counter: this.state.counter + 1
      };
    })
  }
	render() {
  	return (
    	<div>
      	<Button onClickFunction={this.incrementCounter} />
        <Result />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);