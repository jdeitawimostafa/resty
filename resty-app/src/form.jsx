import React from 'react';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            method:'',
            output:'',
    }
}

    handleInput = e => {
        let input = e.target.value;
        console.log('input',input)
        this.setState({output:input});
        console.log(input);
      }

      handleRadio = e => {
        let radioBtn = e.target.value;
        console.log('radio',radioBtn)
        this.setState({method:radioBtn});
      }
  
      handleClick = async e => {
          e.preventDefault();
          let raw = await fetch(this.state.output);
          const Response =await raw.json();
          console.log('ssssssssssssssss',raw);
          console.log('tttttttttttttttttttttttttttttt',Response);
          let headers ={};
          raw.headers.forEach((val,idx)=>{
            headers[idx]=val;
          // console.log(headers);
          return headers;
          })
          this.props.handler({headers,Response});
          console.log('38',Response);
      }

      render(){
        return(
            <div className="container">
                <div className="inputDiv">
                <label htmlFor="">
                    URL: 
                <input type="text" value={this.state.output} onChange={this.handleInput} />
                </label>
                <button onClick={this.handleClick} >GO!</button>
                </div>
                <div className="radioBtns">
                <input checked="checked" onChange={this.handleRadio} name="method" type="radio" value="GET"/>GET
                <input onChange={this.handleRadio} name="method" type="radio" value="POST"/>POST
                <input onChange={this.handleRadio} name="method" type="radio" value="PUT"/>PUT
                <input onChange={this.handleRadio} name="method" type="radio" value="DELETE"/>DELETE
                </div>
                <section id="temp">
                    <h3>{this.state.method}</h3>
                    <h3>{this.state.output}</h3>
                </section>
            </div>
        );
        }
}
