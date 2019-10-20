//one class to create the object person, album, movie ***Model

//take arguments
class Movie{
    constructor(title, yearReleased, duration, genre){
        this.title = title;
        this.yearReleased = yearReleased;
        this.duration = duration;
        this.genre = genre;
    }
}

class UI{
    addMovieToList(movie){
        const display = document.querySelector('.display');
        let html = '<div class="display-movie"> <div class="display-title"> %title%</div> <div class="display-yearReleased">%years% </div> <div class="display-duration">%duration% </div> <div class="display-genre">%genre% </div> <div class="remove-movie"> <p class="remove-movie">Remove Movie &#10006;</p> </div> </div>'
        let newHtml= html.replace('%title%', movie.title);
        newHtml = newHtml.replace('%years%', movie.yearReleased);
        newHtml = newHtml.replace('%duration%', movie.duration);
        newHtml = newHtml.replace('%genre%', movie.genre);
        
        display.insertAdjacentHTML('beforeend', newHtml);
    
    }
    clearFields(){
        document.getElementById("title").value = '';
        document.getElementById("yearReleased").value = '';
        document.getElementById("duration").value = '';
        document.getElementById("genre").value = '';
    }
    removeMovie(target){
        if(target.className === 'remove-movie'){
            target.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const yearReleased = document.getElementById('yearReleased').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value;

    const movie = new Movie(title, yearReleased, duration, genre);
    //console.log(movie);

    const ui = new UI();
    //console.log(ui);

    if(title == ''||yearReleased == '' ||duration == ''||genre == ''){
        alert("Error: Missing Info")
    }else{
        ui.addMovieToList(movie);
        ui.clearFields();
    }
    e.preventDefault();
});

document.querySelector('.display').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.removeMovie(e.target);

    ui.clearFields();

    e.preventDefault();
})



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