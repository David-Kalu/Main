const menuItems = document.querySelectorAll('.menu-item');





menuItems.forEach(menuItem => {
    console.log(menuItem)
    menuItem.addEventlistener('click', () => {

        menuItem.classList.add('active');
    })
})



