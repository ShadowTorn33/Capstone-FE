import React from 'react'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'


const AddProject = () => {
    const [project, setProject] = useState([])
    const [newForm, setNewForm] = useState({
        tag: "",
        description: "",
        image: "",
        alt: "",
    }) 

    const getProjects = async () => {
        try {
            const res = await fetch('http://localhost:4000/projects')
            const allProjects = await res.json()
            setProject(allProjects)
        } catch (error) {
            console.error(error)
        }
    }

    const createProject = async (input) => {
        try {
            const newProject = await fetch('http://localhost:4000/projects', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input)
            })
            getProjects()
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
        createProject(currentState)
        setNewForm({
            tag: "",
            description: "",
            image: "",
            alt: "",
        })
    }

    useEffect(() => {
        getProjects()
    },[])


  return (
     <div>
        <section>
            
            <form className='form' onSubmit={handleSubmit}>
            <label className='label' htmlFor="tag">Add a Project!</label>
                <input
                className='input'
                type="text"
                value={newForm.tag}
                name="tag"
                placeholder="Table, Chair, Cabinet, etc.."
                onChange={handleChange}
                />
                <input
                className='input'
                type="text"
                value={newForm.description}
                name="description"
                placeholder="Describe your project!"
                onChange={handleChange}
                />
                <input
                className='input'
                type="text"
                value={newForm.image}
                name="image"
                placeholder="Add a picture!"
                onChange={handleChange}
                />
                <input
                className='input'
                type="text"
                value={newForm.alt}
                name="alt"
                placeholder="Text for visualy impaired"
                onChange={handleChange}
                />
                <button className='button' type="submit">Submit</button>
            </form>
        </section>
    </div>
  )
}

export default AddProject