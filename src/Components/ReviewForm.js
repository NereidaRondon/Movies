import Stars from './Stars';
import Movie from './Movie';
import list from './MovieList';


export default function ReviewForm(props){
    const movies = list.map(movie => {
        return(
            <Movie 
                key={movie.id}
                movie={movie}
            />
        )
    })

    return(
        <>
        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#form--modal">Write a Review</button>
        <button type="button" class="btn btn-link">Read Reviews</button>

        <div class="modal fade" id="form--modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Write a Review for {props.movie.title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <Stars />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>


        {/* <div class="modal fade" id="form--modal" data-bs-backdrop="static" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Write a Review for </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body">
                        
                        <Stars />
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                    </div>
                </div>
            </div>
        </div> */}
        </>
    );
}