import React from 'react';
import Card from './Card'

class CardList extends React.Component{

    render(){

        // console.log(this.props.data)

        const data = this.props.data

        return(
            <div className='card-list'>
                {
                    data.map(runner => (
                        <Card
                            id={runner.id}
                            name={runner.name}
                            country={runner.country}
                            search={runner.searches}
                        />
                    ))
                }
            </div>
        )
    }

}

export default CardList;