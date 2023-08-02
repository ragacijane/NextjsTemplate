// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useContext } from 'react'
import { AbilityContext } from 'src/layouts/components/acl/Can'

const EmployeeHomePage = () => {
  const ability = useContext(AbilityContext)
  
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Create Awesome 🙌'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>This is your home page.</Typography>
            <Typography>
              Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
              Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
              wafer tart marzipan bonbon. Gingerbread jelly-o dragée chocolate.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

EmployeeHomePage.acl = {
    action: 'read',
    subject: 'employee-home-page'
  }

export default EmployeeHomePage
