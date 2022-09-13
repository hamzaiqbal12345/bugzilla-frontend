import React, { useState, useEffect } from 'react'
import { fetchData } from '../utilities/data'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    fetchData('/projects').then((data) => {
      setData(data)
    }).catch((err) => setError(err))
  }, [])

  return (
    <div className='d-flex flex-column align-items-center justify-content-center m-5'>
      {error && <p>{error.message}</p>}
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
                  <td>
                    <Link to={`/project/${project.id}`}>
                      <Button variant='primary'>View</Button>
                    </Link>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </Table>
    </div>
  )
}

export default Projects
