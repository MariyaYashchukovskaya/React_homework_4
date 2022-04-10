import { Component } from "react";
import axios from "axios";

class ExampleCompanent extends Component{
constructor(props){
    super(props)
    this.state={
        message:''
    }
}


loadMessage =async()=>{
    const response= await axios.get('https://json.versant.digital/.netlify/functions/fack-api/message')
 this.setState({
     message
 })
}
    
render(){
    return <h2>{this.state.messages}</h2>
}
}

export {ExampleCompanent}