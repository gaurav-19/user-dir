import { useEffect, useState } from "react";
import Header from "./Header";
import {useParams} from "react-router-dom";
import { CustomModal } from "./CustomModal";
import PostCard from "./PostCard";

const ProfilePage = () => {
    const {id} = useParams();

    const [UserPosts, setUserPosts] = useState([]);
    const [UserDetails, setUserDetails] = useState(null);
    const [CustomModalPost, setCustomModalPost] = useState(null);
    const [show, setShow] = useState(false);

    const openCustomModal = (post) => {
        setCustomModalPost(post)
        setShow(true);
    }

    const closeCustomModal = () => {
        setCustomModalPost(null)
        setShow(false);
    }

    useEffect(() => {
        //get request for fetching user's post
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(json => setUserPosts(json))
        .catch(e => {console.log(e); alert('Something went wrong. Please reload!')});

        //get request for fetching user's details
        fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then(response => response.json())
        .then(json => setUserDetails(json[0]))
        .catch(e => {console.log(e); alert('Something went wrong. Please reload!')});

    }, []);

  return (<>
    <Header/>
    <div className="container d-flex flex-column align-items-center">
    <h1 className="py-3">Profile Page</h1>
    <div className="col-md-10 col-sm-12 d-flex flex-row justify-content-between border bg-white rounded p-3 mb-3">
        {UserDetails ? <>
        <div>
            <h4 className="m-1 px-2">{UserDetails.name}</h4>
            <h6 className="m- px-2">{UserDetails.username} | {UserDetails.company.catchPhrase}</h6>
        </div>
        <div>
            <h6 className="m-1 px-2">{`Address: ${UserDetails.address.suite}, ${UserDetails.address.street}, ${UserDetails.address.city}`}</h6>
            <h6 className="m-1 px-2">{UserDetails.email} | {UserDetails.phone}</h6>
        </div></> : 
        <h2 className="m-1 px-2">Loading..</h2>}
    </div>

    <div className="col-md-10 col-sm-12 d-flex flex-row justify-content-between border bg-white rounded p-3 mb-3">
        <div className="row justify-content-center">
            {UserPosts.length > 0 
            ? 
            UserPosts.map(post => (<PostCard key={post.id} post={post} openCustomModal={openCustomModal}/>))
            : 
            <h4 className="m-1 px-2">No posts</h4>}
        </div>
    </div>
    </div>
    <CustomModal onClose={closeCustomModal} show={show} post={CustomModalPost}/>
  </>)
}

export default ProfilePage;
