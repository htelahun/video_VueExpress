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
            data: JSON.stringify(rows)

       });
    }
  })

  });
module.exports = router;
