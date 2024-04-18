import React from 'react'
import logo from '../src/assets/logo.png'
import './index.css';

function Check() {
  return (
    <>
    {/* Page 1 */}
    <div className="page ">
      <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
        <img src={logo} alt="" width={125} />
        <div className="title flex justify-center items-center flex-col">
        <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
       <h1 className=' text-xl '> Security & Bouncer Services</h1>
        </div>
      </div>
      <div className="border-t border-b border-[#ccc] mt-3 py-2">
  <h1 className=' text-center'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
  <h1 className=' text-center font-semibold mt-1'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
</div>

      <div className="date flex justify-between items-center">
        <h1>Ref. No.: AS&AS/Q/2022</h1>
        <h1>Date: </h1>
      </div>
      <div className="to mt-20 mx-10">
        <h1 className=' font-medium'>To</h1>
        <h1 className=' mx-4 mt-1 font-medium'>adil</h1>
      </div>
      <h1 className=' font-bold mx-10 mt-4'>Subject: Introduction P.R . ENTREPRISES SECURITY SERVICES.</h1>
      <div className="info mx-10 font-medium">
      <h1 className=' mt-5'>Dear Sir/Madam,</h1>
        <h1 className=' mx-4 mt-4 w-full'>We are pleased to introduce ourselves as one of the leading services providers in</h1>
        <h1 className=' mx-0 mt-2'>the fields of Security Services, Housekeeping and Facility Services.
        </h1>
        <h1 className='mt-4'>The <span className=' font-bold'>P.R.ENTERPRISES SECURITY SERVICES</span> is the brainchild of the high qualified</h1>
        <h1 className='mt-2'>exserviceman, having vast experience in this activity.</h1>
        <h1 className='mt-4'>The registered office of the company is situated in Pune, Maharashtra.</h1>
        <h1 className='mt-4'>The Company is registered as per the Company Shop Act. HDP/II/22457.</h1>
        <h1 className='mt-4'><span className=' font-bold'>P.R.ENTERPRISES SERVICES</span> Provides the security services <span className=' font-bold'>(with and without armed Guards) </span></h1>
        <h1 className=' mt-2 font-bold'>Guards) , Private Detective, Body Guard ,Event Security, Airport Security</h1>
        
          <li className=' mt-3 font-bold'>
          Disciplined attendants and staff, as they are directly surprised by an exserviceman.

          </li>
          <li className=' mt-3 font-bold'>
          Regular feedback meetings with the Clients by our Clients care Cell

          </li>
      
        
      </div>
    </div>

    {/* Page 2 */}
    <div className="page">
      <h1>Page 2 Content</h1>
      {/* Add content for page 2 here */}
    </div>

    {/* Page 3 */}
    <div className="page">
      <h1>Page 3 Content</h1>
      {/* Add content for page 3 here */}
    </div>

    {/* Page 4 */}
    <div className="page">
      <h1>Page 4 Content</h1>
      {/* Add content for page 4 here */}
    </div>
  </>
  )
}

export default Check