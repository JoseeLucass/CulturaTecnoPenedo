
import "./postagem.css";


export default function Postagem({post}) {

    return (
            
            <div className="post">

                <img
                className="postImg"
                src={post.foto}
                alt=""
                />

                <div className="postInfo">
                    <div className="postCat">
                        <span>{post.info}</span>
                </div>  


                <div className="postTitulo">
                    <span>{post.titulo}</span>

                </div> 

                <div className="postTitulo2">
                    <span>{post.titulo2}</span>

                </div> 

                <div className="postTitulo3">
                    <span>{post.titulo3}</span>

                </div> 

                <div className="postTitulo4">
                    <span>{post.titulo4}</span>

                </div> 

                <div className="postTitulo5">
                    <span>{post.titulo5}</span>

                </div> 

                <div className="postTitulo6">
                    <span>{post.titulo6}</span>

                </div> 

            
               

                <div className="postInfo">
                    <div className="postCat">
                        <span>{post.info2}</span>
                </div>  

               
                <div className="postTitulo7">
                    <span>{post.titulo7}</span>

                </div>

                <div className="postTitulo8">
                    <span>{post.titulo8}</span>

                </div>



            </div> 
            </div> 
            
            <p className="postDesc">
               <span>{post.descrição}</span>

            </p>

            </div> 


    )
}
