import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function SelectLabels() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={{ textAlign: 'left', color: 'black' }}>

            <FormControl sx={{ m: 1, minWidth: 150, textAlign: 'left', backgroundColor: 'white' }}>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <em>Ninguna</em>
                    <MenuItem value="Valentina">Valentina</MenuItem>
                    <MenuItem value="Patricia">Patricia</MenuItem>
                    <MenuItem value="Javiera">Javiera</MenuItem>
                </Select>


                {/* <Select
                    value={profesional}
                    onChange={(e) => setProfesional(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Ninguna</em>
                    </MenuItem>
                    {<MenuItem value={10}>Valentina</MenuItem>
          <MenuItem value={20}>Patricia</MenuItem>
          <MenuItem value={30}>Javiera</MenuItem>}
                </Select> */}
            </FormControl>
        </div>
    );
}
