import React,{Component} from "react";

class Hello extends Component{
    state={
        counter: 10,
    };
  render(){
    return(
        <>
            <h1>{this.state.counter}</h1>
            <button onClick={()=>
                (this.setState({counter:this.state.counter + 10 }))}>Increment</button>
            <button onClick={()=>
                (this.setState({counter:this.state.counter - 10 }))}>Decrement</button>
        </>
    );
  }
}
export default Hello;