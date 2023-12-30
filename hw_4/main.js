const url = 'https://dog.ceo/api/breeds/image/random';
const containerEl = document.querySelector('.container');

async function getImagesApi(url) {
    const res = await fetch(url)
    const data = await res.json();
    return data
}

async function createElement() {

    for (let i = 0; i < 11; i++) {
        const data = await getImagesApi(url);
        let divEL = document.createElement('div');
        let titelEl = document.createElement('h2');
        let imgEl = document.createElement('img');
        imgEl.classList.add('img')
        titelEl.innerHTML = `TITEL_${i}`;
        imgEl.src = `${data.message}`
        divEL.appendChild(titelEl);
        divEL.appendChild(imgEl);
        containerEl.appendChild(divEL);
    }
}

createElement();
