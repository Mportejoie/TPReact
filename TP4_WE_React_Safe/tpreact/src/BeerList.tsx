import React, { useState } from 'react';
import Beer from './Beer';
import { Container, Button, TextField, List, ListItem, Typography, Paper } from '@mui/material';


// @ts-ignore
const BeerList = ({ beers }) => {
    const [beerList, setBeerList] = useState(beers);
                                    //USESTATE => HOOK
    //LE HOOK CREER automatiquement setBeerList (donc useState creer le comportement de setBeerList
    // et setBeerList est une fonction pour mettre a jour beerList

    //useState(beers) va creer deux éléments : le premier (beerList ici) qui est la valeur de beers
    //le second est une fonction donc ici setBeerList pour mettre à jour l'état.

    const [newBeer, setNewBeer] = useState('');
    const [removeIndex, setRemoveIndex] = useState('');



    const addBeer = () => {
        setBeerList([...beerList, newBeer]);// "..." <- permet de concatener
        setNewBeer(''); // Réinitialise newBeer après l'ajout
    };

    const removeBeer = () => {
        const index = parseInt(removeIndex);
        // @ts-ignore
        const newBeerList = beerList.filter((_, i) => i !== index);
        setBeerList(newBeerList); setRemoveIndex(''); // Réinitialise removeIndex après la suppression
    };

    // @ts-ignore
    return (
        /*<div>
            <ul>
                {
                    beerList.map((beer: string, index: React.Key) => (
                    <Beer beerName={beer}/>
                ))}
            </ul>

            <textarea
                id="beerNameArea"
                value={newBeer}
                onChange={(e) => setNewBeer(e.target.value)} // MàJ texte newBeer
                placeholder="Enter beer name"
            />
            <button onClick={addBeer}>Add Beer</button>

            <input
                type="text"
                value={removeIndex}
                onChange={(e) => setRemoveIndex(e.target.value)} // MàJ index à supprimer
                placeholder="Enter index to remove"
            />
            <button onClick={removeBeer}>Remove Beer</button>
        </div>*/
        <Container>
            <Typography variant="h4" gutterBottom> Ma Liste de Bière </Typography>
            <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px' }}>
                <List>
                    {
                        beerList.map((beer:string, index : React.Key) => (
                            <ListItem key={index}>
                                <Beer beerName={`${index}. ${beer}`} />
                            </ListItem>
                            )
                        )
                    }
                </List>
            </Paper>
            <TextField id="beerNameArea"
                       label="Enter beer name"
                       value={newBeer}
                       onChange={(e) => setNewBeer(e.target.value)}
                       variant="outlined"
                       fullWidth margin="normal" />
            <Button variant="contained" color="primary" onClick={addBeer}> Add Beer </Button>
            <TextField id="removeIndex"
                       label="Enter index to remove"
                       value={removeIndex}
                       onChange={(e) => setRemoveIndex(e.target.value)}
                       variant="outlined"
                       fullWidth margin="normal" />
            <Button variant="contained" color="secondary" onClick={removeBeer}> Remove Beer </Button>
        </Container>
    );
};

export default BeerList;
