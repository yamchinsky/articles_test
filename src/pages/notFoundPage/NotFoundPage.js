import React from "react";
import"./NotFoundPage.scss";

const NotFound = () => {
  return (
    <div className='notFound_container'>
      <h2 className='notFound_title'>404 Not Found</h2>
      <p className='notFound_text'>Whoops... Something went wrong!</p>
    </div>
  );
};

export default NotFound;