import { Link } from 'react-router-dom';

import { Cards } from '../Card';
const HomePageComponent: React.FC = () => {
    return (
        <div className=''>
            <h1 className='text-center text-3xl font-bold my-10'>Home Page</h1>
            <div className='flex'>

                <div className='p-10  mx-auto sm:grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-10'>
                    <Cards title="Form" cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione laboriosam, iusto esse veniam ea corrupti laborum a quis? Distinctio?'} buttonContent="Go to Form" buttonURL={'/form'} />
                    <Cards title="Calendar" cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione laboriosam, iusto esse veniam ea corrupti laborum a quis? Distinctio?'} buttonContent={'Go to Calendar'} buttonURL={'/calendar'}/>
                    <Cards title="Reports" cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione laboriosam, iusto esse veniam ea corrupti laborum a quis? Distinctio?'} buttonContent={'Go to Reports'} buttonURL={'/reports'}/>
                
                </div>
            </div>

        </div>
    );
};

export default HomePageComponent;