import React from 'react';
import ListItem from './listItem';

const List = ({ birdsData, counter }) => {

    return (birdsData.map((el, i) => {
        return <div className="listItem" key={i}>
            <ListItem birdsData={el} counter={counter} index={i} />
        </div>
    }))

}

export default List;