
const btn = document.getElementById('fai-add-money');
btn.addEventListener('click', function () {
    const donationAmount = document.getElementById('input-fai-donation');
    const sectionBalance = document.getElementById('fai-main-money').innerText;
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
        document.getElementById('fai-main-money').innerText = newSectionBalance;

        
    }
})
