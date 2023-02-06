import React from 'react'
import { useState, useEffect } from 'react'
// import Card from "react-bootstrap/Card";
// import Container from 'react-bootstrap/esm/Container';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom'

const ReviewPage = () => {
    const [reviews, SetReviews] = useState([])
    const [newForm, setNewForm] = useState({
        client: "",
        comment: "",
    })

    const BASE_URL = `https://thecraftsmanway.herokuapp.com/reviews/`
    const fetchReviews = async () => {
        try {
            const res = await fetch(BASE_URL)
            const allReviews = await res.json()
            SetReviews(allReviews)
        } catch (error) {
            console.error(error)
        }
    }
    
    console.log(reviews)
    useEffect(() => {
        fetchReviews()
    },[])

    
    return (
        <div>
            
            { reviews ? 
            reviews.map((review, idx) => {
                return (
                <div key={idx} className='review-container'>
                <div className='top'>
                  <div className='picture'></div>
                  <div className='text'>
                    <p className='name p'>{review.client}</p>
                  </div>
                </div>
                 <div className='bottom'>
                   <p className='p'>{review.comment}</p>
                 </div>
              </div>
            )}): <p>Loading. . .</p>}
            
        </div>
          )
        }

export default ReviewPage