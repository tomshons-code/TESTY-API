const apiUrl = 'https://wl-api.mf.gov.pl/api';

function searchByNip() {
    const nip = document.getElementById('nipInput').value;
    const currentDate = new Date().toISOString().split('T')[0];
    axios.get(`${apiUrl}/search/nip/${nip}?date=${currentDate}`)
        .then(response => {
            document.getElementById('nipResult').innerText = JSON.stringify(response.data, null, 2);
        })
        .catch(error => handleApiError(error, 'nipResult'));
}

function searchByBankAccount() {
    const bankAccount = document.getElementById('bankAccountInput').value;
    const currentDate = new Date().toISOString().split('T')[0];
    axios.get(`${apiUrl}/search/bank-account/${bankAccount}?date=${currentDate}`)
        .then(response => {
            document.getElementById('bankAccountResult').innerText = JSON.stringify(response.data, null, 2);
        })
        .catch(error => handleApiError(error, 'bankAccountResult'));
}

function searchByRegon() {
    const regon = document.getElementById('regonInput').value;
    const currentDate = new Date().toISOString().split('T')[0];
    axios.get(`${apiUrl}/search/regon/${regon}?date=${currentDate}`)
        .then(response => {
            document.getElementById('regonResult').innerText = JSON.stringify(response.data, null, 2);
        })
        .catch(error => handleApiError(error, 'regonResult'));
}

function handleApiError(error, resultElementId) {
    console.error('Błąd podczas wyszukiwania:', error);
    document.getElementById(resultElementId).innerText = 'Błąd podczas wyszukiwania';
}
