import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../js/action'

const Detail = ({match}) => {
  
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUser(match.params.id))
    }, [dispatch,match])
    const user = useSelector(state => state.userReducer.user)
    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
    )
}

export default Detail
