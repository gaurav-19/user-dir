import React from "react";

export const CustomModal = ({ post, onClose, show }) => {
  if (!show) {
    return null;
  }
  return (
    <div onClick={onClose}
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: 5000,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="col-md-3 d-flex flex-column justify-content-center border rounded bg-white p-4"
      onClick={e => e.stopPropagation()}>
           <h5 className="m-2 px-2">{post.title}</h5>
            <h6 className="m-2 px-2">{post.body}</h6>
        </div>
    </div>
  );
};