import React from 'react';
import { removePlayer} from '../ajaxHelpers';


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
              console.log('insdie single puppy card:',pup);
              setSelectedPuppy(pup);
            }}
          
          className="detail-button"> See Details</button>
          <button  //remove puppy
           onClick={async () => {
            
            await removePlayer(pup.id);
            setSelectedPuppy({});
            puppies.filter((thisPup) => pup.id !== thisPup.id)
            setPuppies([...puppies] )
          }}
          className="remove-button"> Remove from Roster</button>
    </div>
    
    </>
  );

}

//

