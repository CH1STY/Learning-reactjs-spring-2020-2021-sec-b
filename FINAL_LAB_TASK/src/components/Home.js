export const Home = () =>{

    var username = localStorage.getItem('username');

    return (
            <div  align="center">
                <h1>Welcom To Digital Diary!</h1>
                <h2 className="userName">{username}</h2>
            </div>
    );
}