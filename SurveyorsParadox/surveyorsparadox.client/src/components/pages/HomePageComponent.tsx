import { Cards } from '../Card';
const HomePageComponent: React.FC = () => {
    return (
        <div className='h-screen'>
            <h1 className='h-1/6 text-center text-3xl font-bold my-10 font-guton'>OFFICE 2 FIELD</h1>
           
            <div className='h-3/6 flex items-center justify-center'>

                    <div className='p-10 h-4/5 mx-auto sm:grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-10'>
                        <Cards title="ASSIGN TASK" cardContent={"A work template that can be implemented in the field from the comfort of your office desk"} buttonURL={'/form'} />
                        <Cards title="CALENDAR" cardContent={'History is important, from the harappan civilization to your layout'} buttonURL={'/calendar'}/>
                        <Cards title="REPORTS" cardContent={'Here I am, reporting from the field, officer!'} buttonURL={'/reports'}/>   
                    </div>
            </div>

        </div>
    );
};

export default HomePageComponent;