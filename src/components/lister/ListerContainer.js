import React, {Component} from 'react'
import './Lister.css'

import ListerComponent from './ListerComponent'


class ListerContainer extends Component{
    constructor(props) {
        super(props);

    }
    componentDidUpdate() {
        console.log("From Lister Container", this.props.gists);
    }
    render(){
        return(
           <ListerComponent gists={this.props.gists} />
        )
    }
}

export default ListerContainer