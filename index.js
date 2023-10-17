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

        if (findSelection.price > payment) {
            return console.log(`Not Enough Money!`);
        }

        if (findSelection.quantity === 0) {
            return console.log(`${findSelection.name}: Out of Stock!`);
        }

        if (payment >= findSelection.price) {
            const change = payment - findSelection.price;

            change === 0
                ? console.log(`Vending ${findSelection.name}`)
                : console.log(
                      `Vending ${findSelection.name} with ${change.toFixed(
                          2
                      )} change.`
                  );
            this.money += findSelection.price;
            findSelection.quantity -= 1;
        }
    }
}

const ColaVendingMachine = new vendingMachine(itemArray, moneyFloat);

ColaVendingMachine.vend('A05', 0.99);
ColaVendingMachine.vend('A04', 3.99);
ColaVendingMachine.vend('A055', 1.09);
ColaVendingMachine.vend('A01', 0.2);
ColaVendingMachine.vend('A01', 0.6);
