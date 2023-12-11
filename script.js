const modal = document.getElementById('modal');
const showModal = document.getElementById('show-modal');
const closeModal = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');


function showModalFunc(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

function storeBookmark(event){
    event.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!urlValue.includes('http://') && 'https://'){
        urlValue = `https://${urlValue}`;
    }
    if(!validate(nameValue,urlValue)){
        return false;
    }
    
}

showModal.addEventListener('click',showModalFunc);
closeModal.addEventListener('click',() =>{
    modal.classList.remove('show-modal');
});
window.addEventListener('click', (event) =>{
    (event.target === modal ? modal.classList.remove('show-modal') : false);
});

// Form Validation
function validate(nameValue, urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if(!nameValue){
        alert('Please submit the name value!');
        return false;
    }
    if(urlValue.match(regex)){
        alert('match');
    } else{
        alert('Provide a valid web address!');
        return false;
    }
    return true;

}

bookmarkForm.addEventListener('submit',storeBookmark);