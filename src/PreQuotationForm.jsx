import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import ReactDOMServer from 'react-dom/server';
import logo from '../src/assets/logo.png';
import './index.css';
import sign from '../src/assets/sign.jpg';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import img from '../src/assets/img.jpg'

const PreQuotationForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [duties, setDuties] = useState([
    { id: 1, name: 'Pranam enterprises ( kondava chauk).' },
    { id: 2, name: 'Kumar Pebble Park.' },
    { id: 3, name: 'Gemini Housing.' },
    { id: 4, name: 'Kalpana Classic.' },
    { id: 5, name: 'Kubera Garden. ' },
    { id: 6, name: 'Kumar Parijat. ' },
    { id: 7, name: 'Vijajay Garden Co-Op Hsg .Ltd. ' },
    { id: 8, name: 'Archna Hill Town. ' },
    { id: 9, name: 'Hi Tech Metal Forming. ' },
    { id: 10, name: 'Kumar Pushpak. ' },
    { id: 11, name: 'Kumar Business Court. ' },
    { id: 12, name: 'Kumar Pride.' },
    { id: 13, name: 'Kumar Sankhya. ' },
    { id: 14, name: 'Kumar Plot Baner. ' },
    { id: 15, name: 'Kumar Plot Sr No 55. ' },
    { id: 16, name: 'Atharva Tower. ' },
    { id: 17, name: 'Bafana Bungalow. ' },    
  ]);
  const [duties1, setDuties1] = useState([
    { id: 18, name: 'Premchand Furnishing. ' },
    { id: 19, name: 'Kumar  Renaissance. ' },
    { id: 20, name: 'Pride Platinum. ' },
    { id: 21, name: 'Wellworth Paradise.' },
    { id: 22, name: 'Om Associates' },
    { id: 23, name: 'Kumar And Potnis Mohan Nagar.' },
    { id: 24, name: 'Kumar Pinakin. ' },
    { id: 25, name: 'Nirmrti Vishal Enterprprises. ' },
    { id: 26, name: 'N.C.Properties.' },
    { id: 27, name: 'Faith Society. ' },
    { id: 28, name: 'Poonawala Bungalow.' },
    { id: 29, name: `Shroff Group (S.B.C.,Slgnatre Height, 
      Suyesh) ` },
    { id: 30, name: 'Kumar Princeville. ' },
    { id: 31, name: 'Kumar Piccadilly. ' },
    { id: 32, name: 'Techno  Life Style Dew Pvt.Ltd. ' },
    { id: 33, name: 'Raisoni Group Of Institute. ' },
    { id: 34, name: 'T.K.Ispat Pvt.Ltd. ' },    
  ]);
  const [duties2, setDuties2] = useState([
    { id: 35, name: 'K. Pacific Mall.' },
    { id: 36, name: 'Eisha Palace. ' },
    { id: 37, name: 'Galana Plot.' },
    { id: 38, name: 'Park Infinia. ' },
    { id: 39, name: 'Suyog Pearl. ' },
    { id: 40, name: 'Regency Group Pune.' },
    { id: 41, name: 'Vedant Group.  ' },
    { id: 42, name: 'Pride Gateway. ' },
    { id: 43, name: 'Bora Realty Group.' },
    { id: 44, name: 'Manav Group. ' },
    { id: 45, name: 'Darode Jog Builders. ' },
    { id: 46, name: "Dynamic Realty creation."  },
    { id: 47, name: 'Dynamic Vadant Associates. ' },
    { id: 48, name: 'Jhala Developers Pvt.Ltd. (Simplicity) ' },
    { id: 49, name: 'Ganga Village Co-Op. Hsg .Society. ' },
    { id: 50, name: 'Jhala Associates Green Wood . ' },
    { id: 51, name: 'Arvade Constructure (Mamurdi Gaon).' },    
  ]);
  const [duties3, setDuties3] = useState([
    { id: 52, name: 'Sunshine Co.Hsg.Society.' },
    { id: 53, name: 'Sunrise Co.Hsg.Society.' },
    { id: 54, name: 'Viraj Infrastructure (Mamurdi Gaon).' },
    { id: 55, name: 'KAKA HALWAI.' },
    { id: 56, name: 'PRANAM  ENTEERPRISES.' },
  ]);


  const [formData, setFormData] = useState({
    date: '',
    to: '',
    // ... other form fields
  });

  React.useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    if (storedLoginState) {
      setIsLoggedIn(JSON.parse(storedLoginState));
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating authentication without a backend
    if (username === 'admin' && password === 'pre04') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', JSON.stringify(true)); // Store login state in local storage
    } else {
      alert('Invalid username or password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const rawDate = formData.get('date');
    const dateObj = new Date(rawDate);
    const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}-${(dateObj.getMonth() + 1).toString().padStart(2, '0')}-${dateObj.getFullYear()}`;
    const to = formData.get('to');
    const ngprice = formData.get('ngprice');
    const ngremark = formData.get('ngremark');
    const nsprice = formData.get('nsprice');
    const nsremark = formData.get('nsremark');
    const cgprice = formData.get('cgprice');
    const cgremark = formData.get('cgremark');
    const csprice = formData.get('csprice');
    const csremark = formData.get('csremark');
    const wgprice = formData.get('wgprice');
    const wgremark = formData.get('wgremark');
    const wsprice = formData.get('wsprice');
    const wsremark = formData.get('wsremark');
    const whprice = formData.get('whprice');
    const whremark = formData.get('whremark');

      

      // Generate JSX for PDF
      const html = (
        <>
          {/* Page 1 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm '>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <div className="date flex justify-between items-center mt-4">
          <h1 className=' font-medium'>Ref. No.: AS&AS/Q/2022</h1>
          <h1 className=' font-medium'>Date: {formattedDate}</h1>
        </div>
        <div className="to mt-20 mx-10">
          <h1>To</h1>
          <h1 className=' mx-4'>{to}</h1>
        </div>
        <h1 className=' font-bold mx-10 mt-4'>Subject: Introduction P.R . ENTREPRISES SECURITY SERVICES.</h1>
        <div className="info mx-10 font-medium text-sm tracking-wide">
          <h1 className=' mt-5'>Dear Sir/Madam,</h1>
          <h1 className=' mx-4 mt-4 w-full'>We are pleased to introduce ourselves as one of the leading services providers in</h1>
          <h1 className=' mx-0 mt-2'>the fields of Security Services, Housekeeping and Facility Services.
          </h1>
          <h1 className='mt-4'>The <span className=' font-bold'>P.R.ENTERPRISES SECURITY SERVICES</span> is the brainchild of the high qualified</h1>
          <h1 className='mt-2'>exserviceman, having vast experience in this activity.</h1>
          <h1 className='mt-4'>The registered office of the company is situated in Pune, Maharashtra.</h1>
          <h1 className='mt-4'>The Company is registered as per the Company Shop Act. HDP/II/22457.</h1>
          <h1 className='mt-4'><span className=' font-bold'>P.R.ENTERPRISES SERVICES</span> Provides the security services <span className=' font-bold'>(with and without armed</span></h1>
          <h1 className=' mt-2 font-bold'>Guards) , Private Detective, Body Guard ,Event Security, Airport Security</h1>
          <h1 className=' mt-2 font-bold'>Parking managements, Various Housekeeping Services for commercial </h1>
          <h1 className=' mt-2 font-bold'>industrial, Residentialestablishment and also construction sites.</h1>
          <h1 className=' mt-4'>We pleased to say that we specialize in flexible services/maintenances contracts, as per the</h1>
          <h1 className=' mt-2'>Clients requirements.It is based on present and feature requirements of our valuable clients.</h1>
          <h1 className=' mt-4'>Following are the some of the important value additions that forms the integral parts of our services</h1>
          
            <li className=' mt-3 font-bold'>
            Disciplined attendants and staff, as they are directly surprised by an exserviceman.

            </li>
            <li className=' mt-3 font-bold'>
            Regular feedback meetings with the Clients by our Clients care price

            </li>
          
        </div>
        
          </div>

          {/* Page 2 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>

  <div className="info mx-10  mt-10 font-medium text-sm tracking-wide">
        <h1><span className=' font-bold'>Terms Of Payments:</span>The bill shall be submitted on 2nd & the same shall be paid within 5th</h1>
        <h1 className=' mt-2'>of every months by Cheques/Drafts on the name of <span className=' font-bold'>P.R ENTERPRISES SECURITY SERVICES.</span></h1>
        <h1 className=' mt-4'><span className=' font-bold'>Facility Expected:</span> We required your good self to provide the Canteen Facility if any to our</h1>
        <h1 className=' mt-2'>staff deployed at your unit. We cover our all employee under statutory.</h1>
        <h1 className=' mt-4'>To be concluding <span className=' font-bold'>P.R.ENTERPRISES SECURITY SERVICES</span> has the required resources to offer</h1>
        <h1 className=' mt-2'>the most efficient services in the above fields. We look forward to a long-lasting</h1>
        <h1 className=' mt-2'>relationship with you.</h1>
        <h1 className=' mt-32 font-bold'>Thanking You,</h1>
        <h1 className=' mt-3 font-bold'> Yours Faithfully</h1>
        
        <div className="sign flex flex-col mt-5 justify-between h-full">
    <div className="flex-grow">
      {/* Content of the sign div */}
    </div>
    <div className="sign1 flex justify-center items-center flex-col ml-auto">
      <img src={sign} alt="" width={130}/>
      <h1 className='mt-4 font-bold'>(Director)</h1>
      <h1 className='mt-4 font-bold'>( Dubey.R.R )</h1>
      <h1 className='mt-4 font-bold'>FOR. P.R ENTERPRICES SECURITY SERVICES</h1>
    </div>
  </div>



        
  </div>
          </div>

          {/* Page 3 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <h1 className=' mt-3 text-center font-semibold text-[#D9484A]'>Duties for 12 Hrs non compliance</h1>
  <MDBTable className='mt-4'>
    <MDBTableHead>
      <tr className='table-secondary text-center text-sm'>
        <th scope='col' className='pb-3'>Sr. no</th>
        <th scope='col' className='pb-3'>Category</th>
        <th scope='col' className='pb-3'>Rate</th>
        <th scope='col' className='pb-3'>Remark</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr className='text-center text-sm'>
        <th scope='row' className='pb-3'>1</th>
        <td className='pb-3'>Security Guard</td>
        <td className='pb-3'>{ngprice}</td>
        <td className='pb-3'>{ngremark}</td>
      </tr>
      <tr className='text-center text-sm'>
        <th scope='row' className='pb-3'>2</th>
        <td className='pb-3'>Security Supervisor</td>
        <td className='pb-3'>{nsprice}</td>
        <td className='pb-3'>{nsremark}</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <h1 className=' mt-4 text-center font-semibold text-[#D9484A]'>Duties for 12 Hrs (Combine) compliance</h1>
  <MDBTable className='mt-4'>
    <MDBTableHead>
      <tr className='table-secondary text-center text-sm'>
        <th scope='col' className='pb-3'>Sr. no</th>
        <th scope='col' className='pb-3'>Category</th>
        <th scope='col' className='pb-3'>Rate</th>
        <th scope='col' className='pb-3'>Remark</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr className='text-center text-sm'>
        <th scope='row' className='pb-3'>1</th>
        <td className='pb-3'>Security Guard</td>
        <td className='pb-3'>{cgprice}</td>
        <td className='pb-3'>{cgremark}</td>
      </tr>
      <tr className='text-center text-sm'>
        <th scope='row' className='pb-3'>2</th>
        <td className='pb-3'>Security Supervisor</td>
        <td className='pb-3'>{csprice}</td>
        <td className='pb-3'>{csremark}</td>
      </tr>
    </MDBTableBody>
  </MDBTable>

  <h1 className=' mt-4 text-center font-semibold text-[#D9484A]'>Duties for 12 Hrs with compliance </h1>
  <MDBTable className='mt-4'>
    <MDBTableHead>
      <tr className='table-secondary text-center text-sm'>
        <th scope='col' className='pb-3'>Sr. no</th>
        <th scope='col' className='pb-3'>Category</th>
        <th scope='col' className='pb-3'>Rate</th>
        <th scope='col' className='pb-3'>Remark</th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr className='text-center text-sm'>
        <th scope='row' className='pb-3'>1</th>
        <td className='pb-3'>Security Guard</td>
        <td className='pb-3'>{wgprice}</td>
        <td className='pb-3'>{wgremark}</td>
      </tr>
      <tr className='text-center text-sm'>
        <th scope='row' className='pb-3'>2</th>
        <td className='pb-3'>Security Supervisor</td>
        <td className='pb-3'>{wsprice}</td>
        <td className='pb-3'>{wsremark}</td>
      </tr>
      <tr className='text-center text-sm'>
        <th scope='row' className='pb-3'>3</th>
        <td className='pb-3'>House Keeping</td>
        <td className='pb-3'>{whprice}</td>
        <td className='pb-3'>{whremark}</td>
      </tr>
    </MDBTableBody>
  </MDBTable>


    <div className="gst mx-4 mt-10">
        <h1 className=' font-bold'>GST 18% Applied. </h1>
        <h1 className=' font-bold mt-2'><span className=' text-black'>•</span> Rate can be negotiable.</h1>
    </div>




          </div>

          {/* Page 4 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <h1 className=' mt-3 text-center font-semibold text-[#D9484A]'>Clients List</h1>

  <MDBTable className='mt-4'>
    <MDBTableHead>
      <tr className='table-secondary text-center text-sm'>
        <th scope='col' className='pb-3'>Sr. no</th>
        <th scope='col' className='pb-3'>Name of Unit</th>
        
      </tr>
    </MDBTableHead>
    <MDBTableBody>
              {duties.map((duty) => (
                <tr key={duty.id} className='text-center text-sm'>
                  <th scope='row' className='pb-3'>{duty.id}</th>
                  <td className='pb-3'>{duty.name}</td>
                </tr>
              ))}
            </MDBTableBody>
  </MDBTable> 

          </div>


          {/* Page 5 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>

  <h1 className=' mt-3 text-center font-semibold text-[#D9484A]'>Clients List</h1>

  <MDBTable className='mt-4'>
    <MDBTableHead>
      <tr className='table-secondary text-center text-sm'>
        <th scope='col' className='pb-3'>Sr. no</th>
        <th scope='col' className='pb-3'>Name of Unit</th>
        
      </tr>
    </MDBTableHead>
    <MDBTableBody>
              {duties1.map((duty1) => (
                <tr key={duty1.id} className='text-center text-sm'>
                  <th scope='row' className='pb-3'>{duty1.id}</th>
                  <td className='pb-3'>{duty1.name}</td>
                </tr>
              ))}
            </MDBTableBody>
  </MDBTable> 

          </div>


          {/* Page 6 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>

  <h1 className=' mt-3 text-center font-semibold text-[#D9484A]'>Clients List</h1>

<MDBTable className='mt-4'>
  <MDBTableHead>
    <tr className='table-secondary text-center text-sm'>
      <th scope='col' className='pb-3'>Sr. no</th>
      <th scope='col' className='pb-3'>Name of Unit</th>
      
    </tr>
  </MDBTableHead>
  <MDBTableBody>
            {duties2.map((duty2) => (
              <tr key={duty2.id} className='text-center text-sm'>
                <th scope='row' className='pb-3'>{duty2.id}</th>
                <td className='pb-3'>{duty2.name}</td>
              </tr>
            ))}
          </MDBTableBody>
</MDBTable> 
          </div>

          {/* Page 7 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>

  <h1 className=' mt-3 text-center font-semibold text-[#D9484A]'>Clients List</h1>

<MDBTable className='mt-4'>
  <MDBTableHead>
    <tr className='table-secondary text-center text-sm'>
      <th scope='col' className='pb-3'>Sr. no</th>
      <th scope='col' className='pb-3'>Name of Unit</th>
      
    </tr>
  </MDBTableHead>
  <MDBTableBody>
            {duties3.map((duty3) => (
              <tr key={duty3.id} className='text-center text-sm'>
                <th scope='row' className='pb-3'>{duty3.id}</th>
                <td className='pb-3'>{duty3.name}</td>
              </tr>
            ))}
          </MDBTableBody>
</MDBTable> 
<div className="sign1 flex justify-center items-center flex-col ml-[50%] mt-3">
      <img src={sign} alt="" width={130}/>
      <h1 className='mt-4 font-bold'>(Director)</h1>
      <h1 className='mt-4 font-bold'>( Dubey.R.R )</h1>
      <h1 className='mt-4 font-bold'>FOR. P.R ENTERPRICES SECURITY SERVICES</h1>
      <h1 className='mt-4 font-bold'>Mob.:9371288405/9503343028</h1>
      <h1 className='mt-4 font-bold'>Email: prepune04@gmail.com</h1>
      
    </div>
          </div>


          {/* Page 8 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <h1 className=' mt-3 text-left mx-8 font-semibold text-xl'>TRAINING PART</h1>

  <h1 className=' font-bold mx-10 mt-4'>A) PHYSICAL TRAINIG:</h1>
  <h1 className=' mx-12 mt-2'><span className=' text-black'>•</span> Uniform with Drill to face any Sort of physical obstacle and they fully disciplined.</h1>

  <h1 className=' font-bold mx-10 mt-4'>B) PARED DICIPLINE: </h1>
  <h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> They are trained in Lethi Charge if, necessary areas to control Violence of 
Labors only after the permission of management only.</h1>

  <h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> Our Security persons are trained in using All Sort of Arms and Ammunition only if the 
situation is demands and it will be used only after the permission will be given strictly by 
the management itself. </h1>

<h1 className=' font-bold mx-10 mt-4'>C) FIRST AID:</h1>
<h1 className=' mx-12 mt-2'><span className=' text-black'>•</span> Our Candidates are trained in First Aid Doctors.</h1>
<h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> Our candidates are fully trained in Industrial Security/Industrial Intelligence, Bank 
security and Personal Security. All the order of management will be executed with 100% 
integrity, Loyalty and Result oriented to the entire satisfaction of the Management. </h1>

<h1 className=' font-bold mx-10 mt-4'>D) TELEPHONE/ WIRELESS:</h1>
<h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> Our candidates are capable of handling wireless equipment’s and passing and 
receiving the message with Police Departments on situation demands. </h1>
<h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> All Important Confidential Reports of industrial security, Industrial intelligence, Labor 
Report will be given to the Management on day to day basis. </h1>
<h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> Any instruction from Managements regarding Labor problems, the cases in handled 
100% Guarantee to the entire satisfaction of the company by Active Security and Allied 
Services. </h1>
<h1 className=' font-bold mx-10 mt-4'>E) FIRE FIGHTING:</h1>
<h1 className=' mx-12 mt-2'><span className=' text-black'>•</span> Our candidates are having knowledge of Fire Fighting System also. </h1>




          </div>

          {/* Page 9 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <h1 className=' font-bold mx-10 mt-4'>F) CONTRL SYSTEM:</h1>
<h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> We recruit Experience hold Field Officers for checking of shift day today 
basis and results some night rounder for checking of night shift.</h1>
  <h1 className=' font-bold mx-10 mt-4'>J) COMPALINTS/SUGGESTIONS:</h1>
<h1 className=' mx-12 mt-2 leading-7'><span className=' text-black'>•</span> Our area manager maintained complaints/suggestions book for your Management when 
Area Manager visited once in a week, they surely meet to client any other authorized 
person. If the management found the complaints about the security or management wants 
to the suggestion for security, then authorized person write in our complaints/suggestion 
book and Security Company take a action quickly .</h1>
<h1 className=' mx-14 mt-4 leading-7'>We will consider it our honor to be associated formed to your early and positive 
response in the  matter.</h1>

<div className="sign1 flex justify-center items-center flex-col ml-[50%] mt-5">
      <h1 className='mt-4 font-bold'>Thanking You,</h1>
      <h1 className='mt-4 font-bold'>Yours Faithfully,</h1>
      <img src={sign} alt="" width={130} className='mt-2'/>
      <h1 className='mt-2 font-bold'>(Director)</h1>
      <h1 className='mt-4 font-bold'>( Dubey.R.R )</h1>
      <h1 className='mt-4 font-bold'>FOR. P.R ENTERPRICES SECURITY SERVICES</h1>
      <h1 className='mt-4 font-bold'>Mob.:9371288405/9503343028</h1>
      
    </div>

          </div>


          {/* Page 10 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <img src={img} alt=""className=' mt-5' />
          </div>


          {/* Page 11 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <h1 className=' mt-3 text-left mx-8 font-semibold text-xl'>SOP</h1>
  <h1 className=' mx-10 mt-2 leading-7'>1. We Provide the Security Services For 24hrs in 12 hrs Shift Day and night 
from 8:00 Pm To 8:00 Am. </h1>
<h1 className=' mx-10 mt-2 leading-7'>2. Relieving and handing taking over will be complete within 10 mints in 
advance before starting the duty for both the shifts .  </h1>
<h1 className=' mx-10 mt-2 leading-7'>3. Handing taking report will be given to conceal authority by watts up or 
telephonic within 15 mints as starts the both the shift.</h1>
<h1 className=' mx-10 mt-2 leading-7'>4. The guard will be in well dressed with whistle, stick, and hanging ID on 
chest.</h1>
<h1 className=' mx-10 mt-2 leading-7'>5. All gourds will be take care of covid19 as per guideline of government of 
India and security Services.</h1>
<h1 className=' mx-10 mt-2 leading-7'>6. The main gate guard will be with thermal checking Machin for and sanitiser.</h1>
<h1 className=' mx-10 mt-2 leading-7'>7. Non of the member or any guest or visitors will be not allowed Frome main 
gate without thermal checking.</h1>
<h1 className=' mx-10 mt-2 leading-7'>8. Voilation of any rules will be controlled and equally inform to concern 
authority of body and owner of security </h1>
<h1 className=' mx-10 mt-2 leading-7'>9. Checking of the security guard every day in both shifts will be the carriedout 
by the security supervisor and field officer/weekly night check by the night 
rounder after 2:30pm to 5:00am.</h1>
<h1 className=' mx-10 mt-2 leading-7'>10. Operation manager will be meet to the concern authority once a week.</h1>
<h1 className=' mx-10 mt-2 leading-7'>11. MD will visit two in a month. on any emergency or any special call by body.</h1>
<h1 className=' mx-10 mt-2 leading-7'>12. Equipment’s available with the guard while carrying out duty – long baton / 
torch.</h1>
<h1 className=' mx-10 mt-2 leading-7'>13. Communication system available between guards Mobile / Rounder guard. 
(Company Mobile).</h1>
<h1 className=' mx-10 mt-2 leading-7'>14. Do’s and Don’t format will be provide by us.</h1>


          </div>

          {/* Page 12 */}
          <div className="page">
          <div className="header bg-slate-100 px-5 flex justify-between items-center rounded-md">
          <img src={logo} alt="" width={125} />
          <div className="title flex justify-center items-center flex-col">
          <h1 className=' text-[30px] font-bold text-[#D9484A]'>P.R. Enterprise </h1>
        <h1 className=' text-xl '> Security & Bouncer Services</h1>
          </div>
        </div>
        <div className="border-t border-b border-[#ccc] mt-3 py-1">
    <h1 className=' text-center text-sm'>Shop No. 4/4, &nbsp; Shantinagar Society, &nbsp; Near kirloskar bridge, &nbsp; Pune-Solapur Road, &nbsp; Hadapsar, &nbsp; Pune-411013.</h1>
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm text-blue-600'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
  <h1 className=' mx-10 mt-2 leading-7'>15. Proper dress code/ uniform to the personnel on duty- we provide a set of 
uniform to guard.</h1>
<h1 className=' mx-10 mt-2 leading-7'>16. Daily briefing by supervisor day and night shift and monthly training by the 
fire fitting office our mgr/trg.</h1>
<h1 className=' mx-10 mt-2 leading-7'>17. Daily Attendance register of a security Guards. House Keeping Entry, Entry 
of maids, Maintenance staff. Sued be Montane by the security supervisor and 
sing the by the concern authority.</h1>
<h1 className=' mx-10 mt-2 leading-7'>18. Complain or satisfactory report of security services in written remark will be 
taken weekly from security head/secretary/chairman by security supervisor  
and submitted to the office by field officer without fail on every Monday.</h1>
<h1 className=' mx-10 mt-2 leading-7 font-bold'>19. We do our best, in view of safety of society / company.</h1>
<h1 className=' mx-10 mt-2 leading-7'>20. Verification of guard is done by our staff. Police verification if required by 
client.</h1>
<h1 className=' mx-10 mt-2 leading-7'>21. Unauthorized entries, pilferages – Visitor, vendor, all screens at the entry 
point of company. Joint investigation in case of theft.</h1>
<h1 className=' mx-10 mt-2 leading-7'>22. Either party may terminate this contract by serving advance written notice of 
one month.</h1>
<h1 className=' mx-10 mt-2 leading-7'>23. We will raise your bill monthly and submit the same at your office before <span className=' font-bold'>2nd 
date of the next month. Payment should be release in first week of the 
month.</span></h1>
<h1 className=' mx-10 mt-2 leading-7'>24. If a service is found unsatisfactory or unacceptable, your service will be 
terminated without   assigning  any  reason.</h1>
<div className="footer mt-2 flex justify-between items-center p-5">
            <div className="left">
            <h1 className='font-bold'>Thanking You,</h1>
      <h1 className='mt-4 font-bold'>Yours Faithfully,</h1>
      <img src={sign} alt="" width={130} className='mt-2'/>
            </div>
            <div className="right">
            <h1 className=' font-bold'>FOR. P.R ENTERPRICES SECURITY SERVICES</h1>
      <h1 className='mt-4 font-bold'>Mob.:9371288405/9503343028</h1>
      <h1 className='mt-4 font-bold'>Email: <a className='' href="mailto:prepune04@gmail.com">prepune04@gmail.com</a></h1>
            </div>
</div>

          </div>
          
        </>
      );

      // Convert JSX to HTML string
      const htmlString = ReactDOMServer.renderToStaticMarkup(html);

      // Generate PDF using html2pdf
      const pdf = html2pdf().from(htmlString).save(to +'_'+formattedDate +'.pdf');

      // Open new window for sharing options
      // const newWindow = window.open('', '_blank');

      // Display buttons for sharing PDF via email and WhatsApp
      // newWindow.document.write(`
      //   <html>
      //     <head>
      //       <title>Share PDF</title>
      //     </head>
      //     <body>
      //       <h1>Share PDF</h1>
      //       <button onclick="window.open('mailto:?subject=Quotation&body=Please find the quotation attached.&attachment=quotation.pdf')">Share via Email</button>
      //       <button onclick="window.open('https://wa.me/?text=Please find the quotation attached.%0A')">Share via WhatsApp</button>
      //     </body>
      //   </html>
      // `);
      // newWindow.document.close();
    };
    const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedIn'); // Remove login state from local storage
    };

     if (!isLoggedIn) {
    return (
      <div className="container py-5 mt-[10%] w-50 bg-blue-100 text-dark rounded-md">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className=" mb-3 header flex justify-between items-center">
            <h1 className="  text-4xl font-bold">Login</h1>
            <img src={logo} alt="" srcset="" width={100}/>
            </div>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="username" className="form-label font-medium">Username</label>
                <input type="text" className="form-control bg-transparent border-[#999999]" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label font-medium">Password</label>
                <input type="password" className="form-control bg-transparent border-[#999999]" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-primary w-40 mt-3">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

    return (
      <div className="container pb-4 pt-2">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="header flex  justify-between items-center bg-slate-200 px-4 rounded-md">
            
            <img src={logo} alt="" width={100}/>
            <h1 className="mb-3 my- text-4xl font-bold">P.R.E. Quotation</h1>
                  <button type="button" className="btn btn-danger btn-sm w-20 fw-bold" onClick={handleLogout}>Logout</button>
                
            
            </div>
            <form className="mt-5" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input type="date" className="form-control" id="date" name="date" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="to" className="form-label">To</label>
                  <input type="text" className="form-control" id="to" name="to" required />
                </div>
                <p className=' font-medium text-xl mt-5 pt-5 border-t border-[#b4b4b4]'>Duties for 12 Hrs non compliance </p>
                <p className=' mt-4 text-lg'>Security Guard </p>
                <div className="col-md-6 bor">
                  <label htmlFor="ngprice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="ngprice" name="ngprice" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="ngremark" className="form-label">Remark</label>
                  <input type="text" className="form-control" id="ngremark" name="ngremark" required />
                </div>
                <p className=' mt-4 text-lg'>Security Supervisor</p>
                <div className="col-md-6">
                  <label htmlFor="nsprice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="nsprice" name="nsprice" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="nremark" className="form-label">Remark</label>
                  <input type="text" className="form-control" id="nsremark" name="nsremark" required />
                </div>

                <p className=' font-medium text-xl mt-5 pt-5 border-t border-[#b4b4b4]'>Duties for 12 Hrs (Combine) compliance</p>
                <p className=' mt-4 text-lg'>Security Guard </p>
                <div className="col-md-6">
                  <label htmlFor="cgprice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="cgprice" name="cgprice" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="cremark" className="form-label">Remark</label>
                  <input type="text" className="form-control" id="cgremark" name="cgremark" required />
                </div>
                <p className=' mt-4 text-lg'>Security Supervisor</p>
                <div className="col-md-6">
                  <label htmlFor="csprice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="csprice" name="csprice" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="csremark" className="form-label">Remark</label>
                  <input type="text" className="form-control" id="csremark" name="csremark" required />
                </div>

                <p className=' font-medium text-xl mt-5 pt-5 border-t border-[#b4b4b4]'>Duties for 12 Hrs with compliance </p>
                <p className=' mt-4 text-lg'>Security Guard </p>
                <div className="col-md-6">
                  <label htmlFor="wgprice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="wgprice" name="wgprice" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wgremark" className="form-label">Remark</label>
                  <input type="text" className="form-control" id="wgremark" name="wgremark" required />
                </div>
                <p className=' mt-4 text-lg'>Security Supervisor</p>
                <div className="col-md-6">
                  <label htmlFor="wsprice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="wsprice" name="wsprice" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wsremark" className="form-label">Remark</label>
                  <input type="text" className="form-control" id="wsremark" name="wsremark" required />
                </div>
                <p className=' mt-4 text-lg'>House keeping </p>
                <div className="col-md-6">
                  <label htmlFor="whprice" className="form-label">Price</label>
                  <input type="number" className="form-control" id="whprice" name="whprice" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="whremark" className="form-label">Remark</label>
                  <input type="text" className="form-control" id="whremark" name="whremark" required />
                </div>

                <div className="col-12 mt-5">
                  <div className="row">
                    <div className="col-md-3">
                      <button type="submit" className="btn btn-dark w-100 fw-bold">Generate PDF</button>
                    </div>
                    {/* <div className="col-md-3">
                  <button type="button" className="btn btn-danger w-100 fw-bold" onClick={handleLogout}>Logout</button>
                </div> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default PreQuotationForm;


  // text-[#D9484A]
