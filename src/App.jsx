import React, {Component} from "react";
import Person from "./Person";

class App extends Component{

    state ={
        Person: [
            {name: 'opolo', age: 21},
            {name: 'mark', age: 2},
            {name: 'vitalis', age: 23}
            
        ],
        color:'managing state'
    }

    switchNameHandler = () =>{
        console.log('was clicked');
        this.setState({
           Person: [
            {name: 'quirilus', age: 30},
            {name: 'Scoat', age: 7},
            {name: 'Ochieng', age: 25}
           ] 
        })
    }

    render(){
        return(
<div style={{textAlign: 'center'}} >
    <h1 style={{color: 'red'}}> I am a react App, kopolo.Coms</h1>

    <p><b>This is really working!</b></p>
        <Person name = {this.state.Person[0].name} 
        age= {this.state.Person[0].age}>hobby: coding</Person>
        <Person name = {this.state.Person[1].name}
        age= {this.state.Person[1].age}>hobby: programming</Person>
        <Person name = {this.state.Person[2].name} 
        age= {this.state.Person[2].age}>hobby: UI/UX Designer</Person>


    <p>{this.state.color}</p>
    <button onClick={this.switchNameHandler} style={{color:'blue'}}>Switch Name:</button>
</div>
        );
    } 
}
export default App;