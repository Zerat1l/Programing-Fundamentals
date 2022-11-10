function movies(list) {

    let moviesList = [];

    list.forEach(line => {
        if(line.includes('addMovie')) {
            let name = line.split('addMovie ')[1]; // Fast and Furious
            moviesList.push({name}); // {name: 'Fast and Furious'}

        } else if(line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy '); // name = Inception, director = Christopher Nolan
            let movie = moviesList.find(el => el.name === name); //true or undefind

            if(movie) {
                movie.director = director;
            }
            
        } else if(line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = moviesList.find(el => el.name === name); //true or undefind
            
            if(movie) {
                movie.date = date;
            }
        }
    });
    moviesList.forEach(el => {
        
        if(el.name && el.director && el.date) {
            console.log(JSON.stringify(el));
        }
    });
}

movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])