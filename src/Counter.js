import React from 'react';

export default class Counter extends React.Component{
constructor()
{
super();
this.state={init:1}
}
inc(){this.setState({init:this.state.init + 1})}
render() {
return (<div><h1> Counter value {this.state.init}</h1>
<button onClick={() => this.inc()}> Increment </button>
</div>);}
}