import React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const PizzaCard = ({pizzaPlace, price}) => (
  <Card>
    <CardHeader 
    title={pizzaPlace}
    subHeader={price}
    />
    <CardContent>
      <Typography>
        
      </Typography>
    </CardContent>
  </Card>
)
export default PizzaCard