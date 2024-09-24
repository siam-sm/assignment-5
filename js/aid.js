 document.getElementById('aid-add-money')
.addEventListener('click', function () {
    const donationAmount = document.getElementById('input-aid-donation');
    const sectionBalance = document.getElementById('aid-main-money').innerText;
    const balance = document.getElementById('main-balance').innerText;
    if (donationAmount.value <= 0 && donationAmount !== 'number') {
        alert('Invalid');
    }
    else if (donationAmount.value > balance) {
        alert('Not enough money')
    }
    else {
        const newBalance = parseFloat(balance) - parseFloat(donationAmount.value);
        const newSectionBalance = parseFloat(sectionBalance) + parseFloat(donationAmount.value);
        document.getElementById('main-balance').innerText = newBalance;
        document.getElementById('aid-main-money').innerText = newSectionBalance;

        
    }
})