import React from 'react';


class LifecycleDemo extends React.Component {
  state = {counter: 0};

  constructor(props) {
    super(props);
    console.log('Constructing...');
    console.log('State already set to:', this.state);
  }

  componentWillMount() {
    console.log('About to mount...');
  }

  componentDidMount() {
    console.log('Mounted.');
  }
  componentWillReceiveProps(nextProps) {
    console.log('Current props:', this.props);
    console.log('Next props:', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Deciding to update');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('About to update...');
  }

  componentDidUpdate() {
    console.log('Updated.');
  }

  componentWillUnmount() {
    console.log('Goodbye cruel world.');
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1  
      });
  };

  render() {
    console.log('Rendering...');
    return (
      <div>
        <span>Counter: {this.state.counter}</span>
        <button onClick={this.handleClick}>
          Click to increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
/*
LIFE CYCLE METHODS : 

Mounting : These methods are called only once, when the component first mounts 
1) Constructor: This is the first method called when the component is created, state is initialised
2) ComponentWillMount : Called before the component is rendered
3) Render: Render method is called 
4) ComponentDidMount: Called after the first render [ AJAX requests can happen here to fetch data and send]

Updating: called Before and after each render, but none is called during the initial render
1) ComponentWillReceiveProps (nextProps) : old props and still available, this.state can be used if required
2) ShouldComponentUpdate (nextprops, nextstate): By default the return type is TRUE is false, the render will not happen and all the lifecycles and terminated,
3) ComponentWillUpdate (nextprops, nextstate) : u cannot use this.setstate here
4) ComponentDidUpdate : render is done, use this method to update on the DOM 

Unmounting: Component about unmount
1) Item is removed
2) Navigated to other tab etc.........
3) Invalidate any timers created clearInterval(), clearTimeout(), removeEventListners().........
*/