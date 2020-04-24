const charactersAPI = new APIHandler('http://localhost:8000');
const characterInfoCard = document.getElementsByClassName('character-info')[0]
const charactersContainer = document.querySelector('.characters-container')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

    axios
      .get('http://localhost:8000/characters')    // axios.get(url[, config])
      .then((responseFromAPI) => {
        console.log("Response from API is: ", responseFromAPI.data)
        responseFromAPI.data.forEach(e => { 
          console.log('this is returned from my forEach loop - element dot name: ' + e.name)
          let newCharacterInfoCard = characterInfoCard.cloneNode(true)
          charactersContainer.appendChild(newCharacterInfoCard)
          newCharacterInfoCard.getElementsByClassName('name')[0].innerText = e.name
          newCharacterInfoCard.getElementsByClassName('occupation')[0].innerText = e.occupation
          newCharacterInfoCard.getElementsByClassName('cartoon')[0].innerText = e.cartoon
          newCharacterInfoCard.getElementsByClassName('weapon')[0].innerText = e.weapon
        })
        characterInfoCard.style.display = 'none';
      })
      .catch(err => console.log("Error is: ", err));

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const inputedCharacterId = document.getElementsByName('character-id-search')[0].value

    axios
      .get('http://localhost:8000/characters/' + inputedCharacterId)
      .then((theOneCharacter) => {
        // console.log("Response from API is: ", theOneCharacter.data)
        characterInfoCard.getElementsByClassName('name')[0].innerText = theOneCharacter.data.name
        characterInfoCard.getElementsByClassName('occupation')[0].innerText = theOneCharacter.data.occupation
        characterInfoCard.getElementsByClassName('cartoon')[0].innerText = theOneCharacter.data.cartoon
        characterInfoCard.getElementsByClassName('weapon')[0].innerText = theOneCharacter.data.weapon
      })
      .catch(err => console.log("Error is: ", err));

    
    

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

    const inputedCharacterId = document.getElementsByName('character-id-delete')[0].value

    axios
      .delete('http://localhost:8000/characters/' + inputedCharacterId)
      .then(() => {
        document.getElementById('delete-one').style.backgroundColor = "green"
      })
      .catch(err => console.log("Error is: ", err));

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
