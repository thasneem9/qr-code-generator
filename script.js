document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('url').value;

    const qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = '';

    QRCode.toDataURL(url, function (err, url) {
        if (err) throw err;
        const qrImg = document.createElement('img');
        qrImg.src = url;
        qrCodeDiv.appendChild(qrImg);
    });
});

