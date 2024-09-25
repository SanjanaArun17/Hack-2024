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
                        <Link to="/page1">Go to Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Go to Page 2</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePageComponent;