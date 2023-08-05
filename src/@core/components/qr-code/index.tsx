import {QrScanner} from '@yudiel/react-qr-scanner';
import axios from 'axios';
import authConfig from 'src/configs/auth'

import React, { useState } from 'react';

export function QrScannerWrap() {
  const [isScanning, setIsScanning] = useState(true);

  function handleScan(result: any) {
    const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
    axios
      .post(authConfig.sessionEndpoint, { code: result },{headers: {
        Authorization: 'Bearer '+storedToken
      }} )
      .then(response => {
        setIsScanning(false);
        setTimeout(() => setIsScanning(true), 60 * 1000); // Re-enable scanning after 1 minute
      });
  }

  function handleError(error: any) {
    console.log(error?.message);
  }

  return isScanning ? (
    <QrScanner onError={handleError} onDecode={handleScan} />
  ) : (
    <div>
        Scanning completed <br></br>
        Scanning is paused for 1 minute
     </div>
  );
}






