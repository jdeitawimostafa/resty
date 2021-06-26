import React from 'react';
const superagent = require('superagent');

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            method:'',
            output:'',
            body:'',
            isFetching:false,
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
          this.setState({isFetching:true});
          try{
          let Response = await superagent[this.state.method](this.state.output).send(this.state.body).set('Content-Type','application/json');
          const results = Response.body;
          console.log('response from line 34',Response);
          let headers = Response.headers;
          this.props.handler({headers,results});
          console.log('38',headers);
          console.log('results from res.body',results);

          console.log('line 40 from form.jsx',this.state.body);

        //    const {method,output} = this.state;
        //    localStorage.setItem('method',method);
        //    localStorage.setItem('output',output);
        const historyArr = JSON.parse(localStorage.getItem('history'));
        const { output, body,method } = this.state;
        const obj = {output, body,method};
        if(!historyArr){
          localStorage.setItem('history',JSON.stringify([obj]));
        }
       else {
         let sotredData = historyArr.find(item => {
             
           return ((item.output === output) && (item.body === body) && (item.method === method));
         });
         if(!sotredData){ 
           historyArr.push(obj);
           localStorage.setItem('history',JSON.stringify(historyArr));
         }
       }
       } catch(error){
         console.error(error)
       }
         
      }

      handleText = e => {
          let bodyText = e.target.value;
          this.setState({body:bodyText});
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
                <input checked="checked" onChange={this.handleRadio} name="method" type="radio" value="get"/>GET
                <input onChange={this.handleRadio} name="method" type="radio" value="post"/>POST
                <input onChange={this.handleRadio} name="method" type="radio" value="put"/>PUT
                <input onChange={this.handleRadio} name="method" type="radio" value="delete"/>DELETE
                </div>
                <section id="temp">
                    <h3>{this.state.method}</h3>
                    <h3>{this.state.output}</h3>
                </section>

                <textarea onChange={this.handleText} name="body" id="body" cols="100" rows="4"></textarea>
            </div>
        );
        }
}

