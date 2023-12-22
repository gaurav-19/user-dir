const PostCard = (props) => {
    const { post, openCustomModal } = props;

    return(<button className="btn col-md-3 m-3 col-sm-8 d-flex flex-column justify-content-center border rounded text-start"
    onClick={() => openCustomModal(post)}>
    <h5 className="m-2 px-2">{post.title}</h5>
     <h6 className="m-2 px-2">{post.body}</h6>
     </button>)
};

export default PostCard;