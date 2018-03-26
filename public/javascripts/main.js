var myApp ={
  movieGenres(data, genres){
    //filter the dataset and create an array of genres -> one object fr each genre in the database
    genres.forEach((genre, index)=> myApp.vm.genres.push({name: genre, movies:data.filter(movie => movie.genre_name === genre) }));
  },

  vm : new Vue({

    delimiters : ["${","}"],
    el : "#app",

    data : {
      message : "welcome to vue! and netflix",
      genres: []
    },

    methods :{

    }


  })
}

myApp.movieGenres(appData.movies, ["Family", "Drama", "Action", "Comedy", "Adventure"]);
