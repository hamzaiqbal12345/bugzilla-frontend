import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

const Bug = ({ bug }) => {
  return (
    <div >
      <Card style={{ width: '18rem' }} className='m-3'>
        <Card.Img
          variant='top'
          src='https://www.zdnet.com/a/img/resize/3835ebb307b845ccd906b6250e041ee6575491f3/2018/03/20/b27530ef-5740-4c52-8443-e2b3b48f950c/screen-shot-2018-03-20-at-10-27-25.jpg?auto=webp&fit=crop&height=170&width=300'
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
  bug: PropTypes.Object
}

export default Bug
