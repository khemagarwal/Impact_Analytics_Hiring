import { Link } from 'react-router-dom';

const Navigate = () => {
    return (
        <nav className="navbar">
            <h1>Job Portal</h1>
            <div className="links">
                <Link to="/"><button className="button-home">Home</button></Link>
                <Link to="/shortlisted"><button className="button-home">Shortlisted Candidates</button></Link>
                <Link to="/rejected"><button className="button-home">Rejected Candidates</button></Link>
              
            </div>
        </nav>
    );
}
 
export default Navigate;