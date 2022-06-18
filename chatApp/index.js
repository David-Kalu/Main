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
const chooseBackground = document.querySelectorAll('.choose-bg')


//Remove activeclass

function removeActiveClass(){
    menuItems.forEach((menuItem) =>{
        menuItem.classList.remove('active');
    })
}

for(let item of menuItems){

    let popup = document.querySelector('.notifications-popup')
        
    item.addEventListener('click', () =>{
        removeActiveClass();
        item.classList.add('active');
        
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
            
        }else if(item.id = 'notifications'){            
            popup.style.display = 'block';
            popup.style.boxShadow = '0 0 1rem var(--color-primary)';
            setTimeout(() =>{
                popup.style.boxShadow = 'none';
            }, 3000)
            document.querySelector('.notification-count').
            style.display = 'none';
        }
                
    })

}

//Remove notification-count and display box shadow

messageNotifications.addEventListener('click', () =>{
    messageNotifications.querySelector('.notification-count').
    style.display = 'none';
    messageBox.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messageBox.style.boxShadow = 'none';
    }, 3000)

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

//change fontSize

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
            fontSize = '8px';
        }else if(size.classList.contains('font-size-2')){
            fontSize = '9px';
        }else if(size.classList.contains('font-size-3')){
            fontSize = '11px';
        }

        document.querySelector('html').style.fontSize = fontSize;
    })

    
})

//change theme color

let removeColorActiveClass = () =>{
    chooseColor.forEach(color =>{
        color.classList.remove('active');
    })
}

chooseColor.forEach(color =>{

    color.addEventListener('click', () =>{

        removeColorActiveClass();

        color.classList.add('active');

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

//change background colors

let whiteColorLightness;
let darkColorLightness;
let lightColorLightness;

let bg1 = document.querySelector('.bg-1');
let bg2 = document.querySelector('.bg-2');
let bg3 = document.querySelector('.bg-3');

const changeBackground = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

bg1.addEventListener('click', () => {
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    
    darkColorLightness = '17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';

    changeBackground();
})


bg2.addEventListener('click', () => {
    bg2.classList.add('active')
    bg1.classList.remove('active');
    bg3.classList.remove('active');

    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    changeBackground();
})

bg3.addEventListener('click', () => {
    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');

    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    changeBackground();
})


/*let removeBackgroundColorActiveClass = () =>{
    chooseBackground.forEach(backgroundColor =>{
        backgroundColor.classList.remove('active');
    })
}

chooseBackground.forEach(backgroundColor =>{

    backgroundColor.addEventListener('click', () => {

        removeBackgroundColorActiveClass();

        backgroundColor.classList.add('active');

        if(backgroundColor.classList.contains('bg-1')){
            darkColorLightness = '17%';
            whiteColorLightness = '100%';
            lightColorLightness = '95%';
            
        }else if(backgroundColor.classList.contains('bg-2')){
            darkColorLightness = '95%';
            whiteColorLightness = '20%';
            lightColorLightness = '15%';

        }else if(backgroundColor.classList.contains('bg-3')){
            darkColorLightness = '95%';
            whiteColorLightness = '10%';
            lightColorLightness = '0%';
        }

        changeBackground(); 
    })

    
})*/










