import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./UserCard.css"

const UserCard = ({user}) => {
    return (
        <Card className="my-3" style={{ width: '18rem' }}>
        <div className="pseudo mx-auto">
            {user.name[0]}
        </div>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
           {user.email}
          </Card.Text>
         <Link to={`/user/${user.id}`}> <Button variant="primary">Go somewhere</Button></Link>
        </Card.Body>
      </Card>
    )
}

export default UserCard
