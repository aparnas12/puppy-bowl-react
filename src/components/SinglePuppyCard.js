import React from 'react';
import { fetchAllPlayers, removePlayer} from '../ajaxHelpers';


export default function SinglePuppyCard(props) {
 
 const { pup, selectedPuppy, setSelectedPuppy,setPuppies,puppies } = props;


  return (
    <>
    <div className = "single-puppy-card">
       <div className="header-info">
            <p className="pup-title">{pup.name}</p>
            <p className="pup-number">{pup.id}</p>
          </div>
          <img src="https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png" alt="photo of the puppy" />
          <button 
            onClick = {()=>{
              setSelectedPuppy(pup);
            }}
          
          className="detail-button"> See Details</button>
          <button  //remove puppy
           onClick={async () => {
            setSelectedPuppy(pup);
            await removePlayer(pup.id);
            setSelectedPuppy({});
            let allPups = await fetchAllPlayers();
            setPuppies(allPups);
          }}
          className="remove-button"> Remove from Roster</button>
    </div>
    
    </>
  );

}

