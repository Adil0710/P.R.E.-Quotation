  import React from 'react';
  import html2pdf from 'html2pdf.js';
  import ReactDOMServer from 'react-dom/server';
  import logo from '../src/assets/logo.png'
  import './index.css';
  import sign from '../src/assets/sign.jpg'
  import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

  const PreQuotationForm = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const formData = new FormData(e.target);
      const rawDate = formData.get('date');
      const dateObj = new Date(rawDate);
      
      // Format date to dd-mm-yyyy
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
          <h1>Ref. No.: AS&AS/Q/2022</h1>
          <h1>Date: {formattedDate}</h1>
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
    <h1 className=' text-center font-semibold mt-1 mb-2 text-sm'>Mob. 9371288405 &nbsp;| &nbsp; E-Mail: Prepune04@gmail.com &nbsp; | &nbsp; Website: wwww.vikrantpresecurity.com</h1>
  </div>
            {/* Add content for page 4 here */}
          </div>
        </>
      );

      // Convert JSX to HTML string
      const htmlString = ReactDOMServer.renderToStaticMarkup(html);

      // Generate PDF using html2pdf
      const pdf = html2pdf().from(htmlString).save(to +'_'+formattedDate +'.pdf');

      // Open new window for sharing options
      const newWindow = window.open('', '_blank');

      // Display buttons for sharing PDF via email and WhatsApp
      newWindow.document.write(`
        <html>
          <head>
            <title>Share PDF</title>
          </head>
          <body>
            <h1>Share PDF</h1>
            <button onclick="window.open('mailto:?subject=Quotation&body=Please find the quotation attached.&attachment=quotation.pdf')">Share via Email</button>
            <button onclick="window.open('https://wa.me/?text=Please find the quotation attached.%0A')">Share via WhatsApp</button>
          </body>
        </html>
      `);
      newWindow.document.close();
    };

    return (
      <div className="container pb-4 pt-2">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="header flex  justify-between items-center bg-slate-200 px-4 rounded-md">
            <h1 className="mb-3 my- text-4xl font-bold">P.R.E. Quotation</h1>
            <img src={logo} alt="" width={100}/>
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
                <p className=' font-medium text-xl mt-5 pt-5 border-t border-[#ccc]'>Duties for 12 Hrs non compliance </p>
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

                <p className=' font-medium text-xl mt-5 pt-5 border-t border-[#ccc]'>Duties for 12 Hrs (Combine) compliance</p>
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

                <p className=' font-medium text-xl mt-5 pt-5 border-t border-[#ccc]'>Duties for 12 Hrs with compliance </p>
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
