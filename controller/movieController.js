const Movie=require('../models/movie')

class MovieController{

    createMovie(data,callBack){
        // a document instance
        let  movie=new Movie({
          name:data.name,
          img:data.img,
          summary:data.summary  
        })
        //save model to db
        movie.save((err,result)=>{
            if(err) callBack(400,err)
            callBack(201,result)
        })
    }
     getMovies(callBack){
        Movie.find()
            .then((result)=>{
                callBack(200,result)
            },
            (err)=>{
                callBack(400,err)
            })
    }

    getMovieByName(data,callBack){
        console.log(data)
        Movie.find(data)
        .then((result)=>{
            callBack(200,result)
        },
        (err)=>{
            callBack(400,err)
        })
    }

    updateImg(data,callBack){
        const {name,img}=data
        Movie.findOneAndUpdate({name},{img},{upsert: true})
        .then((result)=>{
            callBack(200,result)
        },
        (err)=>{
            callBack(400,err)
        })
    }

    deleteMovie(data,callBack){
        Movie.find(data).remove()
        .then((result)=>{
            callBack(200,result)
        },
        (err)=>{
            callBack(400,err)
        })
    }
}
module.exports = () => {
    return new MovieController();
};