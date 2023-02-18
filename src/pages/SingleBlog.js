import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const SingleBlog = () => {
  return <>
    <Meta title={"Dynamic Blog Name"} />
    <BreadCrumb title="Dynamic Blog Name" />
    <div className="blog-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
       <div className="row">
        <div className="col-12">
          <div className="single-blog-card">
            <Link to="/blogs" className='d-flex align-items-center gap-10'>
              <HiOutlineArrowLeft className='fs-4'/>
              Go back to Blogs
            </Link>
            <h3 className="title">
             A Beautiful Sunday Morning Renaissance
            </h3>
            <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur maiores, ratione optio sapiente repudiandae temporibus commodi fugiat voluptas quisquam hic eos dolor tenetur cum animi ipsam velit quos eveniet ex.
            Eius dolor similique pariatur quo assumenda quibusdam amet cumque natus, sunt error. Nulla corrupti odio, iure vel nisi fugiat culpa aut quasi. Quaerat beatae assumenda quod sint! Sapiente, aperiam minima.
            </p>
          </div>
        </div>
       </div>
      </div>
    </div>
  </>
}

export default SingleBlog;