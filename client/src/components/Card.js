import React from 'react';

class Card extends React.Component{

    render(){

        const woman = this.props

        return(
            <div key={woman.id} className='card'>
                <h3>{woman.name}</h3>
                <hr/>
                <h4>{woman.country}</h4>
                <h4>{woman.search}</h4>
            </div>
        )
    }
}

export default Card;