# Vending Machine Tech Test

## Task

Your task is to create a vending machine programme.

-   You will have to make a class called `VendingMachine` with at least one method called `vend`.
-   On creation of a new instance of `VendingMachine`, the class constructor takes 2 parameters: `items` (an array of
    objects) and `money` (how much money the vending machine contains).
-   The `vend` method should take two arguments:
    -   `selection` - which is the code of the selected item (not case sensitive)
    -   `itemMoney` - the amount of money the user inserts into the machine

An example call of the vend method

```js
machine.vend('A01', 0.9);
```

where the selected item is A01 and the money given to the machine is 90p.

An example of the items Array (to create an instance of the `VendingMachine` class) is:

```js
const items = [
    { name: 'Smarties', code: 'A01', quantity: 10, price: 0.6 },
    { name: 'Caramac Bar', code: 'A02', quantity: 5, price: 0.6 },
    { name: 'Dairy Milk', code: 'A03', quantity: 1, price: 0.65 },
    { name: 'Freddo', code: 'A04', quantity: 1, price: 0.25 },
];
```

## Rules

1. If the money given to the machine is less than the item cost return a string of `"Not enough money!"`
2. If the quantity is 0 for an item return a string of `"<Item Name>: Out of stock!"`. Where `<Item Name>` is the name
   of the item selected. e.g. `"Smarties: Out of Stock!"`
3. If an item is correctly selected return `"Vending <Item Name> with <Change Amount> change."` (not the fullstop at
   the end). Where `<Item Name>` is the name of the item and `<Change Amount>` is the change given. e.g. `"Vending
Smarties with 9.40 change."`
4. If an item is correctly selected and there is no change needed then return the string "Vending Item Name". Where
   `<Item Name>` is the name of the item. e.g. `"Vending Smarties"`
5. If an invalid item is selected return the string `"Invalid selection! : Money in vending machine = <Machine Money>"`.
   Where `<Machine Money>` is how much money the machine has inside it, as a float number (e.g. `11.20`).
6. If a selection is successful then the quantity should be updated.
7. The vending machine never runs out of money for simplicity. However, you will need to keep track of the amount of
   money in the machine at anytime (this is not tested in any of the test cases)
    1. **This is important** - it basically means that the `money` class property is just a tracker for gross sales, as
       opposed to actually tracking how much money is in the machine.
    2. e.g. The machine has 10.50 of `money`. I put in 2.00 to purchase something that costs 0.50. This means `money`
       should now be 11.00.
8. Change is always given to 2 decimal places, e.g. `7.00`
