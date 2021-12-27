const jokeEl =document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke(){
    const config = {
        headers:{
            'Accept': 'application/json',
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()

    jokeEl.innerHTML=data.joke
}

///same but not async((.then))

// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept': 'application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((respond) => respond.json())
//         .then((data) => {
//             jokeEl.innerHTML=data.joke
//         })

// }