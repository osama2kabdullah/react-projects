import React from 'react';
import logo from '../../images/logo.png'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-gray-900 text-gray-300 px-24 pt-12'>
            <div className='flex justify-between'>
            <img className="h-10" src={logo} alt="" />
                <div className='flex gap-32'>
                    <div>
                        <p>About Online Food</p> 
                        <p>Read Our Blog.</p> 
                        <p>Sign up to Deliver.</p> 
                        <p>Add your Resturent.</p> 
                    </div>
                    <div>
                        <p>Get Help.</p> 
                        <p>Read FAQs.</p> 
                        <p>View all cities.</p> 
                        <p>Resturent near me.</p> 
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-32 pb-12'>
                <p className='text-gray-500'>Copyright &copy; {year} Red Onion</p>
                <div className='flex gap-6'>
                    <p>Privacy Policy</p>
                    <p>Terms and Condition</p>
                    <p>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;