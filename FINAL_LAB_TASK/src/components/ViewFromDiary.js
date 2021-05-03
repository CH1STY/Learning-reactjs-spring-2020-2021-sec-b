import {Link} from 'react-router-dom';
import {useFetch} from './fetchData'


export const ViewAll=()=>{

    
    var url ="http://localhost/reactTask2ndTry/public/api/viewDiary";
    
    const diaris= (useFetch(url).users);
    

    return(
        <div align="center" >
            
            <table className="viewTable">
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
                        <tr>
                            <td>{diary.details}</td>
                            <td>{diary.created_at.substr(0,10)}</td>
                            <td>{diary.updated_at.substr(0,10)}</td>
                            <td>{diary.priority}</td>
                            <td>
                                <Link to={`/edit/${diary.id}`}> <button className="inlineButton">Edit</button></Link>
                                <Link to={`/delete/${diary.id}`}> <button className="inlineButton">Delete</button></Link>
                            </td>
                            
                        </tr>
                        )
                    }
                </tbody>
            </table>
                    
        

        </div>
    )


    

    
}