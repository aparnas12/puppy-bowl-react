import React, { useState } from 'react';
import SinglePuppyCard from './SinglePuppyCard';





export default function AllPuppiesView(props) {
   
   const {puppies,selectedPuppy,setSelectedPuppy} = props;

    return (
        <>
            <div id='all-puppies-container'>
            {puppies.map((pup) => {

                return (<>
                         <SinglePuppyCard key = {pup.id} pup = {pup} selectedPuppy = {selectedPuppy} setSelectedPuppy ={setSelectedPuppy}/>
                        </>

                );
            })}
           
        </div>
        </>
    )

}


