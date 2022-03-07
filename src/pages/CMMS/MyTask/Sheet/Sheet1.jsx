import React from 'react'
import './Sheet.css'
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material'
import { ArrowBack } from '@mui/icons-material';
import engine from "../../../../components/Assets/engine.png"

export default function Sheet1() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
      <div className='SheetContainer'>
        <Button className='Bt-Back' variant="contained" href="/Task" startIcon={<ArrowBack />}>
            Back
        </Button>
        <h2 className='TitleSheet'>TPM Check Sheet</h2>
        <div className="ContentSheet">
            <h5 className="NameSheet">Equipment Name</h5>
            <p className="TextSheet">Turn Table 9</p>  
        </div>

        <div className="ContentSheet">
            <h5 className="NameSheet">Equipment Number</h5>
            <p className="TextSheet">IND-ETM/000-123</p>  
        </div>
          
        <div className="ContentSheet">
            <h5 className="NameSheet">Part Name</h5>
            <FormControl sx={{ minWidth: 80 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Part</InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Motor</MenuItem>
                <MenuItem value={21}>Motor one</MenuItem>
                <MenuItem value={22}>Motor Two</MenuItem>
                </Select>
            </FormControl> 
        </div>  

        <div className="ContentSheet">
            <img className='SheetImg' src={engine} alt="Engine"/>
        </div>

        <div className="ContentSheetDesc">
            <h5 className="NameSheet">Check Content</h5>
            <p className="TextSheet">Beputar Normal, Tidak Ada Suara Abnormal (Noise)</p>  
        </div>

        <div className="ContentSheet">
            <h5 className="NameSheet">Result</h5>
            <FormControl sx={{ minWidth: 100 }}>
                <InputLabel id="demo-simple-select-autowidth-label2">Result </InputLabel>
                <Select
                labelId="demo-simple-select-autowidth-label2"
                id="demo-simple-select-autowidth2"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Age"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={20}>OK</MenuItem>
                <MenuItem value={30}>Fault, Abnormal</MenuItem>
                <MenuItem value={40}>Repair Finish</MenuItem>
                <MenuItem value={50}>Not ON</MenuItem>
                </Select>
            </FormControl> 
          </div>

        <div className="Bt-Sheet">
            <Button variant="contained" size="medium">
                Save
            </Button>  
        </div>
        <div className="Bt-Sheet">
            <Button className='Sheet-Tis' variant="contained" size="medium">
                TIS
            </Button>  
        </div>
          

          

    </div>
  )
}