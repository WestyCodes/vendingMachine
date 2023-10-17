const itemArray = [
    { name: 'Smarties', code: 'A01', quantity: 10, price: 0.6 },
    { name: 'Caramac Bar', code: 'A02', quantity: 5, price: 0.6 },
    { name: 'Dairy Milk', code: 'A03', quantity: 1, price: 0.65 },
    { name: 'Freddo', code: 'A04', quantity: 1, price: 0.25 },
    { name: 'Daim', code: 'A05', quantity: 1, price: 0.99 },
];
const moneyFloat = 100.0;

class vendingMachine {
    constructor(items, money) {
        this.items = items;
        this.money = money;
    }
    vend(selection, payment) {
        const findSelection = this.items.find(
            (item) => item.code === selection
        );
        if (findSelection === undefined) {
            return console.log(
                `Invalid Selection! : Money in vending machine = ${this.money.toFixed(
                    2
                )}`
            );
        }
    }
}
