import React from 'react';
import ReactJson from 'react-json-view';

export default class Results extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <section>
                      <ReactJson src={this.props.headers} />
                    </section>   
            </React.Fragment>

        )
    }
}
