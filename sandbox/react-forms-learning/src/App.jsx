// to use react hooks form we need to install the react hooks form package from npm 
// we need to add the line const{....} = useForm at the start beacuse then only we can use these funcitons 
// now the form has the following states/utilty in it that can be used 

// register --> we have to link the fields of the form to the states provided by the react forms, in order to make it more useable for error handling perform validation etc. register is used to link the filed of the form to the state of the form, what happens here is when we use register we tell react that we have named this field xyz and have registerd it with the form. now everything we do to the filed will be tracked by the forms 

//handleSubmit--> handle submit is used when we have to submit the form and for this we place onSubmit action in the form tag and in that we call the handleSubmit, which call the function that we have created that will do what we wanted when the form is submitted. handle submit will provide the data to onSubmit, the data is the data in the form 

// errors (validation) --> in react form we can also add validation to the field of the form. this means we can add the condition that must be met for the field input to be valid(oterwise form will not be submitted). we place validation along with the register. to place a validation we can use required, minlenght, maxlength according to the reuirement, if we want to show a messsege for the validation not meeting then we will use message and then in the end of the field we have to mention error.message && <P></p> consditional statement. we can aplly style to the error message by giving it a class when the error occurs and then target the class in the app.css

//isSubmitting --> it is used to show that the form is in submiting state or not. if yes then it is true else false. using this we can disable the submit button while the form is submitting. this helps in reducing the multiple submission


import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {

    // here we have simulated an api call 
    await new Promise((resolve) => setTimeout(resolve, 5000))

    console.log('submitting the form', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div>
        <label >first name:</label>
        <input className={errors.firstName ? 'input-error' : ""}
          {...register('firstName',
            {
              required: true,
              minLength: { value: 3, message: 'min length should be 3' },
              maxLength: { value: 6, message: 'max length should be 6' },
            })} />
        {errors.firstName && <p className='error-message'>{errors.firstName.message}</p>}
      </div>

      <br />

      <div>
        <label >middle name:</label>
        <input {...register('middleName')} />
      </div>

      <br />

      <div>
        <label >last name: </label>
        <input {...register('lastName')} />
      </div>

      <br />

      <input type="submit" disabled={isSubmitting} value={isSubmitting ? 'the form is submitting' : 'submit'} />

    </form>
  )
}

export default App


function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Component that persists favourite color
function App() {
  const [color, setColor] = useLocalStorage('color', '');

  return (
    <>
    
    <p>color: {color}</p>
    <button onClick={setColor(red)}>change color</button>
    
    </>
  );
}
