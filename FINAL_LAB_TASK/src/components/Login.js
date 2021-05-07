import {useState} from 'react';
import {useHistory} from  'react-router-dom';
import './CSS/login.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

export const Login = ()=>{
    
    const MySwal = withReactContent(Swal);


    let history = useHistory();

    if(localStorage.getItem('userId')!==null)
    {
            history.push('/diary');
    }


    const [errorMsg,setError] = useState();
    const [userInput,setInput] = useState({
        username:'',
        password:'',
    });

    const FormSubmit = (e) => {

        

        e.preventDefault();
        var url = "http://localhost/reactTask2ndTry/public/api/login";
        
        const fetchData = async () =>{
            const res = await axios.post(url,userInput);
  

            if(res.data[0]==='false')
            {
                setError('false');
                
                
            }
            else
            {
                setError('');
               
                localStorage.setItem('userId',res.data.id);
                localStorage.setItem('username',res.data.username);

                MySwal.fire({
                
                    title: 'Logged In Successfully',
                    icon: 'success',
                    showCancelButton: false,
                }).then(result =>{
                    if(result.isConfirmed){
                        
                        history.push('/diary');
                    }
                });
                
            }

        }

        fetchData();
        
        
        
    }


    const changeUser = (e)=>{
        const attar = e.target.name;
        const value = e.target.value;
        const user = {...userInput, [attar] : value}; 
        setInput(user);
      }


    
    return (
        <div>
            <section className="myform-area">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8">
                          <div className="form-area login-form">
                              <div className="form-content">
                                  <h2>Login</h2>
                                  <p>Welcome To Digital Diary Please Login To Continue</p>
                                  
                              </div>
                              <div className="form-input">
                                  <h2>DIGITAL DIARY</h2>
                                  <form onSubmit={FormSubmit}>
                                      <div className="form-group">
                                          <input type="text" name="username"  value={userInput.username} onChange={changeUser} required/>
                                          <label>User Name</label>
                                      </div>
                                      <div className="form-group">
                                          <input type="password" name="password" value={userInput.password} onChange={changeUser}  required/>
                                          <label>password</label>
                                      </div>
                                      <div className="myform-button">
                                          <button className="myform-btn">Login</button>
                                      </div>
                                    {
                                        errorMsg === 'false' &&
                                        <p align="center" className="ErrorMsg" >Invalid Credentials</p>
                                        
                                    }


                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        </div>
    );
}