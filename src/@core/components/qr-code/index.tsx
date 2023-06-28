import {QrScanner} from '@yudiel/react-qr-scanner';

const qrScanenr = () => {
    return (
        <QrScanner
            onDecode={(result) => console.log(result)}
            onError={(error) => console.log(error?.message)}
        />
);}