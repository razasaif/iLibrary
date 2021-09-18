console.log('Welcome to the college library');

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    addBook(book) {
        console.log('Adding Book...');
        let tableBody = document.getElementById('tableBody');
        let text = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += text;
    }

    clear() {
        let libraryform = document.getElementById('libraryForm');
        libraryform.reset;
    }

    validate(book){
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }
        else{
            return true;
        }
    }

    show(type, displayMessage){
        let meassage = document.getElementById('message');
        let boldText;
        if(type === 'success'){
            boldText = 'Success'
        }
        else{
            boldText = 'Error!'
        }
        meassage.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`; 
        setTimeout(()=>{
            meassage.innerHTML = '';
        },2000);
    }

}

let libraryform = document.getElementById('libraryForm');
libraryform.addEventListener('submit', submitForm);

function submitForm(e) {
    console.log('Clicked');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let computer = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (computer.checked) {
        type = computer.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.addBook(book);
        display.clear();
        display.show('success','Your Book has been successfully added.')
    }
    else{
        display.show('danger','Sorry you cannot add this book.')
    }
    e.preventDefault();
}