import React, { Component } from 'react'

import './SearchBar.css'

import SearchBarComponent from './SearchBarComponent'


class SearchBarContainer extends Component {
    state = {
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
    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSearchClick = () => {
        // console.log(this.state.username)

        //Empty Lister if it has list items
        //Reload Lister with new items if empty then show text "No gist is available for this user. "


        this.setState({ loading: true })
        const username = this.state.username
        fetch('https://api.github.com/users/'+username+'/gists')
            .then(response => response.json())
            .then(gists => {
                const obj = {
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
                gists.forEach(element => {
                    
                console.log(element.files[0])
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




