import React from 'react'
import QRCode from 'qrcode.react';


function MyqrCode({text}) {
    return <QRCode value={text} />;
}

export default MyqrCode
