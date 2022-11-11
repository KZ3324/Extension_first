async function fetchData() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    const record = await res.json()

    record['tickers'].forEach(e => {
        if (e['target'] == 'EUR') {
            result = e
        }
    });
    imageSrc = record['image']['small']
    document.getElementById('imageBitcoin').src = imageSrc
    document.getElementById('prixBitcoin').innerHTML = result['last']
}
fetchData();