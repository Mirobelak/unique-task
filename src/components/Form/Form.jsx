import React from 'react';
import { useForm } from "react-hook-form";
import "./Form.css"





export default function FormValidation() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div id='#form'>
          <div className="form-container">
            <div className="form-head">
          <h1>Contact Us</h1>
          <hr style={{width: "100px", color: "var(--main)"}} ></hr>
          </div>
  <div className='formik' >
  <form onSubmit={handleSubmit(onSubmit)}>
  <select id="subject" name="subject" >
      <option value="" disabled selected hidden>Subject</option>
      <option value="work">Work</option>
      <option value="info">Info</option>
      <option value="Contacts">Contacts</option>
    </select>
    <input type="email" id="email" name="email" placeholder="Email"
     {...register("email",
     {
         required: true,
         pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
     })}
    
    />
    {errors.email && <p style={{color: "red"}} >Please check the Email</p>}
    <textarea name="txt-area" rows="10" cols="42" 
              placeholder='Write Your Message Here...'>

    </textarea>
    <input type="submit" value="Submit"/>
  </form>
</div>
</div>








            </div>
    )
}