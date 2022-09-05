
//import Stars from './Stars';
import {useState} from 'react';
import {useRef} from 'react';
import ReactStars from "react-stars";
import React from 'react';
import './App.css';



export default function ReviewForm(){
    const [addBtn, setAddBtn] = useState(true);
    const [form, setForm]= useState(false);

    const handleClick = event =>{
        setForm(true);
        console.log('Show Form')
        setAddBtn(false);
        console.log('Hide review button')
    }
    const handleClose = event =>{
        setForm(false);
        console.log('Form is hidden')
        setAddBtn(true);
        console.log('review button shown')
        console.log(reviewList);
    } 

    const [reviewList, setReviewList]= useState(
        [
            {
                user: 'Nereida',
                item:'Great movie and awesome movie effects.',
                rating: '5⭐',
            },
             
            {   
                user: 'Jose',
                item:'A thrilling addition to the MCU franchise!',
                rating: '4.5⭐'
            }
        ]
        );
        
    const review= useRef(null);    
        
    const ratingChanged = (newRating) => {
        console.log(`rating: ${newRating}⭐`);
        // let newRate =  `${newRating}⭐`;
        // return newRate;
    }
    
    // console.log(this.newRate);

    function clickSave(){
        console.log(`saved!`);
        console.log(review.current.value);
        setReviewList(current => [...current, {
                item: `${review.current.value}`, 
                rating: '5⭐'
            }
        ]); 
            console.log(reviewList);
    }
    
    

    const [allReviews, setAllReviews]= useState(false);

    function readReviews(){
        setAllReviews(true);
    }
    function closeReviews(){
        setAllReviews(false);
    }

    function ReviewList(){    
        const itemList = reviewList.map((review) => (
            <>
            <li className="review--list">{review.item} 
            <br></br><span className="rating">Rating:</span> {review.rating}</li>
            <hr></hr>
            </>
        ));
        
        return(
            <div>
                <ul>{itemList}</ul>
            </div>
        );

    }   
    

    return(
        <>
            {addBtn && ( 
            <div>
                <button type="button" className="btn btn-secondary" onClick={handleClick}>Add a Review</button>
                
                <button type="button" className="btn btn-link" onClick={readReviews}>Read Reviews</button>
            </div>
            )}          
            
            {form && ( 
            
                <div className="form">
                    <div className="row">

                    </div>
                    <div className="input-group">
                        <textarea
                        type="text"
                        ref={review} 
                        className="form-control" 
                        placeholder="Type movie review here" aria-label="With textarea" 
                        ></textarea>
                    </div>
                    <div className="stars" name='newRating'>
                        <ReactStars
                            count={5}
                            color2={'#ffd700'}
                            size={24}
                            onChange={ratingChanged}
                        />
                    </div>
                    <div>              
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>{'\u2003'}

                        <button type="button" className="btn btn-primary" onClick={clickSave}>Save changes</button>
                    </div>
                </div>
            )}

            {allReviews && (
                <div>

                    <div>
                        <h3 className="title">Reviews:</h3>
                        <ReviewList />
                    </div>

                    <button type="button" className="btn btn-danger" onClick={closeReviews}>Close Reviews</button>
                    
                </div>
            )}                 
            
        </>
    );
}
