function renderTable(){
    var strTableThead=
    `
    <thead>
     <tr>
      <th scope="col">id</th>
      <th scope="col">book</th>
      <th scope="col">price</th>
      <th scope="col">rate</th>
     
     </tr>
    </thead>
    `   
    var strHTMLs= gBooks.map(function (book) {
        var strData =
            `
            <tr >
             <th >${book.id}</th>
             <td >${book.name}</td> 
             <td > ${book.price}</td>
             <td > ${book.rate}</td>
             <td>
             <button type="button" class="btn btn-primary" onclick="openModal(${book.id})">Read</button>
             <button type="button" class="btn btn-warning" onclick="readAndUpdateBook (${book.id},${book.price})">Update</button>
             <button type="button" class="btn btn-danger" onclick="onDeleteBook(${book.id})">delete</button>
             </td>
            </tr>
            `

        return strData;
    })
    strHTMLs=strTableThead+strHTMLs
    $('.books-table').html(strHTMLs)

}

function openModal(bookId){
    gCurrBook=getBookById(bookId)
    $('.modal-title').text('Id: '+bookId+'  '+'The name of the book: '+gCurrBook.name+'  '+
    'The price of the book: '+gCurrBook.price+'  '+'The book rate: '+gCurrBook.rate)
    $('.book-details').html('<img class="book-image" src="img/'+bookId+'.png"  >')
    $('.modal').css('display','block')
    $('.modal').css('overflow','visible')
    return gCurrBook;
}

function closeModal(){
    changeLocationByRate() 
    $('.modal').css('display','none')
    $('.modal').css('overflow','hidder')

}

