import React from 'react'
import { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom'

const FurniturePage = () => {
    const [projects, SetProjects] = useState([])

    const fetchProjects = async () => {
        const res = await fetch('https://thecraftsmanway.herokuapp.com/projects/')
        const data = await res.json()
        SetProjects(data)
    }

    useEffect(() => {
        fetchProjects()
    },[])

    
    return (
        <div>
        <Container fluid>
            <div className='container'>
            {projects.map((project, idx) => {
                if(project.tag === 'Furniture')
                return (
                    <div style={{ padding: "10px" }} key={idx}>
                        <Card style={{ width: "18rem" }}>
                            <Link to={`/${project._id}`}>
                                <Card.Img
                                    variant="top"
                                    src={project.image}
                                    alt={project.alt}
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        height: "auto",
                                        objectfit: "fill",
                                    }}
                                />
                            </Link>
                        <Card.Body>
                            <Card.Text>{project.description}</Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                )
            })}
            </div>
            </Container>
        </div>
          )
        }

export default FurniturePage