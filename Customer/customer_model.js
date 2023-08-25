let db = require("../Utilities/database");

const movieData = (movieId) =>{
    return db.queryRun(
        "select movie.name from movie inner join shows sh on movie.id = sh.movie_id inner join cinema_hall on sh.cinema_hall_id = cinema_hall.id where cinema_hall.id = $1 ",
        [movieId]);
    }

const searchMovie = (movieName) =>{
    return db.queryRun
        ("select * from movie where movie.name = $1",
         [
            movieName
          ]
       )
}

const showSeatingPlanData = (cityName,movieName,cinemaName,cinemaHallName,dateOfShow) => {
    return db.queryRun(
        "select city.name,ssp.seat_id,ssp.show_section_id,ssp.status from show_seating_plan ssp inner join show_section ss on ssp.show_section_id = ss.id inner join tickets.show s on ss.show_id = s.id inner join movie m on s.movie_id = m.id inner join cinema_hall ch on s.cinema_hall_id = ch.id inner join cinema c on ch.cinema_id = c.id inner join city on c.city_id = city.id  where city.name = $1 and m.name = $1 and  c.id = $1 and ch.name = $1 and s.id = $1`",
        [
            cityName,movieName,cinemaName,cinemaHallName,dateOfShow
        ] );
}

const topTenActorsData = () => {
    return db.queryRun(
        "select count(actor_id), movies_count ,ac.name from movie_cast inner join actor ac on movie_cast.actor_id = ac.id  group by ac.name order by count(actor_id) desc limit 10;"
      );
}

const searchMovieByYear = (year) =>{
    return db.queryRun
        ( "select name,release_date from movie where extract(year from release_date) = $1 ",
         [
            year
          ]
       )
}
module.exports = {movieData,searchMovie,showSeatingPlanData,topTenActorsData,searchMovieByYear}