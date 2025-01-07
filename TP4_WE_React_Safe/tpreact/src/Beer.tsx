import * as React from 'react';
import {Typography} from "@mui/material";

interface Biere {
    beerName: string;
}

//COMPOSANT FONCTIONNEL IMPLEMENTANT L'INTERFACE
const Beer: React.FunctionComponent<Biere> = (binouze) => {
    return <Typography variant="body1">{binouze.beerName}</Typography>;
};

export default Beer;
