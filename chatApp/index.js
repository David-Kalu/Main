const menuItems = document.querySelectorAll('.menu-item');
const messageNotifications= document.querySelector('#message-notifications');
const messageBox = document.querySelector('.messages');
const messageSearch = document.querySelector('#message-search');
const messages = document.querySelectorAll('.message');
const themeModal = document.querySelector('.customize-theme');
const themeButton = document.querySelector('#theme-button');
const chooseSize =  document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root');
const chooseColor = document.querySelectorAll('.choose-color span')

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

function removeFontSizeActiveClass() {
    chooseSize.forEach(size =>{
        size.classList.remove('active');
    })
}

chooseSize.forEach((size) =>{

    let fontSize;
        
    size.addEventListener('click', () =>{

        removeFontSizeActiveClass();

        size.classList.add('active');
        
        if(size.classList.contains('font-size-1')){
            fontSize = '7px';
        }else if(size.classList.contains('font-size-2')){
            fontSize = '10px';
        }else if(size.classList.contains('font-size-3')){
            fontSize = '13px';
        }

        document.querySelector('html').style.fontSize = fontSize;
    })

    
})

//colors

chooseColor.forEach(color =>{



    color.addEventListener('click', () =>{

        if(color.classList.contains('color-1')){
            root.style.setProperty('--color-primary', 'hsl(252, 75%, 60%)');
        }else if(color.classList.contains('color-2')){
            root.style.setProperty('--color-primary', 'hsl(52, 75%, 60%)');
        }else if(color.classList.contains('color-3')){
            root.style.setProperty('--color-primary','hsl(152, 75%, 60%)');
        }else if(color.classList.contains('color-4')){
            root.style.setProperty('--color-primary', 'hsl(0, 95%, 65%)');
        }
        else if(color.classList.contains('color-5')){
            root.style.setProperty('--color-primary', 'hsl(202, 75%, 60%)');
        }

    })
})











