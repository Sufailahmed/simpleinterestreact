
import Stack from '@mui/material/Stack';
import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {

  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setyear] = useState(0);
  const [result, setResult] = useState(0)
  const [isPrinciple,setIsPrinciple]=useState(true)
  const [isInterest,setisinterest]=useState(true)
  const[isYear,setIsYear]=useState(true)
  const calculateInterest = (e) => {
    e.preventDefault()
    const result=(principle*interest*year)/100;
    setResult(result)

  }
  const handleReset=()=>{
    setPrinciple(0);
    setInterest(0);
    setResult(0);
    setyear(0);
  }
  const validate=(e)=>{
    const {name,value}=e.target;
   
    if(name==='principlevalue'){
      setPrinciple(value);
      let res=(!!value.match(/^[0-9]+$/));
      if(res===true){
        setIsPrinciple(true)
      }
      else{
        setIsPrinciple(false)
      }

    }
    else if(name==='interestField'){
      setInterest(value)
      let res=(!!value.match(/^[0-9]+$/));
      if(res===true){
        setisinterest(true)
      }
      else{
        setisinterest(false)
      }

    }
    else{
    setyear(value)
  let res=(!!value.match(/^[0-9]+$/));
  if(res===true){
    setIsYear(true)
    
  }
  else{
    setIsYear(false)
  }
    
  }
}

  return (
    <>
      <div className="d-flex justify-content-center align-items-center w-100 mt-5" style={{ height: "90vh" }}>
        <div className='bg-light p-5 rounded' style={{ width: "500px"}}>
          <h1>Simple interest</h1>
          <p>Calculate you're simple interest easily</p>
          <div style={{ height: "150px" }} className='bg-warning mt-3 rounded d-flex justify-content-center align-items-center flex-column'>
            <h2 value={result}>&#8377;{result} </h2>
            <p>Total simple interest</p>
          </div>
          <form action="" className='mt-3' onSubmit={calculateInterest}>
            <TextField className='w-100' id="outlined-basic" label="&#8377;Prinicle Amount" variant="outlined" value={principle}
            name="principlevalue"
            onChange={(e)=>validate(e)}/>
            {
              !isPrinciple &&
              <div className='text-danger'>
                <p>Invalid Input</p>
              </div>
            }
            <TextField className='w-100 mt-2' id="outlined-basic" label="Interest" variant='outlined' 
            name='interestField'
            value={interest}
            onChange={(e)=>validate(e)}  />
             {
              !isInterest &&
              <div className='text-danger'>
                <p>Invalid Input</p>
              </div>
            }
            <TextField className='w-100 mt-2' id="outlined-basic" label="Year(yr)" variant="outlined"
            name='totalyear'
            onChange={(e) => validate(e)} 
            value={year}/>
               {
              !isYear &&
              <div className='text-danger'>
                <p>Invalid Input</p>
              </div>
            }
            <Stack direction="row" spacing={2} className='mt-3'>
              <Button disabled={isPrinciple&& isInterest && isYear?false:true} variant="contained" className='bg-primary' style={{ height: "50px", width: "200px ", color:"white" }} type='submit'>Calculate</Button>
              <Button variant="contained" className='bg-success' style={{ height: "50px", width: "200px", color:"white" }} onClick={handleReset}>Reset</Button>
            </Stack>
          </form>

        </div>

      </div>
    </>

  );
}

export default App;