import React, { useState, useEffect } from 'react'
import { fetchData } from '../utilities/data'
import { useParams } from 'react-router-dom'
import Bugs from './Bugs'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const ProjectDetails = () => {
  const [bugs, setBugs] = useState([])
  const [project, setProject] = useState()
  const [error, setError] = useState()

  const { id } = useParams()

  useEffect(() => {
    fetchData(`/projects/${id}`).then((data) => {
      setProject(data)
    }).catch((err) => setError(err))
  }, [id])

  function bugsHandler (id) {
    fetchData(`/projects/${id}/bugs`).then((data) => {
      setBugs(data)
    }).catch((err) => setError(err))
  }

  return (
    <div>
      {error && <p>{error.message}</p>}
      {project && (
        <div className='d-flex flex-column align-items-center justify-content-center m-5'>
          <h3>Specfic Project Detail</h3>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Creator Id</th>
                <th>View Bugs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>{project.creator_id}</td>
                <td>
                  <Button
                    variant='danger'
                    onClick={() => bugsHandler(project.id)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}

      <Bugs bugs={bugs} project={project} />
    </div>
  )
}

export default ProjectDetails
