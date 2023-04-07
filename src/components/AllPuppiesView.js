
import SinglePuppyCard from './SinglePuppyCard';
import React, { useState } from 'react';
import SearchBar from './SearchBar';


export default function AllPuppiesView(props) {

    const { puppies, setPuppies, selectedPuppy, setSelectedPuppy } = props;
    //create a useState to get a filtered [] of puppies based on search bar
    const [returnedPuppyList, setReturnedPuppyList] = useState([]);
    
    //if user has typed a search criteria then use the returnedPuppyList else use the original puppies list 
    return (
        <>  <div>
            <SearchBar puppies={puppies} setReturnedPuppyList={setReturnedPuppyList} />
        </div>
            { 
                returnedPuppyList.length ?
                <div id='all-puppies-container'>

                    {returnedPuppyList.map((pup) => {
                        
                        return (<>
                            <SinglePuppyCard key={pup.id} pup={pup} selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} puppies={puppies} setPuppies={setPuppies} />
                        </>

                        );
                    })}

                </div>
                :
                <div id='all-puppies-container'>

                    {puppies.map((pup) => {

                        return (<>
                            <SinglePuppyCard key={pup.id} pup={pup} selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} puppies={puppies} setPuppies={setPuppies} />
                        </>

                        );
                    })}

                </div>
            }


        </>
    )

}

