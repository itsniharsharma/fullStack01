import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Imported useNavigate from react-router-dom to redirect to other page

export default function Register() {



  const [credentials, setcredentials] = useState({FirstName:"", LastName:"", EnrollmentNumber:"",Hostel:"", ContactNumber:"",DOB:"",Department:"",EmailId:""});
 
  const navigate = useNavigate(); // Initialize useNavigate




//----------------------------------------------------------------------------------------
  const handleSubmit = async(e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/creatuser",{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({FirstName:credentials.FirstName, LastName:credentials.LastName, EnrollmentNumber:credentials.EnrollmentNumber, Hostel:credentials.Hostel,  ContactNumber:credentials.ContactNumber, DOB:credentials.DOB, Department:credentials.Department, EmailId:credentials.EmailId })
        });

    

        const json= await response.json();
        console.log(json);

        if(!json.success){
          alert("enter valid credentials");
        }

           // Redirecting to home page
           const redirect=()=>{
               alert("Thanks for registering with us"); 
               navigate('/');
           }

           redirect();
  }
//-----------------------------------------------------------------------------------------------




//-----------setting the values of credenials once values are taken-----------------------
  const onChange=(e)=>{
     setcredentials({...credentials,[e.target.name]:e.target.value})
//----------------------------------------------------------------------------------------

  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* handleSubmit is the action performed once onSubmit is triggred */}
      <section className="h-100" style={{backgroundColor:'rgb(252 211 219)'}}>
          

         <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample photo"
                      className="img-fluid"
                      style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5">Register with us</h3>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" name='FirstName' value={credentials.FirstName} onChange={onChange}/>
                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" name='LastName' value={credentials.LastName} onChange={onChange}/>
                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1n1" className="form-control form-control-lg" name='EnrollmentNumber' value={credentials.EnrollmentNumber} onChange={onChange}/>
                            <label className="form-label" htmlFor="form3Example1n1">Enrollment Number</label>
                          </div>
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" name='Hostel' value={credentials.Hostel} onChange={onChange}/>
                        <label className="form-label" htmlFor="form3Example8">Hostel</label>
                      </div>

                       {/* <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Contact Number: </h6>  */}

                        <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" name='ContactNumber' value={credentials.ContactNumber} onChange={onChange}/>
                        <label className="form-label" htmlFor="form3Example8">Contact Number </label>
                      </div>

                        {/* <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" checked={gender === "female"} onChange={onChange}/>
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div> */}

                        {/* <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div> */}

                        {/* <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div> */}
                      </div>

                      {/* <div className="row">
                        <div className="col-md-6 mb-4">
                          <select data-mdb-select-init className="form-select">
                            <option value="1">State</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
                        </div> */}
                        {/* <div className="col-md-6 mb-4">
                          <select data-mdb-select-init className="form-select">
                            <option value="1">City</option>
                            <option value="2">Option 1</option>
                            <option value="3">Option 2</option>
                            <option value="4">Option 3</option>
                          </select>
                        </div> */}
                      {/* </div> */}

                      <div data-mdb-input-init className="form-outline mb-1 mx-4">
                        <input type="text" id="form3Example9" className="form-control form-control-lg" name='DOB' value={credentials.DOB} onChange={onChange}/>
                        <label className="form-label" htmlFor="form3Example9">DOB</label>
                      </div>

                     

                      <div data-mdb-input-init className="form-outline mb-4 mx-4">
                        <input type="text" id="form3Example99" className="form-control form-control-lg" name='Department' value={credentials.Department} onChange={onChange}/>
                        <label className="form-label" htmlFor="form3Example99">Department</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4 mx-4">
                        <input type="text" id="form3Example97" className="form-control form-control-lg"  name='EmailId' value={credentials.EmailId} onChange={onChange}/>
                        <label className="form-label" htmlFor="form3Example97">Email ID</label>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg ms-2">Register</button>
                      </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div> 

         
      </section>
      </form>
    </div>
  );
}


