import React from 'react'
import { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

const TablesPage = () => {
    const [projects, SetProjects] = useState([])

    const fetchProjects = async () => {
        const res = await fetch('https://thecraftsmanway.herokuapp.com/projects/')
        const data = await res.json()
        console.log(data)
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
                if(project.tag === 'Table')
                return (
                    <div style={{ width: "18rem", padding: "10px"}} key={idx}>
                        <Card>
                            <Link to={`/${project._id}`}>
                                <Card.Img
                                    variant="top"
                                    src={project.image}
                                    alt={project.alt}
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        width: "100%",
                                        height: "17rem",
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

export default TablesPage