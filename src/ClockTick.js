function tick()
{
const clock= (
<div>
the time now is {new Date().toString()}
</div>
);
ReactDOM.render(clock,node);
}
setInterval(tick,1000);