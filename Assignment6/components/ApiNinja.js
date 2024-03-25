const _API_KEY = "1CkiVf3fBwNmccGFJU+NTg==FylJOQh4xNWvJXP9";

/* How many jokes to request from the API.  
   At the moment, we only care about receiving one (1) joke at a time. */
const _FETCH_LIMIT = 1;

/* You do not need to change this code below */
const _BASE_URL = `https://api.api-ninjas.com/v1/dadjokes?limit=${_FETCH_LIMIT}`;

/* Do not change this code below. */
const requestHeader = new Headers();
requestHeader.set("X-Api-Key", _API_KEY);
requestHeader.set("Content-Type", "application/json");

/**
 * A basic healthcheck function.
 * 
 * @returns {string} Only returns "pong"
 * @author Andrew Sheehan <asheehan@bu.edu>
 * @license "MIT"
 */
export function ping() {
    return "pong";
}

/**
 * Retrieves one random 'Dad' joke from api-ninjas.com.
 * 
 * <strong>Notes</strong>
 * <div>The _FETCH_LIMIT has to be set at one.   If you set it to anything else, it 
 *    will be ignored by the fetch() below.  (It's hard-coded to only look at [0].</div>
 *
 * @param {string} targetId The ID of an HTML element to place the joke.
 * @author Andrew Sheehan <asheehan@bu.edu>
 * @license "MIT"
 */


export function getDadJoke(targetId) {
    //use promise
    return new Promise((resolve, reject) => {
        fetch(_BASE_URL, {
            url: _BASE_URL,
            headers: requestHeader
        }).then(response => {
            return response.json();
        }).then(data => {
            document.querySelector(`#${targetId}`).innerHTML = data[0].joke;
            resolve(data[0].joke); 
            console.error(error.message);
            reject(error); 
        });
    });
}


// get the total words
function getTotalWords(joke) {
    return new Promise((resolve, reject) => {
        // Split the joke string into words and count them
        const words = joke.split(/\s+/);
        const totalWords = words.length;
        if (totalWords >= 0) {
            resolve(totalWords); // Resolve with the total number of words
        } else {
            reject('Error calculating total words');
        }
    });
}

//get total characters
function getTotalCharacters(joke) {
    return new Promise((resolve, reject) => {
        const totalCharacters = joke.length;
        if (totalCharacters >= 0) {
            resolve(totalCharacters); // Resolve with the total number of characters
        } else {
            reject('Error calculating total characters');
        }
    });
}

export function displayMetrics(targetId, joke) {
    //let every time refresh there is nothing
    document.getElementById(targetId).innerHTML = '';
    // Call the functions to get total words and total characters
    getTotalWords(joke)
        .then(totalWords => {
            const wordsLi = document.createElement('li');
            wordsLi.textContent = `Total Words: ${totalWords}`;
            document.getElementById(targetId).appendChild(wordsLi);
        })
        .catch(error => {
            console.error(error);
        });

    getTotalCharacters(joke)
        .then(totalCharacters => {
            const charactersLi = document.createElement('li');
            charactersLi.textContent = `Total Characters: ${totalCharacters}`;
            document.getElementById(targetId).appendChild(charactersLi);
        })
        .catch(error => {
            console.error(error);
        });
}
