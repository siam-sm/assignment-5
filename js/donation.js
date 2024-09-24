
         document.getElementById('noa-add-money')
        .addEventListener('click', function () {
            const donationAmount = document.getElementById('input-money-value');
            const sectionBalance = document.getElementById('noy-main-balance').innerText;
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
                document.getElementById('noy-main-balance').innerText = newSectionBalance;

                const p=document.createElement('p')
                p.innerText=`Added: ${donationAmount} tk.NewBalance: ${newSectionBalance}`
                console.log(p);
                document.getElementById('donation-container').appendChild(p)
                

                
            }
        })

    
