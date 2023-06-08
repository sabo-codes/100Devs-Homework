//lists the disney movies each character searched appeared in

document.querySelector('button').addEventListener('click', disneyCharacter)
// document.querySelector('ul').removeChild(li);

function disneyCharacter() {
  let character = document.querySelector('input').valarielue;

fetch(`https://api.disneyapi.dev/character?name=${character}`)
  .then(res => res.json())
  .then((data) => {
    console.log(data.data[0].films);
    document.querySelector('ul').textContent = ''
    data.data[0].films.forEach(films => {
      console.log(films);
      const li = document.createElement('li');
      li.textContent = films;
      document.querySelector('ul').appendChild(li);
    });
  })
  .catch(err => {
    console.log(`error ${err}`)
    });
}

