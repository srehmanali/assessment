import './SearchBar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function SearchBarComponent(props){
    
    return(
        <div className="wrapper">
            <input 
                type="text"
                name="username"
                value={props.username}
                onChange={props.onChange}
                className="input" 
                placeholder="Please enter username..." 
                onKeyPress={(e) => e.key === 'Enter' && props.handleClick}
            />
            <button 
                className="searchbtn" 
                onClick={props.handleClick}
            >
                <FontAwesomeIcon className="fas" icon={faSearch} size="lg"/>
            </button>
        </div>
    )
}

export default SearchBarComponent




