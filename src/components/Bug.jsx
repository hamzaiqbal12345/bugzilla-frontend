import React from 'react'
import PropTypes from 'prop-types'
import image from '../assets/image.webp'
import Card from 'react-bootstrap/Card'

const Bug = ({ bug }) => {
  return (
    <div >
      <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Img
          variant='top'
          src={image}
        />
        <Card.Body>
          <Card.Title>
            <strong>title: </strong>
            {bug.title}
          </Card.Title>
          <Card.Text>
            <strong>Description: </strong>
            {bug.description}
          </Card.Text>
          <Card.Text>
            <strong>Deadline: </strong>
            {bug.deadline}
          </Card.Text>
          <Card.Text>
            <strong>Bug_type: </strong>
            {bug.bug_type}
          </Card.Text>
          <Card.Text>
            <strong>Status: </strong>
            {bug.status}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

Bug.propTypes = {
  bug: PropTypes.object
}

export default Bug
