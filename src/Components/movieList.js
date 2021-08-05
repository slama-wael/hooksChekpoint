import React from 'react';
import  {MovieCard}  from './movieCard';



 export const MovieList = ({movies, searchTitle, searchRating}) => {
    return (
        <div style={{display:"flex"}}>
            
            {movies
             
            .filter((movie)=>(
                movie.nameMovie.toLowerCase().trim().includes(searchTitle.toLowerCase().trim()) && 
                movie.rating >= searchRating
                ))
                .map((movie)=> (
                    <MovieCard movie={movie} key={movie.id} />
                ))
                /* note: si je fait le map puis filtre ca me donne une err !!!! donc il faut toujours filtrer puis map si non ca marche pas. 
                tres important toujours .filtre puis .map à ne pas oublier!!! */ 
              
            }
            
            
        </div>
    )
}