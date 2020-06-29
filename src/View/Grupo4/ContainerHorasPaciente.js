import React, {Fragment} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Identify from './InscripcionHoras/Identify';
import TemporaryDrawer from './Navbar/Navbar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const ContainerHorasPaciente = () => {


    return(
        <Fragment>

            <div className="navbar">
                <TemporaryDrawer />
            </div>
            <Identify />

            
        </Fragment>
        
    )
}

export default ContainerHorasPaciente;