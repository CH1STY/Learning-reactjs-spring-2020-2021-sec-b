import {Link} from  'react-router-dom';

export const NavBar =()=>{
        return (
            <div className="navBar">
                <Link to='/'> <button className="navButton">Home </button> </Link>   
                <Link to='/add'><button className="navButton">Add Entry To Diary </button></Link> 
                <Link to='/viewAll'><button className="navButton">View From Diary </button></Link>
            </div>
        );  
    
}