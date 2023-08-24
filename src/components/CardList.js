import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	// when doing a loop you must give it a unique key
	return (
		<div> 
      		{
		      	robots.map((user, i) => {
					return (
						<Card 
							key = {i} 
							id={robots[i].id} 
							name={robots[i].name} 
							username={robots[i].username}
						/>
					);
				})
      		}
    	</div>
	);
}

export default CardList; 