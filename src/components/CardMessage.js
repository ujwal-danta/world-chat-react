import React, { forwardRef } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "../App.css"

const CardMessage = forwardRef(({myMessage,username},ref) => {
    return (
      <div ref={ref} className="parent">
       <Card className={username===myMessage.username ? "isUser" : "isNotUser"}>
        <CardContent>
          <Typography className="text" gutterBottom>
            {!(username===myMessage.username) && `${myMessage.username} :`}  {myMessage.message} 
          </Typography>
        </CardContent>
      </Card>
      </div>
      
    )
})

export default CardMessage
