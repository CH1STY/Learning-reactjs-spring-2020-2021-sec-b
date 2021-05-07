import {useHistory,useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

export const EditEntry = () =>{

    let history = useHistory();
    const MySwal = withReactContent(Swal);

    const [detailsError,setDetailsError] = useState();
    const [priorityError,setPriorityError] = useState();
    const {id:entryId} = useParams();

    var url = "http://localhost/reactTask2ndTry/public/api/editDiary/"+entryId;
  
    
    const [userInput,setInput] = useState({
        details:'',
        priority:'0',
    });


    useEffect(async () => {
        axios
        .get(url)
        .then((response) => {
            console.log(response);
            setInput({
                details:response.data.details,
                priority:response.data.priority,
            
            });
        }).catch((err) => {
            console.log(err);
        });
    },[])




    const FormSubmit = (e) => {
        e.preventDefault();
        
        const fetchData = async () =>{
            const res = await axios.post(url,userInput);
            if(res.data.toString()==="okay")
            {
                
                setDetailsError("");
                setPriorityError("");
                setInput({
                    details:'',
                    priority:'0',
                    userId:localStorage.getItem('userId'),
                });

                MySwal.fire({
                
                    title: 'Entry Updated Successfully',
                    icon: 'success',
                    showCancelButton: false,
                }).then(res=>{
                    if(res.isConfirmed){
                        history.push('/diary/viewAll');
                    }
                });


            }
            else
            {   
                setDetailsError (res.data.detailsError);
                setPriorityError(res.data.priorityError);

                
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
    

    return(
        <div align="center">
            <h1>Editing From Diary</h1>
            <h2 className="userName">Entry Id: {entryId}</h2>
            <form onSubmit={FormSubmit}>

                <table id="customers">
                    <tbody>
                        <tr>
                            <td>DIARY ENTRY</td>
                            <td>
                                <div className="form-group">
                                    
                                    <input name="details" value={userInput.details} onChange={changeUser} className="form-control"></input>

                                </div>
                                {detailsError==='true' && <p className="ErrorMsg">Invalid Entry</p>}


                            </td>
                        </tr>
                        <tr>
                            <td>PRIORITY</td>
                            <td>
                                <div className="form-group">
                                    
                                    <select className="form-select" onChange={changeUser} value ={userInput.priority} name="priority" id="">
                                        <option value="0" >Select a Priority</option>
                                        <option value="1" >High</option>
                                        <option value="2" >Medium</option>
                                        <option value="3" >Low</option>
                                    </select>

                                </div>
                                {priorityError==='true' && <p className="ErrorMsg">Invalid Priority</p>}
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2'><button className="btn btn-primary">Update</button></td>
                        </tr>
                        
                    </tbody>
                </table>
              
               
              
            </form>
        </div>
    )
}