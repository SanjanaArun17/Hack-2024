import { Link } from 'react-router-dom';

const HomePageComponent: React.FC = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/form">Go to Form Page</Link>
                    </li>
                    <li>
                        <Link to="/calendar">Go to Calendar</Link>
                    </li>
                    <li>
                        <Link to="/reports">Go to Reports</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePageComponent;