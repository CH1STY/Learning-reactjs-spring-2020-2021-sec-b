import {Link,useHistory} from 'react-router-dom';
import {useFetch} from './fetchData';
import './CSS/table.css';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';


export const ViewAll=()=>{

    let history = useHistory();
    const MySwal = withReactContent(Swal);
    var url ="http://localhost/reactTask2ndTry/public/api/viewDiary?userId="+localStorage.getItem('userId');
    
    const diaris= (useFetch(url).users);
    
    const deleteEntry = (entryId) =>{
        
        MySwal.fire({
                
            title: 'Confirm Deleting This Entry?',
            icon: 'error',
            showCancelButton: true,
        }).then(result =>{
            if(result.isConfirmed){
            var delurl = "http://localhost/reactTask2ndTry/public/api/deletFromDiary/"+entryId;
            const res = axios.get(delurl);
            console.log(res.data);
            history.go(0);
            

            }
        });



    }

    return(
        <div align="center" >
            <h1 color="red">ENTRIES</h1>
            <table id="customers">
                <thead>
                    <tr>
                        <th>DETAILS</th>
                        <th>DATE CREATED</th>
                        <th>LAST LAST UPDATED</th>
                        <th>PRIORITY</th>
                        <th>ACTION</th>

                    </tr>
                    
                </thead>
                    
                    
                <tbody>
                    {
                        diaris.map(diary=>
                        <tr key={diary.id}>
                            <td>{diary.details}</td>
                            <td>{diary.created_at.substr(0,10)}</td>
                            <td>{diary.updated_at.substr(0,10)}</td>
                            {diary.priority==='1' && <td>High</td>}
                            {diary.priority==='2' && <td>Medium</td>}
                            {diary.priority==='3' && <td>Low</td>}
                            <td>
                                <Link to={`/diary/edit/${diary.id}`}> <button className="btn btn-primary">Edit</button></Link>
                                <i className="ml-3">  </i>
                                <button className="btn btn-danger " onClick={()=> deleteEntry(diary.id) }>Delete</button>
                            </td>
                            
                        </tr>
                        )
                    }
                </tbody>
            </table>
                    
        

        </div>
    )


    

    
}