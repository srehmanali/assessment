import React, {Component} from 'react'

import ListItemsComponent from './ListItemsComponent'

class ListItemsContainer extends Component{
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        console.log("from ListItemContainer", this.props.gist);
    }
    render(){
        return <ListItemsComponent gist={this.props.gist} />
    }
}

export default ListItemsContainer