
const information ="NB: All answers available at console"
document.getElementById('information').textContent =information

//1.  Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you.


// Variable to store name (string)
const  lastName = "Olaseinde"
const firstName = "Aduraleke"
const middleName ="Samuel" 



// Variable to store age 
const age = 35

// Variable to nationality 
const nationality = "Nigerian"



const myName= ` My name is ${lastName} ${firstName} ${middleName} , I'm ${age} years, and I'm a ${nationality}.`


document.getElementById('introduction').textContent =myName
console.log(`1.) ${myName}`);





// 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps.
// Changing Lyrics to all upper case 
const lyrics = "Omemma Always on time, You can't do no wrong Omemma!!!,You Leave the 99, always for the one"
const capitalLetterLyrics = lyrics.toLocaleUpperCase()
console.log(`(2.) Changing Lyrics to Upper:  ${capitalLetterLyrics}`);

isCapital = capitalLetterLyrics === capitalLetterLyrics.toLocaleUpperCase()
console.log(`Lyrics is in Upper case:  ${Boolean(isCapital)}`);

document.getElementById('isUpper').textContent =capitalLetterLyrics


// Changing Lyrics to all lower case
const lowerCaseLyrics = lyrics.toLocaleLowerCase()
console.log(`Changing Lyrics to  lower : ${lowerCaseLyrics}`);
document.getElementById('lowerCaseLyrics').textContent =lowerCaseLyrics
const isLower = lowerCaseLyrics ===lowerCaseLyrics.toLocaleLowerCase()
console.log(`Lyrics is in lower case: ${Boolean(isLower)}`);






// 3.Take a word and rearrange it in reverse order, then log the reversed word.
// rearrange it in reverse order,

const word = 'Ambiguous'
const splitWord = word.split('')
const reversedWord = splitWord.reverse()
const  joinedReversed =reversedWord.join('')
console.log(`(3.) Reversed word for Ambiguous is : ${joinedReversed}`);
document.getElementById('joinedReversed').textContent =joinedReversed


// 4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.

const item1 = 1000
const item2 = 3000
const item3 = 6000

const totalItems = item1 + item2 +item3
console.log(`(4.) The total prices of the three items is: $${totalItems}`);
document.getElementById('totalItems').textContent=totalItems

// 5.Find the average of 5 test scores stored in variables. Display the average with a message.
const testScore1 =  98
const testScore2 =  96
const testScore3 =  99
const testScore4 =  100
const testScore5 =  99

const totalTestScore = testScore1 +testScore2 +testScore3 +testScore4 +testScore5
 console.log(`Total testScores is : ${totalTestScore}`);
 const average= totalTestScore/5

  console.log(`(5.) Average of the above score is ${average}`);
document.getElementById('averagescore').textContent=average

//   6.Create an array of your 5 favorite foods. Display the first and last items in the array.

const favoriteFoods = ["Pounded yam", "Rice and beans", "SemoVita", "Spagetti", "Joliof Rice"]
console.log(favoriteFoods)
document.getElementById('favoriteFoods').textContent=favoriteFoods

// Display the first item
const firstItem = favoriteFoods[0]
console.log(`(6a) Show first item before adding pounded yam as first : ${firstItem}`);
document.getElementById("firstitem").textContent =firstItem


// Display the last item
const lastItem = favoriteFoods[4]
console.log(`(6b.)Show last item before adding noodles at last :${lastItem}`);
document.getElementById("lastitem").textContent =lastItem


// 7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.

// Add One food items to the list at the beginning

const addLastItem = favoriteFoods.push("Noodles")
console.log(`(7a) Add noodles as last item: `);
console.log(favoriteFoods);


const addFirstItem = favoriteFoods.unshift("Yam Flour")
console.log(`(7b)Add Yam Flour as first item: `);
console.log(favoriteFoods);


// Create three arrays:



// 8.jssOne

// 9.jssTwo

// 10.jssThree



// Each array must contain 10 student names as string values.

const jssOne = ["James", "John", "Ayo", "Desmond", "Ope" , "Dunsin", "Tope", "Kolapo", "Tunde", "David"]
const jssTwo = ["Marvelous", "Queen", "Damilola", "Raymond", "Jennifer" , "Lopez", "Samuel", "Loveth", "Syvester", "Brown"]
const jssthree = ["Gabriel", "Smith", "Mayowa", "Ade", "Jannet" , "Daniella", "Persie", "Abduramah", "Moses", "Muhammed"]
console.log(`Creating three arrays that contains 10 stydents name as string: no (8,9,10)`);

console.log( jssOne);
console.log(jssTwo);
console.log(jssthree);







   
   
    
