import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { useParams, useNavigate } from "react-router-dom";
import Review from './Review'

const Table = () => {
  const [project, SetProject] = useState([]);
  const [editProject, setEditProject] = useState(project)
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id)
  const fetchProject = async () => {
        const res = await fetch(`https://thecraftsmanway.herokuapp.com/projects/${id}`)
        const data = await res.json()
        SetProject(data)
        console.log(data)
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const removeProject = async () => {
    try {
      const options = {
        method: "DELETE",
      };
      const response = await fetch(`https://thecraftsmanway.herokuapp.com/projects/${id}`, options);
      const deletedPerson = await response.json();

      navigate("/");
    } catch (error) {
      navigate("/");
    }
  };

  const updateProject = async (e) => {
    e.preventDefault()
    try {
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editProject)
        }
        await fetch(`https://thecraftsmanway.herokuapp.com/projects/${id}`, options)

        fetchProject()
    } catch (error) {
        console.log(error)
    }
}

const handleChange = (e) => {
    setEditProject({...editProject, [e.target.name]: e.target.value})
}

  const loading = () => {
    return <p>Loading. . .</p>;
  };

  return project ? (
    <div className="container">
      <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src={project.image}
          alt={project.alt}
          style={{
            // display: "flex",
            // flexWrap: "wrap",
            width: "100%",
            height: "auto",
            objectfit: "fill",
          }}
        />
        <Card.Body>
          <Card.Text>{project.description}</Card.Text>
          <Button variant="danger" onClick={removeProject}>
            Delete
          </Button>
        </Card.Body>
      </Card>
          <div style={{ width: "100%",
                        height: "100%",
                        display: "flex",
                         }}>
            <Review id={id}/>

          
          <form className='form' onSubmit={updateProject}>
            <label className='label' htmlFor="tag">Update your Project!</label>
                <input
                className='input'
                type="text"
                value={editProject.tag}
                name="tag"
                placeholder="Table, Chair, Cabinet, etc.."
                onChange={handleChange}
                />
                <input
                className='input'
                type="text"
                value={editProject.description}
                name="description"
                placeholder="Describe your project!"
                onChange={handleChange}
                />
                <input
                className='input'
                type="text"
                value={editProject.image}
                name="image"
                placeholder="Add a picture!"
                onChange={handleChange}
                />
                <input
                className='input'
                type="text"
                value={editProject.alt}
                name="alt"
                placeholder="Text for visualy impaired"
                onChange={handleChange}
                />
                <button className='button' type="submit">Update Project</button>
            </form>
                </div>
    </div>
  ) : (
    loading()
  )
};

export default Table;
