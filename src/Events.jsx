

// {/* <div className="user_list">
//     {this.state.userList.map(user=>{
//         return (
//             <div className="user">
//                 <div>
//                    <span className="userName">{user.name}</span>
//                    <span className="userId">{user.id}</span>
//                    <span className="userStatus">{user.status}</span>
//                 </div>

//                 <div className="user_actions">
//                   <button onClick={this.onDeleteHandle.bind(this,user)}>Delete</button>
//                   <button onClick={this.onEditHandle.bind(this,user)}>Edit</button>
//                 </div> */}
        
               
// const Events = () => {
// const [userList, setList] = React.useState(initialList);
// const [name, setName] = React.useState('');

// function handleChange(event) {
//     setName(event.target.value);
// }

// function handleAdd() {
//     const newList = list.concat({ name });

//     setList(newList);
// }

// return (
//     <div>
//     <div>
//         <input type="text" value={name} onChange={handleChange} />
//         <button type="button" onClick={handleAdd}>
//         Add
//         </button>
//     </div>

//     <ul>
//         {useList.map((item) => (
//         <li key={item.id}>{item.name}</li>
//         ))}
//     </ul>
//     </div>
// );
// };

//    export default Events;
import React, { useState } from 'react';


export default function FormInputsPage() {
  const [name, setName] = useState({ value: '', changed: false });
  const [demoValue, setDemoValue] = useState('');

  const onNameChange = (e) => {
    setName({ value: e.target.value, changed: true });
  };
  const onDemoValueChange = (e) => {
    setDemoValue(e.target.value);
  };
  const onDemoValueClear = () => {
    setDemoValue('');
  };
 
const Events =()=>{
    return (

<List strongIos insetIos>
  <ListInput
    type="text"
    placeholder="Your name"
    info="Full name please"
  />

  <ListInput
    type="password"
    placeholder="Your password"
    info="8 characters minimum"
  />

  <ListInput
    type="email"
    placeholder="Your e-mail"
    info="Your work e-mail address"
  />

  <ListInput type="url" placeholder="URL" info="Your website URL" />
</List>
  )
}};