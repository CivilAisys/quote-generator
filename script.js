//所需DOM節點
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


//全域變數
let apiQuotes = [];

//轉圈
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//取消轉圈
function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}


//取得 new Quote
function newQuote() {
    loading();
    //取得隨機quote from apiQuotes
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;

    //字串太長時變更style
    if (quote.text.length > 100) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    //設定quote  將轉圈取消
    quoteText.textContent = quote.text;
    complete();
}

//取得 Quotes from api
async function getQuotes() {
    loading()

    //此api為ZTM提供
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

    }
}

//將字句傳至推特
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    //開啟新視窗
    window.open(twitterUrl, '_blank')
}

// 事件監聽註冊
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuotes();




