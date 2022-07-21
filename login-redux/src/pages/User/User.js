import { Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/user/UserSlice'

export default function User() {
  const userDetail = useSelector(selectUser)

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box>
            <strong>UserName: </strong>
            {userDetail.userName}
          </Box>
          <Box>
            <strong>Phone Number: </strong>
            {userDetail.phoneNumber}
          </Box>
        </CardContent>
      </Card>
    </div>
  )
}
