import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
		});
	}
    render () {
        if (this.state.isToggleOn) {
            return (
            <div>               
            <button onClick={this.handleClick}>Click me!</button>
            <h1>
                Do It!
            </h1>
            </div>);
        }
        return (
            <div>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Click Me!' : 'Click me AGAIN!'}
            </button>
            <h1>
                I dare you!
            </h1>
            </div>
        );
    }
}
  
export default Toggle