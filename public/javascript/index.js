const charactersAPI = new APIHandler('http://localhost:8000');
const characterInfoCard = document.getElementsByClassName('character-info')[0]

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    // axios.get(url[, config])
    axios
      .get('http://localhost:8000/characters')
      .then((responseFromAPI) => {
        console.log("Response from API is: ", responseFromAPI.data)
        responseFromAPI.data.forEach(e => { 
          console.log('this is returned from my forEach loop: ' + e)
          // let newClone = node.cloneNode([deep])

          let newCharacterInfoCard = characterInfoCard.cloneNode(true)
          newCharacterInfoCard.getElementsByClassName('name')[0].innerText = responseFromAPI.data[0].name
          // document.getElementsByClassName('name')[0].innerText = responseFromAPI.data[0].name
          // document.getElementsByClassName('occupation')[0].innerText = responseFromAPI.data[0].occupation
          // document.getElementsByClassName('cartoon')[0].innerText = responseFromAPI.data[0].cartoon
          // document.getElementsByClassName('weapon')[0].innerText = responseFromAPI.data[0].weapon
        })
      })
      .catch(err => console.log("Error is: ", err));

    // name
    // occupation
    // cartoon
    // weapon

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
