import './App.scss';
import React from 'react';
import Header from './header';
import Form from './form';
import Results from './results';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import History from './history';
import Help from './help';
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
    console.log('from app results',this.state.results);
    console.log('from app',this.state.headers);
  }

 


  render(){
    console.log('inside render',this.state);
  return (
    
      <Router>

    <React.Fragment>
      <Header/>
        <Switch>
      <Route exact path="/">

      <Form handler={this.handleForm} />
      <Results headers={this.state.headers} results={this.state.results}/>
      </Route>
            <Route exact path="/history" component={History} />
            <Route  exact path="/help" component={Help} />
        </Switch>
      <Footer/>
    </React.Fragment>
      </Router>
  );
}
}

export default App;
