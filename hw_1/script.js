// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));


// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
    let counter = 0;
    return {
        increment: () => { counter++; console.log(counter + ' increment'); },
        decrement: () => { counter--; console.log(counter + ' decrement'); },
        showConter: () => { console.log(counter + ' showCounter') }
    }
}

const obj = createCounter();
obj.showConter();
obj.increment();
obj.increment();
obj.showConter();
obj.decrement();
obj.showConter();

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);


const rootDomEl = document.querySelector('.container');
let targetEl = 'list_item_target';
const foundElement = findElementByClass(rootDomEl, targetEl);

function findElementByClass(rootDomEl, targetEl) {
    if (rootDomEl.classList.contains(targetEl)) {
        return rootDomEl;
    }
    for (let i = 0; i < rootDomEl.children.length; i++) {
        let foundElement = findElementByClass(rootDomEl.children[i], targetEl);
        if (foundElement) {
            return foundElement;
        }
    }
    return null;
}


if (foundElement) {
    console.log('Element found:', foundElement);
} else {
    console.log('No element with the specified class found.');
}

