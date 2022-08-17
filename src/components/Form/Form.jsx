import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import TextareaAutosize from 'react-textarea-autosize';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Form.css"





export default function FormValidation() {
  const [subject, setSubject] = React.useState('');

  const handleChange = (event) => {
    setSubject(event.target.value);
  };


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

 
    
    return (
        <div id='#form' >
          <h1 style={{textAlign: "center"}} >Contact Us</h1>
          <hr style={{width: "100px"}} ></hr>
            <Form className='form-all' onSubmit={handleSubmit(onSubmit)}>
            <Box  sx={{ minWidth: 120 }}>
      <FormControl className='select'  >
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subjbect"
          onChange={handleChange}
        >
          <MenuItem value={10}>Work</MenuItem>
          <MenuItem value={20}>Help</MenuItem>
          <MenuItem value={30}>Info</MenuItem>
        </Select>
      </FormControl>
    </Box>
                <Form.Field  >
                    <input className='email-form'
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p style={{color: "red"}} >Please check the Email</p>}
                <TextareaAutosize placeholder='Write your message' className='txt' />
                <Button className='btn-s' type='submit'>Submit</Button>
            </Form>
        </div>
    )
}