import { Box, Typography } from '@mui/material'
import React from 'react'

const Message = ({ data }) => {
    // console.log(data);
    return (
        <Box sx={{height:"100px",display:"flex",justifyContent:"space-between",flexDirection:"column",borderBottom:"1px solid",marginBottom:"15px", borderLeft:"1px solid", padding:"0 2%"}}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Typography>{data.mailid}</Typography>
                <Typography>{data.data}</Typography>
            </Box>
            <Typography>{data.msg}</Typography>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <Typography>{data.status}</Typography>
                <Typography>{data.campaginName}</Typography>
            </Box>
        </Box>
    )
}

export default Message