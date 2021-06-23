import './Lister.css'

import ListItemsContainer from '../listitems/ListItemsContainer'


function ListerComponent(props) {
    console.log("From Lister Component", props.gists);
    return (
        <div className="lister_wrapper">
            <div className="list_wrap">
                <ul>
                    {
                        props.gists.map(gist => {
                            return (<ListItemsContainer gist={gist} />)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ListerComponent