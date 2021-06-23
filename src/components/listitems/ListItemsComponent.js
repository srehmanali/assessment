import { encode as base64_encode } from 'base-64';
import { useEffect, useState } from 'react';
import './ListItems.css'

function ListItemsComponent(props) {
    let [forks, setForks] = useState([]);
    useEffect(() => {
        fetch(`https://api.github.com/gists/${props.gist.id}/forks`/*, {headers}*/)
            .then(response => response.json())
            .then(data => {
                console.log('forks', data);
                let fs = [];
                for (let i = 0; i < 3; i++) {
                    if (data[i]) {
                        console.log('fork added');
                        fs.push(data[i]);
                    }
                }
                setForks(fs);
            });
    }, [])
    //let headers = new Headers();
    //headers.append('Authorization', 'Basic ' + base64_encode('srehmanali' + ":" + 'Rehmanshah!(git)123'));

    return (
        <li>
            <div className="grid_wrapper">
                <div className="box">Gist URL: {props.gist.url}</div>
                <div className="box">FileType: {Object.entries(props.gist.files)[0][1].type}</div>
                <div className="box grid_wrapper_fork flex_wrapper">
                    Fork by:
                    {
                        forks.map((fork,index) => { return (<div className="fork_box ">{index+1}. {fork.owner.login}</div>) })
                    }
                </div>
            </div>
        </li>
    )
}

export default ListItemsComponent