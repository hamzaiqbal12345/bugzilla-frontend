import React, { useState, useEffect, useRef } from "react";
import { fetchProjects, fetchProjectDetail } from "../data";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Projects = () => {
  const [data, setData] = useState([]);
  const [project, setProject] = useState();
  let mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    fetchProjects().then((data) => {
      if (mounted.current) {
        console.log(data);
        setData(data);
      }
    });

    return () => (mounted.current = false);
  }, []);

  function projectHandler(id) {
    fetchProjectDetail(id).then((data) => {
      setProject(data);
    });
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center m-5">
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
            data.map((d) => {
              return (
                <tr>
                  <td>{d.title}</td>
                  <td>{d.description}</td>
                  <td><Button variant="primary" onClick={() => projectHandler(d.id)}>View</Button></td>
                </tr>
              );
            })}
        </tbody>
      </Table>

      {project && (
        <tr>
          <td>{project.id}</td>
          <td>{project.title}</td>
          <td>{project.description}</td>
          <button>hellp</button>
        </tr>
      )}
    </div>
  );
};

export default Projects;
