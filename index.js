//1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість.
//Нехай елементи массива в рядку будут розділені комою.

const fruits = ["Apple", "Mango", "Kiwi", "Lechee", "Grape"];
let string = ""; 
for (const fruit of fruits) {
    string += fruit; //why so long
}
console.log(string);

//2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

let cards = ["Card-1", "Card-2", "Card-3", "Card-4", "Card-5"];
console.log("Original: ", cards);


//delete (by index)

const cardToRemove = "Card-3";

for (let i = 0; i < cards.length; i++) {
    if (cards[i] == cardToRemove) {
        cards.splice(i, 1);
        break;
    }    
}
console.log(cards);


//add (by index)

const cardToInsert = "Card-6";

cards.push(cardToInsert);
console.log(cards);


//update (by index)

const cardToUpdate = "Card-4";

cards[3] = cardToUpdate; 
console.log(cards); //nto sure

