import {Link,useHistory} from  'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
export const NavBar =()=>{
        let history = useHistory();

        const MySwal = withReactContent(Swal);
        
        const logout = () =>{
            
            MySwal.fire({
                
                title: 'Confirm Logging Out?',
                icon: 'warning',
                showCancelButton: true,
            }).then(result =>{
                if(result.isConfirmed){
                localStorage.clear();
                history.push('/');
                
    
                }
            });
        }

        if(localStorage.getItem('userId')===null)
        {
            history.push('/');
            
        }

        return (
            <div className="navBar">
                <Link to='/diary'> <button className="navButton">Home </button> </Link>   
                <Link to='/diary/add'><button className="navButton">Add Entry To Diary </button></Link> 
                <Link to='/diary/viewAll'><button className="navButton">View From Diary </button></Link>
                <button onClick={logout} className="btn btn-dark">Logout </button>
            </div>
        );  
    
}