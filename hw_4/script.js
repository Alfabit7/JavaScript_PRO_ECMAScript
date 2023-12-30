const url = 'https://jsonplaceholder.typicode.com/users'
const container = document.querySelector('.container');
await fetch(url)
    .then(response => response.json())
    .then(data => createUserCard(data));

function createUserCard(data) {
    data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        Object.entries(user).forEach(([key, value]) => {
            if (typeof value === 'object' && value !== null) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    const p = document.createElement('p');
                    p.textContent = `${key}.${subKey}: ${subValue}`;
                    card.appendChild(p);
                });
            } else {
                const p = document.createElement('p');
                p.textContent = `${key}: ${value}`;
                if (key === 'id') {
                    p.classList.add('id');
                }
                card.appendChild(p);
            }
        });

        container.appendChild(card);
    });
}

let inputEl = document.querySelector('.inputDelUser');
let idDelUser = null;
inputEl.addEventListener("input", (e) => {
    idDelUser = e.target.value;
});

let btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', (e) => {
    const idElements = document.querySelectorAll('.id');
    let el = Array.from(idElements).find(el => {
        return el.textContent.substring(4) == idDelUser;

    });

    if (el != null && el.textContent.substring(4) == idDelUser) {

        if (confirm(`Вы хоите удалить пользователя с id ${idDelUser}`)) {
            el.parentElement.style.backgroundColor = 'red'
            setTimeout(() => el.parentElement.remove(), 500)
        }

    } else {
        alert(`Пользователя с id ${idDelUser} нет`);
    }

})


