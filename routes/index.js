var express = require('express');
var router = express.Router();
var connect = require('../utils/sqlConnect');

/* GET home page. */
router.get('/', (req, res, next) => {
  connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id`, (error, rows)=>{
    if (error){
      throw error;
    }else{
      res.render('home',
            {
            defaultMovie : rows[Math.floor(Math.random()*rows.length)],
            data: JSON.stringify(rows),
            mainpage: true,
            videopage: false
       });
    }
  })

  });

  router.get('/movies/:id/:vidsrc', (req,res)=> {
// get the movie details from the server
console.log(req.params.id, req.params.vidsrc);
connect.query(`SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}"`, (err,rows)=>{
  if(err){
    console.log(err);
  }else {
    res.render('movie',{
      movie:req.params.id,
      trailer: req.params.vidsrc,
      data: JSON.stringify(rows),
      mainpage: false,
      videopage: true
        });
      }
    })
  });
module.exports = router;
