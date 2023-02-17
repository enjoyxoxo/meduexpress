import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';

const Contact = () => {
  return <>
    <Meta title={"Contact"} />
    <BreadCrumb title="Contact Us" />
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.427025733636!2d-0.35601214999999997!3d6.173796749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf39f23360dc43%3A0x9d9e187149f1fb02!2sKukurantumi!5e0!3m2!1sen!2sgh!4v1676618080038!5m2!1sen!2sgh" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact Us</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className="form-control" placeholder='Name'/>
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder='Email'/>
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get In Tourch With Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>No.289. Sukuumu. Kukurantumi-akyem.</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiPhoneCall   className='fs-5' />
                      <a href="tel:+233203734874">+233 203734874</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href="mailto:palito0277@gmail.com">palito0277@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsInfoCircle  className='fs-5' />
                      <p className="mb-0">Monday 🥈 Friday 3 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Contact;