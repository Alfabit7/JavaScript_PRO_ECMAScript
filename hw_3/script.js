// Домашнее задание
// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
// Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// Вывод:
// Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(` Сотрудник ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, departament) {
        super(name);
        this.departament = departament;
    }

    displayInfo() {
        console.log(` Сотрудник ${this.name} работает в департаменте "${this.departament}"`);
    }
}

const exampleEmploee = new Employee('Петя');
exampleEmploee.displayInfo();

const exampleManager = new Manager('Коля', 'Веб-разработка');
exampleManager.displayInfo();


// ""Управление списком заказов""

// Реализуйте класс Order(заказ), который имеет следующие свойства и методы:

// Свойство orderNumber(номер заказа) - число, уникальный номер заказа.
// Свойство products(продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// Пример использования класса
// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const order = new Order(12345);
// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);
// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);
// console.log(order.getTotalPrice()); // Вывод: 600

class Order {
    static count = 1;
    orderNumber = Order.count;
    constructor() {
        Order.count++;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
    getTotalPrice() {
        return this.products.reduce((acc, product) => acc + product.price, 0)
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const prod_1 = new Product('tovar_1', 200);
const prod_2 = new Product('tovar_2', 2000);
const prod_3 = new Product('tovar_3', 1000);

const order_1 = new Order();
const order_2 = new Order();
const order_3 = new Order();
const order_4 = new Order();

order_1.addProduct(prod_1);
order_1.addProduct(prod_1);
order_1.addProduct(prod_3);

order_2.addProduct(prod_1);
order_2.addProduct(prod_2);
order_2.addProduct(prod_1);

order_3.addProduct(prod_2);
order_3.addProduct(prod_2);
order_3.addProduct(prod_1);

console.log(`Сумма заказа № ${order_1.orderNumber} равна ${order_1.getTotalPrice()} руб. 00 коп`)
console.log(`Сумма заказа № ${order_2.orderNumber} равна ${order_2.getTotalPrice()} руб. 00 коп`)
console.log(`Сумма заказа № ${order_3.orderNumber} равна ${order_3.getTotalPrice()} руб. 00 коп`)
