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
        <div style={{ textAlign: 'left', color: 'black', }}>

            <FormControl sx={{ m: 1, minWidth: 150, textAlign: 'left', backgroundColor: 'white' }}>
                <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="">
                        <em>Ninguna</em>
                    </MenuItem>
                    <MenuItem value={10}>14:00</MenuItem>
                    <MenuItem value={20}>15:00</MenuItem>
                    <MenuItem value={30}>16:00</MenuItem>
                    <MenuItem value={10}>17:00</MenuItem>
                    <MenuItem value={20}>18:00</MenuItem>
                    <MenuItem value={30}>19:00</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
