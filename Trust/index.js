// Side Bar


const menuItems = document.querySelectorAll('.menu-item');

//Messages 
const messagesNotification = document.querySelector
('#messages-notifications');
const notificationClose = document.querySelector('#notification-close');

const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// ***************Side Bar***********/
// remove active class for all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        }else{
            document.querySelector('.notification-popup').
            style.display = 'block';
            
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

//clicking on anywhere on screen to close notification modal
const closeNotification = (e) => { //e is event
    if(e.target.idList.contains('#notification-close')){
        notificationClose.style.display = 'none';
    }
}

notificationClose.addEventListener('click', closeNotification)


// ***************Messages***********/

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
}
//Search Chat
messageSearch.addEventListener('keyup', searchMessage)

// Message Card Highlighting
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').
    style.display = 'none';
    setTimeout(() => { //to make the shadow of message box disappear
        messages.style.boxShadow = 'none';
    }, 2000)
})

/// Theme Customization

//Open Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => { //e is event
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//Close Modal
themeModal.addEventListener('click', closeThemeModal)
theme.addEventListener('click', openThemeModal);



// Fonts

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize; 
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

        // change the font size of root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
    
})

//remove active class from colors

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//Change Primary Colors

colorPalette.forEach(color => { //check on classlist and 
    //how color variable is being read without defining? - is it due to function?
    color.addEventListener('click', () => {
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
            
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


//theme Background values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    //Active class adding
    Bg1.classList.add('active');
    //Removing active class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //reload page
    window.location.reload();
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%'; 

    //Active class adding
    Bg2.classList.add('active');
    //Removing active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%'; 

    //Active class adding
    Bg3.classList.add('active');
    //Removing active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})
