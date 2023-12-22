import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserCard = (props) => {
    const {user} = props
    const id = user.id;

    const [UserPosts, setUserPosts] = useState([]);

    useEffect(() => {
        //get request for fetching user's post
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(json => setUserPosts(json))
        .catch(e => {console.log(e); alert('Something went wrong. Please reload!')});
    }, []);

    return(<Link to={`/profile/${id}`} className="btn d-flex justify-content-between m-3 p-3 border border-top-0 rounded bg-white">
            <h5 className="m-0 px-2 text-truncate">{user.name}</h5>
            <h6 className="m-0 px-2">{UserPosts.length > 0 ? `Posts: ${UserPosts.length}` : 'loading..'}</h6>
    </Link>)
};

export default UserCard;