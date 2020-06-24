import React from 'react';
import './style.css';

function SavedContainer({children}) {
    
    return(
        <div className="savedContainer">
            {children}
            <h4 className="savedContainerTitle">Saved Books</h4>
        </div>
    )
}

export default SavedContainer;