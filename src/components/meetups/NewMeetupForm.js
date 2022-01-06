import classes from './NewMeetupForm.module.css';
import Card from '../ui/Card';

function NewMeetupForm(rops){
    return (
        <Card >
            <form className={classes.form} >
                <div className={classes.control} >
                    <label htmlFor='title' >Meetup Title </label>
                    <input type="text"  reqcuired id='title' />
                </div>
                <div className={classes.control} >
                    <label htmlFor='image' >Meetup Title </label>
                    <input type="url"  required id="image" />
                </div>
                <div className={classes.control} >
                    <label htmlFor='address' >Address </label>
                    <input type="text"  required id="address" />
                </div>
                <div className={classes.control} >
                    <label htmlFor='description' >description</label>
                    <textarea  required id="description" rows="5" />
                </div>
                <div className={classes.actions} >
                    <button type='button'>
                            Add Meetup
                    </button>
                </div>
            </form>

        </Card>
    );
}

export default NewMeetupForm;