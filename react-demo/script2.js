

class Button extends React.Component {
	// constructor(props){
	// super(props);
	// this.state = { counter: 1};
	// }
  state = { counter: 0 };
  handleClick = () => {
  
  // this === component instance
	// long way of writing - using prevState to avoid race conditions because setState is an async function
	// this.setState((prevState) => {
	// 		return {
	// counter: prevState.counter +1
	// }
	// 	})
  
    this.setState((prevState) => ({
      counter: prevState.counter +1
    }));
  
  };
  
	render() {
  	return (
    
      // 3 alternatives for event handlers
      // 1 -  actual JS function
      //     	<button onClick={doSomething}>
      //       	{this.state.counter}
      //       </button>
      
      // 2 - inline function
    	// <button onClick={() => doSomething()}>
    	// {this.state.counter}
    	// </button>
      
      
      // 3 - class function
      <button onClick={this.handleClick}>
      	{this.state.counter}
      </button>
    )
  }
}

ReactDOM.render(<Button />, mountNode);
