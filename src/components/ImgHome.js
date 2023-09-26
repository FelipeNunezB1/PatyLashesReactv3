/* import React from 'react';
/* import 'antd/dist/c'; */
import './styles.css';
/* import { Carousel } from 'antd'; */
import CardMedia from '@mui/material/CardMedia';
import PatyLashes from '../assetsimagescss/images/PatyLashes.jpg'



const contentStyle = {
    maxHeight: '550px',
    color: 'black',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App = () => (
    <div>
         <h3 style={{contentStyle,  borderRadius: '50px'}}>
                    <CardMedia
                        component="img"
                        style={{borderRadius: '50px'}}
                        image={PatyLashes}
                        alt="Paella dish"
                    />
                </h3>
    </div>
 
);

export default App; 