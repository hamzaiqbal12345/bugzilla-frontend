import React, { useState, useEffect, useRef } from 'react'
import { fetchData } from '../utilities/data'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {
  Link
} from 'react-router-dom'

const Projects = () => {
  const [data, setData] = useState([])
  const mounted = useRef(true)

  useEffect(() => {
    mounted.current = true
    fetchData('/projects').then((data) => {
      if (mounted.current) {
        console.log(data)
        setData(data)
      }
    })

    return () => (mounted.current = false)
  }, [])

  return (
    <div className='d-flex flex-column align-items-center justify-content-center m-5'>
      <h1>Listing Projects</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((project) => {
              return (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.description}</td>
                  <td><Link to={`/project/${project.id}`}><Button variant='primary' >View</Button></Link></td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default Projects
