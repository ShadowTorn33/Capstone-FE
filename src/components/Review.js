import React from 'react'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'


const Review = () => {
    const [review, setReview] = useState([])
    const [newForm, setNewForm] = useState({
        client: "",
        comment: ""
    }) 

    const getReview = async () => {
        try {
            // This is the current server thats being delpoyed
            const res = await fetch('https://thecraftsmanway.herokuapp.com/reviews/')
            const allReviews = await res.json()
            setReview(allReviews)
        } catch (error) {
            console.error(error)
        }
    }

    const createReview = async (input) => {
        try {
            const newReview = await fetch('https://thecraftsmanway.herokuapp.com/reviews/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input)
            })
            getReview()
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const currentState = {...newForm}
        createReview(currentState)
        setNewForm({
            client: "",
            comment: ""
        })
    }

    useEffect(() => {
        getReview()
    },[])


  return (
     <div>
            <form className='form' onSubmit={handleSubmit}>
            <label className='label' htmlFor="client">Leave a Review!</label>
                <input
                className='input'
                type="text"
                value={newForm.client}
                name="client"
                placeholder="Enter your name."
                onChange={handleChange}
                />
                <textarea
                className='textarea'
                value={newForm.comment}
                name="comment"
                placeholder="Leave a comment"
                onChange={handleChange}
                />
                <button className='button' type="submit">Submit</button>
            </form>
        
    </div>
  )
}

export default Review