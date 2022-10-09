let tip, bill_value, price, total_value
price = prompt("Enter the price of an item");
tip = 
    (price >= 50 && price <=300) ? 0.15 * price : 0.20 * price;
total_value = Number(price) + tip;

console.log(`The bill was ${price}, the tip was ${tip}, and the total value is ${total_value}`);