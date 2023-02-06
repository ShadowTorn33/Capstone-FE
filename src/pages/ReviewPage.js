import React from 'react'
import { useState, useEffect } from 'react'
// import Card from "react-bootstrap/Card";
// import Container from 'react-bootstrap/esm/Container';
// import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom'

const TablesPage = () => {
    const [reviews, SetReviews] = useState([])
    const [newForm, setNewForm] = useState({
        client: "",
        comment: "",
    })

    const fetchReviews = async () => {
        try {
            const res = await fetch('https://thecraftsmanway.herokuapp.com/reviews')
            const allReviews = await res.json()
            SetReviews(allReviews)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchReviews()
    },[])

    
    return (
        <div>
            {reviews.map((review) => {
                <div className='review-container'>
                <div className='top'>
                  <div className='picture'></div>
                  <div className='text'>
                    <p className='name'>{review.client}</p>
                    <p className='role'>Person Role</p>
                  </div>
                </div>
                 <div className='bottom'>
                   <p>{review.comment}</p>
                 </div>
              </div>
            })}
        </div>
          )
        }

export default TablesPage