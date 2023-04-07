// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2303-ftb-et-web-ft';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}/players`);
        const playersLst = await response.json();

        return playersLst.data.players;
    }
    catch (error) {
        console.error(error);
    }
};

export const fetchSinglePlayer = async (playerId) => {

    try {
        const response = await fetch(`${APIURL}/players/${playerId}`);
        const singlePlayer = await response.json();
        return singlePlayer.data.player;
    }
    catch (error) {
        console.error(error);
    }
};

export const addNewPlayer = async (playerObj) => {

    try {
        const response = await fetch(`${APIURL}/players/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(playerObj)
        })
        const result = await response.json();
    }
    catch (error) {
        console.error(error);
    }


};

export const removePlayer = async (playerId) => {

    try {
        const response = await fetch(`${APIURL}/players/${playerId}`,
            {
                method: 'DELETE',
            }
        );
        const result = await response.json();
        console.log(result);
    }
    catch (err) {
        console.error(err);
    }

};
