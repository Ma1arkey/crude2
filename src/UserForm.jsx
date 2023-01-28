import React,{useState} from 'react';

const UserForm = ({addUserProp}) => {

    const [name,setName] = useState('');
    const [id,setId] = useState('');

    const addUser = _ => addUserProp({
        Telephone: (new Date).getTime(),
        name, id,


    })

  return (
    <div>
        <h1>Add a user</h1>
        <input type="text" placeholder="Username" value={name} onChange={
            event=>{
                setName(event.target.value)
            }
         } />
        <input type="text" placeholder="User Id" value={id} onChange={
            event=>{
                setId(event.target.value)
            }
         } />

        <input type="button" value="Add" onClick={addUser} />
    

    </div>
  )
}

export default UserForm;