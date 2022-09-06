import {useNavigate} from 'react-router-dom'
import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import Meetup from '../models/metup';

const NewMetupsPage = () => {
  const navigate = useNavigate();
    function addMeetupHandler(meetupData: Meetup){
        fetch(
            'https://reactcourse-d432c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
          navigate('/');
        });
    }

  return (
    <section>
      <h1>Add New meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
  );
}

export default NewMetupsPage;