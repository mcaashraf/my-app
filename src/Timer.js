
import React from 'react';

export default class Clock extends React.Component
{
constructor(){
super();
this.state={timer:new Date(),True:true,False:false}}

tick()
{
this.setState({timer:new Date()});
}


render() {
return this.state.True && (
<div>
<h1> {this.state.timer.toLocaleTimeString()}</h1>

{this.state.True ? <h1>True</h1> : "False"}
</div>
);

}
}

