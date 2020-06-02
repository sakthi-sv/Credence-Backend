const router=require("express").Router();

class Movies{
    constructor(movieController){
        this.controller=movieController
        this.init();
    }

    init(){
        router.post("/",(req,res)=>{
            this.controller.createMovie(
                req.body,
                (code,result)=>{
                    res.status(code).send(result)
                }
            )
        })

        router.get("/",(req,res)=>{ 
            this.controller.getMovies(
                (code,result)=>{
                    res.status(code).send(result)
                }
            )
        })
        router.get("/:name",(req,res)=>{
            this.controller.getMovieByName(
                req.params,
                (code,result)=>{
                    res.status(code).send(result)
                }
            )
        })
        router.patch("/",(req,res)=>{
            this.controller.updateImg(
                req.body,
                (code,result)=>{
                    res.status(code).send(result)
                }
            )
        })
        router.delete("/:name",(req,res)=>{
            this.controller.deleteMovie(
                req.params,
                (code,result)=>{
                    res.status(code).send(result)
                }
            )
        })
    }
    getRouter(){
        return router;
    }
}
module.exports=controller=>{
    return new Movies(controller);
}