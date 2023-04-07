
import React, {useState,useEffect} from 'react';
import PuppyInputForm from './PuppyInputForm';
import AllPuppiesView from './AllPuppiesView';
import SinglePuppyDetailedView from './SinglePuppyDetailedView';
import { fetchAllPlayers } from '../ajaxHelpers';


let fakePuppies = [
    {
        "id": 3127,
        "name": "joe",
        "breed": "pug",
        "status": "bench",
        "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
        "createdAt": "2023-04-04T01:17:27.548Z",
        "updatedAt": "2023-04-04T01:17:27.548Z",
        "teamId": null,
        "cohortId": 198
        },
        {
        "id": 3128,
        "name": "John",
        "breed": "pug",
        "status": "bench",
        "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
        "createdAt": "2023-04-04T01:18:09.584Z",
        "updatedAt": "2023-04-04T01:18:09.584Z",
        "teamId": null,
        "cohortId": 198
        },
        {
        "id": 3129,
        "name": "Grant",
        "breed": "Pug",
        "status": "bench",
        "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
        "createdAt": "2023-04-04T01:18:18.403Z",
        "updatedAt": "2023-04-04T01:18:18.403Z",
        "teamId": null,
        "cohortId": 198
        },
        {
        "id": 3131,
        "name": "crumpet ",
        "breed": "American Staffordshire Terrier",
        "status": "bench",
        "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
        "createdAt": "2023-04-04T12:55:24.170Z",
        "updatedAt": "2023-04-04T12:55:24.170Z",
        "teamId": null,
        "cohortId": 198
        },
        {
        "id": 3132,
        "name": "Daphne",
        "breed": "German Shepherd",
        "status": "bench",
        "imageUrl": "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
        "createdAt": "2023-04-04T12:55:55.752Z",
        "updatedAt": "2023-04-04T12:55:55.752Z",
        "teamId": null,
        "cohortId": 198
        }  
  ];

const App = () => {

    const [puppies, setPuppies] =useState([]);
   const [selectedPuppy, setSelectedPuppy] = useState({});
  

    useEffect(() => {
        const getPuppies = async () => {
          try {
            let allPuppies = await fetchAllPlayers();
           
             setPuppies(allPuppies);
          } catch (error) {
            console.error(error);
          }
        };
        getPuppies();
      }, []);

  // useEffect(() => {
  //   setPuppies(fakePuppies);
  // }, []);

  console.log('selected puppy:',selectedPuppy);
    return (
        <>
            <PuppyInputForm puppies = {puppies} setPuppies = {setPuppies}/>
            {selectedPuppy.id ? <SinglePuppyDetailedView selectedPuppy = {selectedPuppy} setSelectedPuppy ={setSelectedPuppy}/>  : <AllPuppiesView puppies ={puppies} selectedPuppy ={selectedPuppy} setSelectedPuppy ={setSelectedPuppy} setPuppies ={setPuppies}/>}
            
        </>
    );
}

export default  App;