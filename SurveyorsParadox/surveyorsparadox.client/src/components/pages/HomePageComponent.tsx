import { Link } from 'react-router-dom';
import { CardWithForm } from '../Card';
const HomePageComponent: React.FC = () => {
    return (
        <div className='dark'>
            <h1 className='text-center text-3xl my-10'>Home Page</h1>

            <div className='m-auto p-28 flex flex-wrap justify-between'>
                <CardWithForm title="Form" cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione laboriosam, iusto esse veniam ea corrupti laborum a quis? Distinctio?'} buttonContent="Go to Form" buttonURL={'/form'} ></CardWithForm>
                <CardWithForm title="Calendar" cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione laboriosam, iusto esse veniam ea corrupti laborum a quis? Distinctio?'} buttonContent={'Go to Calendar'} buttonURL={'/calendar'}></CardWithForm>
                <CardWithForm title="Reports" cardContent={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ratione laboriosam, iusto esse veniam ea corrupti laborum a quis? Distinctio?'} buttonContent={'Go to Reports'} buttonURL={'/reports'}></CardWithForm>
            
            </div>

        </div>
    );
};

export default HomePageComponent;