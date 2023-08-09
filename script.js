console.log ("Hello world")

let sgnb = document.getElementById('sign-in-btn');

let modal = document.querySelector('.modal');



sgnb.onclick = function (event) {
    event.preventDefault()
    modal.classList.add( 'show')
};

modal.onclick = function(event){
    console.log(event.target)
    if(event.target.classList.contains('modal')){
        modal.classList.remove('show')
    }
}
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('');
    } else {
        setTheme('dark');
    }
}
/* let toggleThemeBtn = document.getElementByid('toggle-theme')
    toggleThemeBtn.onclick = function(){
        document.body.classList.toggle('dark')
    }
*/

(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('');
      document.getElementById('slider').checked = true;
    }
})();


let closeModalBtn = document.querySelector('.close-modal-btn');
closeModalBtn.onclick = function(event){
    modal.classList.remove('show')
}