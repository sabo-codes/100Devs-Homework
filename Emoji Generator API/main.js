document.querySelector('button').addEventListener('click', getEmoji)

function getEmoji() {

fetch('https://emojihub.yurace.pro/api/all')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    let emoji = data[Math.floor(Math.random() * 1792)].htmlCode
    document.querySelector('h2').innerHTML = emoji
    document.querySelector('h3').innerText = emoji
  })
  .catch(err => {
    console.log(`error ${err}`)
    });
}
