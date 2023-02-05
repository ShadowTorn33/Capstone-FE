import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const TablePage = () => {
    const [table, setTable] = useState([])
    const [newForm, setNewform] = useState({
        tag: "",
        description: "",
        image: "",
        alt: "",
        })

    const { tag } = useParams()

    const getTables = async () => {
        try {
            const res = await fetch(`/project/${tag}`)
            const allProjects = await res.json()
            setTable(allProjects)
        } catch (error) {
            
        }
    }
  return (
    <div>TablePage</div>
  )
}

export default TablePage