import React, { Component } from 'react'
import {encode as base64_encode} from 'base-64';
import './SearchBar.css'

import SearchBarComponent from './SearchBarComponent'


class SearchBarContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            data: [
                {
                    loading: false,
                    id: "",
                    files: {
                        filename: "",
                        language: "",
                        raw_url: "",
                        size: "",
                        type: "",
                    },
                    owner: {
                        id: "",
                        login: "",
                        avatar_url: ""
                    }
                }
            ]
        }
    }

    
    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSearchClick = () => {
        // console.log(this.state.username)

        //Empty Lister if it has list items
        //Reload Lister with new items if empty then show text "No gist is available for this user. "


        this.setState({ loading: true })
        //let headers = new Headers();
        //headers.set('Authorization', 'Basic c3JlaG1hbmFsaTpSZWhtYW5zaGFoIShnaXQpMTIz');
        fetch('https://api.github.com/users/'+ this.state.username +'/gists'/*, {headers}*/)
            .then(response => response.json())
            .then(gists => {
                console.log("From Search", gists);
                this.props.handleData(gists);
                gists.forEach(element => {
                    
                    
                    //obj.data.files.filename = element.file[0].filename
                });
                // gists.map(gist=>{
                //     this.setState({
                //         data: {
                //             loading: false,
                //             id: gist.id,
                //             files:{
                //                 filename: gist.files.filename,
                //                 language: gist.files.language,
                //                 raw_url: gist.files.raw_url,
                //                 size: gist.files.size,
                //                 type: gist.files.type,
                //             },
                //             owner:{
                //                 id:"",
                //                 login:"",
                //                 avatar_url:""
                //             }
                //         }
                //     })
                // })
            })
    }

    


    render() {
        return (
            <SearchBarComponent
                username={this.state.username}
                onChange={this.handleChange}
                handleClick={this.handleSearchClick}
            />
        )
    }
}

export default SearchBarContainer




