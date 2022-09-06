import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import React from 'react';
import Meetup from '../../models/metup';

const NewMeetupForm = (props:{onAddMeetup: (meetupData: Meetup) => void}) => {
    const titleInputRef = React.createRef<HTMLInputElement>();
    const imageInputRef = React.createRef<HTMLInputElement>();
    const addressInputRef = React.createRef<HTMLInputElement>();
    const descriptionInputRef = React.createRef<HTMLInputElement>();
    function submitHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const enteredTitle = titleInputRef.current;
        const enteredImage = imageInputRef.current;
        const enteredAddress = addressInputRef.current;
        const enteredDescripton = descriptionInputRef.current;

        const meetupData: Meetup = {
            title: enteredTitle!.value!,
            image: enteredImage!.value!,
            address: enteredAddress!.value!,
            description: enteredDescripton!.value!
        }
        props.onAddMeetup(meetupData);
    }


  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="image">Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" ref={addressInputRef}></input>
        </div>
        <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <input type="textarea" required id="description" ref={descriptionInputRef}></input>
        </div>
        <div className={classes.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
