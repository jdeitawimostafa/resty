import './App.scss';
import React from 'react';
import Header from './header';
import Form from './form';
import Results from './results';
import History from './history';
import Footer from './footer';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count:0,
      headers:[],
      results:[]
    }
  }

  handleForm = (headers,results) => {
    this.setState({headers:headers,results:headers.results});
    console.log('afte setstate',this.state);
    console.log('from app',this.state.results);
    console.log('from app',this.state.headers);
  }

 


  render(){
    console.log('inside render',this.state);
  return (
    <React.Fragment>
      <Header/>
      <Form handler={this.handleForm} />
      <Results headers={this.state.headers} results={this.state.results}/>
      <History/>
      <Footer/>
    </React.Fragment>
  );
}
}

export default App;
