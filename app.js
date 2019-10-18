//one class to create the object person, album, movie ***Model
const movies = [];
/* const form = document.querySelector('#movie-form');
const userTitle = document.querySelector('#title');
const userYearReleased = document.querySelector('#yearReleased');
const userDuration = document.querySelector('#duration');
const userGenre = document.querySelector('#genre');
const display = document.querySelector('.display'); */


//take arguments
class Movie{
    constructor(title, yearReleased, duration, genre){
        this.title = title;
        this.yearReleased = yearReleased;
        this.duration = duration;
        this.genre = genre;
    }/* 
    calcAge(){ 
        return (new Date().getFullYear() - this.yearReleased);
    } */
}
/* 
const rushHour = new Movie('Rush Hour', 1998, '1 hour 38 mins', 'Comedy/Thriller/Action');
console.log(rushHour); */
/* console.log(rushHour.calcAge()); */

/* function eventListeners(){
    form.addEventListener('submit', displayMovie);
    display.addEventListener('click', removeMovie);
    
    /* form.addEventListener('submit', function(){
        console.log('test'); 
    }); 
    function displayMovie(e){
        
        let html = '<div class="display-movie"> <div class="display-title"> %title%</div> <div class="display-yearReleased">%years% </div> <div class="display-duration">%duration% </div> <div class="display-genre">%genre% </div> <div class="remove-movie"> <p class="remove-movie">Remove Movie &#10006;</p> </div> </div>'

        let newHtml= html.replace('%title%', userTitle.value);
        newHtml = newHtml.replace('%years%', userYearReleased.value);
        newHtml = newHtml.replace('%duration%', userDuration.value);
        newHtml = newHtml.replace('%genre%', userGenre.value);
        display.insertAdjacentHTML('beforeend', newHtml);
        e.preventDefault();
    }
    function removeMovie(e){
        if(e.target.parentElement.classList.contains('remove-movie')){
            e.target.parentElement.parentElement.remove();
            console.log(e.target.parentElement);
        }
    }
}

eventListeners();
 */


/* console.log('hey please work');
console.log(userTitle); */





//***View */ class for the UI which contains methods(user interface)
/* class UI{
    
} */
//create/insert the html for the UI DISPLAY 

//clear fields method

//remove something/object


//Controller combines UI and model
//event handler with function
//get values


//instatiate new class/object album with variable name

//instantiate new UI const ui = new UI()


//call relevant methods


//separate event handler for removing/deleting

class UI{
    addMovieToList(movie){
        let html = '<div class="display-movie"> <div class="display-title"> %title%</div> <div class="display-yearReleased">%years% </div> <div class="display-duration">%duration% </div> <div class="display-genre">%genre% </div> <div class="remove-movie"> <p class="remove-movie">Remove Movie &#10006;</p> </div> </div>'

        let newHtml= html.replace('%title%', userTitle.value);
        newHtml = newHtml.replace('%years%', userYearReleased.value);
        newHtml = newHtml.replace('%duration%', userDuration.value);
        newHtml = newHtml.replace('%genre%', userGenre.value);
        display.insertAdjacentHTML('beforeend', newHtml);
    }
    clearFields(){
        document.getElementById("title").value = '';
        document.getElementById("yearReleased").value = '';
        document.getElementById("duration").value = '';
        document.getElementById("genre").value = '';
    }
    removeMovie(e){
        if(e.target.parentElement.classList.contains('remove-movie')){
            e.target.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('form').addEventListener('submit', function(e){
    const form = document.querySelector('form').value;
    const userTitle = document.querySelector('#title');
    const userYearReleased = document.querySelector('#yearReleased');
    const userDuration = document.querySelector('#duration');
    const userGenre = document.querySelector('#genre');
    const display = document.querySelector('.display');

    const ui = newUI();

    ui.addMovieToList(movie);
    ui.clearFields();
    ui.removeMovie(e);
    e.preventDefault();
})