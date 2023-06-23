function isEmtyObject(obj) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
    }

    return true;
}

function addDataMovieToLocalStorage(movie = {}) {
    // lay ra id dang muon duoc add moi vao
    let currentIdMovie = movie['id'];
    // lay du lieu tu localstorage  
    let dataMovies = window.localStorage.getItem('favorite-movies');
    // console.log('aaa', dataMovies)
    let arrDataMovies = [];
    if (!dataMovies) {
        // chua he ton tai du lieu trong localstorage
        arrDataMovies = [...arrDataMovies, movie];
        window.localStorage.setItem('favorite-movies', JSON.stringify(arrDataMovies));
    } else {
        // data ton du lieu
        // kiem tra xem phim can add da co trong du lieu chua
        dataMovies = JSON.parse(dataMovies);
        // check currentIdMovie co nam trong dataMovies ?
        const checking = dataMovies.some(item => item.id === currentIdMovie);
        if (!checking) {
            // ko co ton tai
            arrDataMovies = [...dataMovies, movie];
            window.localStorage.setItem('favorite-movies', JSON.stringify(arrDataMovies));
        }
    }
}
function getDataMoviesFromLocalStorage() {
    let dataMovies = window.localStorage.getItem('favorite-movies');
    dataMovies = JSON.parse(dataMovies);
    return dataMovies;
}

function checkDataMoviesLocalStorage(id = 0) {
    id = Number.parseInt(id);
    const dataMovies = getDataMoviesFromLocalStorage();
    return dataMovies.some(item => item.id === id);
}

function removeMovieLocalStorageById(id) {
    id = Number.parseInt(id);
    const dataMovies = getDataMoviesFromLocalStorage();
    let newDataMovies = dataMovies.filter(item => item.id !== id);
    if (newDataMovies !== undefined) {
        // set lai data
        window.localStorage.setItem('favorite-movies', JSON.stringify(newDataMovies));
    }
    // checkDataMoviesLocalStorage(id);
}

export const helpers = {
    isEmtyObject,
    addDataMovieToLocalStorage,
    checkDataMoviesLocalStorage,
    getDataMoviesFromLocalStorage,
    removeMovieLocalStorageById
}