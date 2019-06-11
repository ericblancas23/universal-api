const movieModel = require('../controllers/movies');

module.exports = {
    getIdByFunc: function(req,res, next) {
        console.log(req.body);
        movieModel.findById(req.params.movieId, function(err, movieInfo) {
            if(err) {
                next(err);
            } else {
                res.json({status: 'success', message: 'movie found', data: {movies: movieInfo}});
            }
        });
    },
    getAll: function(req,res,next) {
        let movieList = [];
        movieModel.find({}, function(err, movies) {
            if(err) {
                next(err);
            } else {
                for (let movie of movies) {
                    movieList.push({id: movie._id, name: movie.name, released_on: movie.released_on});
                }
                res.json({status: 'success', message: 'movies list found!', data: {moviesList}});
            }
        });
    },
    updateById: function(req, res, next) {
        
    }
}