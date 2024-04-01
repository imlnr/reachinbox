import { Box, Typography } from '@mui/material'
import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import { useSelector } from 'react-redux';
const AllMail = () => {
  const theme = useSelector((prev) => prev.theme);
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