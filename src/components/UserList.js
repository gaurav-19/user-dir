import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
    const [Users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
        .catch(e => {console.log(e); alert('Something went wrong. Please reload!')});
    }, []);

    return(<div className="container d-flex flex-column align-items-center">
    <h1 className="pt-3">Directory</h1>
    <div className="col-md-8">
        {Users.length > 0 ? Users.map((u,i) => (<UserCard key={u.id} user={u}/>)) : 
        <h2 className="m-1 px-2">Loading..</h2>}
    </div>
    </div>)
};

export default UserList;