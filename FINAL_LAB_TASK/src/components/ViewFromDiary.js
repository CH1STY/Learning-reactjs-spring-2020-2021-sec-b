import {DataFetching} from './fetchData'
import {useState} from 'react';



export const ViewAll=()=>{

    
    const user = [
        {
            details: "hello world",
            priority: "high"
        },
        
        ];
    const [list,setList] = useState(user);

    
    

    var url ="http://localhost/reactTask2ndTry/public/api/viewDiary";
    
        console.log(DataFetching(url));
    

        console.log(list[0]);
    return(
        <div align="center">
            <table className="viewTable">
                <thead>
                    <tr>
                        <th>DETAILS</th>
                        <th>PRIORITY</th>

                    </tr>
                </thead>
                    
                    
                <tbody>
                </tbody>
            </table>
        

        </div>
    )


    

    
}