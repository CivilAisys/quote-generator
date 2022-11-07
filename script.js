//所需DOM節點
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


//全域變數
let apiQuotes = [];

//取得 new Quote
function newQuote(){
    //取得隨機quote from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
}

//取得 Quotes from api
async function getQuotes() {
    //此api為ZTM提供
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

    }

}

getQuotes();



