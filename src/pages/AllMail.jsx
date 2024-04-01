import { Box, Input, Typography } from '@mui/material'
import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import { useSelector } from 'react-redux';
import Message from '../components/Message';
const AllMail = () => {
  const theme = useSelector((prev) => prev.theme);
  const msgs = [{
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  },
  {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  },
  {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  },
  {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  },
  {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  }, {
    mailid: "Beata@gmail.com",
    data: "Mar 7",
    msg: "I've Tried a lot and.",
    status: "interested",
    campaginName: "Campaign Name"
  },]
  return (
    <>
      <Box sx={{ border: "1px solid", display: "grid", gridTemplateColumns: "repeat(5,1fr)", height: "calc(100vh - 64px)" }}>
        <Box sx={{ border: "1px solid", padding: "4%" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid", padding: "1% 0" }}>
            <select name="workspace" id="workspace">
              <option value="ln's Workspace">All Inbox(s)</option>
              <option value="Tim's Workspace">Tim's Workspace</option>
            </select>
            <Box sx={{ padding: "2% 2%", borderRadius: "4px", backgroundColor: "#25262b", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <RefreshIcon sx={{ fontSize: "25px" }} />
            </Box>
          </Box>
          <Typography>25/25 Inboxes selected</Typography>
          {/* <Input type='text' placeholder='Search here..'/> */}
          <input type="text" style={{ width: "100%", borderRadius: "5px", padding: "2%" }} placeholder='Search here..' />
          <Box sx={{ overflow: "scroll" ,height:"70vh",overflowX:"hidden"}}>
            {
              msgs.map((ele, ind) => (
                <Message data={ele} />
              ))
            }
          </Box>
        </Box>
        <Box sx={{ border: "1px solid", gridColumn: "2/span 3" }}>

        </Box>
        <Box sx={{ border: "1px solid" }}>

        </Box>
      </Box>
    </>
  )
}

export default AllMail