const menuItems = document.querySelectorAll('.menu-item');
const messageNotifications= document.querySelector('#message-notifications');
const messageBox = document.querySelector('.messages');

console.log(menuItems)

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

messageNotifications.addEventListener('click', () =>{
    messageNotifications.querySelector('.notification-count').
    style.display = 'none';
    messageBox.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messageBox.style.boxShadow = 'none';
    }, 2000)

})











