import React from 'react';

export default function SinglePuppyDetailedView(props){
  const { selectedPuppy, setSelectedPuppy } = props;
  return (
      <div className ="single-puppy-detailed-view">
        <div className="header-info">
          <p className="pup-title">{selectedPuppy.name}</p>
          <p className="pup-number">{selectedPuppy.id}</p>
        </div>
        <p>Team:  </p>
        <p>Breed:{selectedPuppy.breed} </p>
        <img src="https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png" alt="photo of a puppy" />
        <button 
        onClick = {() => {
          console.log("going back");
          setSelectedPuppy( {});
        }}
        id="see-all">Back to all players</button>
      </div>

  );
}

