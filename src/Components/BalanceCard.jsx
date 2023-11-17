import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function BalanceCard(props) {
  return (
    <Card
      variant="solid"
      color="primary"
      invertedColors
      sx={{
        boxShadow: 'lg',
        width: 400,
        overflow: 'auto',

      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Chip size="sm" variant="soft">
          Acount 4378
        </Chip>
      </Box>
      <Typography level="h5">
          Current Balance
        </Typography>
      <div>
        <Typography level="h2">
          ${props.balance}
        </Typography>
      </div>
      <CardContent>
        <Typography fontSize="sm" textColor="text.tertiary">
            ${props.availableCredit} / ${props.creditLimit} available credit
          </Typography>

      </CardContent>
      <CardActions>
        <Button variant="solid">Make Payment</Button>
      </CardActions>
    </Card>
  );
}