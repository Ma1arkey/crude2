import React from 'react';
import './Details.css'

export default ({ user }) => {
  const userDetails = <div>
    <div className="UserName">Name: {user ? user.login : null}</div>
    <div className="UserId">Id: {user ? user.id : null}</div>
    <div className="UserType"> Status: {user ? user.type : null}</div>
    <img className="UserAvatar" src={user? user.avatar_url : null} />
    <div className="UserUrl"> Website: <a href='{user ? user.html_url : null}'>Contact me</a></div>
    
  </div>
  return <div className="UserDetails">
    <h1>User Details</h1>
    {user ? userDetails : null}
  </div>
}


