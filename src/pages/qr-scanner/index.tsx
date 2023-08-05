// ** React Imports
import { useContext } from 'react'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import authConfig from 'src/configs/auth'


// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import {QrScannerWrap} from '../../@core/components/qr-code'

const QRScannerPage = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)

  return (
    <Grid container spacing={6}>
      <Grid item md={6} xs={12}>
        <Card>
          <CardHeader title='QR Scanner' />
          <CardContent>
            <Typography sx={{ mb: 4 }}>Scan QR Code for check-in</Typography>
            {/* <QrScanner onError={(error) => console.log(error?.message)} onDecode={(result) =>  axios
              .post(authConfig.sessionEndpoint, {code: result})
              .then(response => { })}/> */}
              <QrScannerWrap />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

QRScannerPage.acl = {
  action: 'read',
  subject: 'qr-scanner-page'
}

export default QRScannerPage
