const menuItems = document.querySelectorAll('.menu-item');
const messageNotifications= document.querySelector('#message-notifications');
const messageBox = document.querySelector('.messages');
const messageSearch = document.querySelector('#message-search');
const messages = document.querySelectorAll('.message');
const themeModal = document.querySelector('.customize-theme');
const themeButton = document.querySelector('#theme-button');
const chooseSize =  document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');

console.log(messages);

//Remove activeclass

function removeActiveClass(){
    menuItems.forEach((menuItem) =>{
        menuItem.classList.remove('active');
    })
}

for(let item of menuItems){

    item.addEventListener('click', () =>{
        removeActiveClass();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
            
        }else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('.notification-count').
            style.display = 'none';
        }
        
    })
}

//Notification-count and shadow

messageNotifications.addEventListener('click', () =>{
    messageNotifications.querySelector('.notification-count').
    style.display = 'none';
    messageBox.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messageBox.style.boxShadow = 'none';
    }, 2000)

})

//message search//

function searchMessage(){
    const val = messageSearch.value.toLowerCase();
    console.log(val)

    messages.forEach((chat) => {
        let name = chat.querySelector('h5').innerText.toLowerCase();

        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';

        }else{
            chat.style.display = 'none';
        }
    })

    
}


messageSearch.addEventListener('keyup', searchMessage);

//Theme customization//


function openThemeModal(){
    themeModal.style.display = 'grid';
}

themeButton.addEventListener('click', openThemeModal);

function closeThemeModal (e){
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeThemeModal);

//changing fontSize

chooseSize.forEach((size) =>{

    let fontSize;

    size.addEventListener('click', () =>{

        if(size.classList.contains('font-size-1')){
            fontSize = '7px';
            root.setProperty()
        }else if(size.classList.contains('font-size-2')){
            fontSize = '10px';
        }else if(size.classList.contains('font-size-3')){
            fontSize = '13px';
        }

    document.querySelector('html').style.fontSize = fontSize;
    })

    
})















