'use strict'

var gBooks = [];
var KEY_BOOKS = 'KEY_BOOKS';
var gCurrBook;
var gId = 0;


function initBookShop() {
    if (loadFromStorage(KEY_BOOKS)) {
        gBooks = loadFromStorage(KEY_BOOKS);
        gId = gBooks.length
        renderTable();
    }
    else gId = 0
}

function readAndAddNewBook() {
    var name = prompt('what is the new book name?')
    var price = +prompt('what is the new book price?')
    addBook(name, price)
}

function readAndUpdateBook(bookId, bookPrice) {
    updateBook(bookId, bookPrice)
}

function onDeleteBook(bookId) {
    deleteBook(bookId)
}

function updateBook(bookId, bookPrice) {
    var updateBook = getBookById(bookId)
    if (updateBook) {
        var newPrice = +prompt('What is the new price?')
        if (newPrice) {
            updateBook.price = newPrice
            renderTable()
            saveToStorage(KEY_BOOKS, gBooks)
        }
    }
}

function addBook(name, price) {
    if (name && price) {
        var book = {
            id: gId++,
            name: name,
            price: price,
            rate: 0
        }
        gCurrBook = book
        gBooks.push(book);
        renderTable();
        saveToStorage(KEY_BOOKS, gBooks)
    }

}

function deleteBook(bookId) {
    var deleteBookIdx;
    gBooks.forEach(function (book, idx) {
        if (book.id === bookId) deleteBookIdx = idx
    })
    if (deleteBookIdx > -1) {
        gBooks.splice(deleteBookIdx, 1);
        renderTable()
        saveToStorage(KEY_BOOKS, gBooks)
    }

}

function getBookById(bookId) {
    var bookIdx;
    gBooks.forEach(function (book, idx) {
        if (book.id === bookId) bookIdx = idx
    })
    var currBook = gBooks[bookIdx]
    return currBook;
}






function changeLocationByRate() {
    gBooks = gBooks.sort(compare)
    renderTable()
    saveToStorage(KEY_BOOKS, gBooks)

    function compare(a, b) {
        let comparison = 0;

        if (a.rate < b.rate) {
            comparison = 1;
        } else if (b.rate < a.rate) {
            comparison = -1;
        }
        return comparison;
    }

}

function changeRate(op) {
    if (op === '+' && gCurrBook.rate<10) {
        gCurrBook.rate++;
        $('.modal-title').text('Id: '+gCurrBook.id+'  '+'The name of the book: '+gCurrBook.name+'  '+
        'The price of the book: '+gCurrBook.price+'  '+'The book rate: '+gCurrBook.rate)
        saveToStorage(KEY_BOOKS, gBooks)

    }
    else if (op === '-' && gCurrBook.rate > 0) {
        gCurrBook.rate--;
        $('.modal-title').text('Id: '+gCurrBook.id+'  '+'The name of the book: '+gCurrBook.name+'  '+
        'The price of the book: '+gCurrBook.price+'  '+'The book rate: '+gCurrBook.rate)
        saveToStorage(KEY_BOOKS, gBooks)

    }
}