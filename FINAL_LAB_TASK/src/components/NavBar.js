import {Link} from  'react-router-dom';

export const NavBar =()=>{
        return (
            <div className="navBar">
                <Link to='/'> <button>Home </button> </Link>   
                <Link to='/add'><button>Add Entry To Diary </button></Link> 
                <Link to='/viewAll'><button>View From Diary </button></Link>
            </div>
        );  
    
}