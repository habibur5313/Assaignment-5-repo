// noakhali flood section
document.getElementById('noakhali-donation-btn').addEventListener('click',function(){
                    const currentBalance = parseFloat(document.getElementById('current-balance').innerText)
                    const noakhaliDonationAmount = parseFloat(document.getElementById('noakhali-donation-input').value)
                    const noakhaliDonationBalance = parseFloat(document.getElementById('noakhali-donation-balance').innerText)
                    if(noakhaliDonationAmount < 0 || currentBalance < noakhaliDonationAmount){
                                        alert('Invalid Amount')
                                        return
                    }
                    document.getElementById('noakhali-donation-balance').innerText =  noakhaliDonationAmount + noakhaliDonationBalance
                    document.getElementById('current-balance').innerText =  currentBalance - noakhaliDonationAmount
})

// feni flood section
document.getElementById('feni-donation-btn').addEventListener('click',function(){
                    const currentBalance = parseFloat(document.getElementById('current-balance').innerText)
                    const feniDonationAmount = parseFloat(document.getElementById('feni-donation-input').value)
                    const feniDonationBalance = parseFloat(document.getElementById('feni-donation-balance').innerText)
                    if(feniDonationAmount < 0 || currentBalance < feniDonationAmount){
                                        alert('Invalid Amount')
                                        return
                    }
                    document.getElementById('feni-donation-balance').innerText =  feniDonationAmount + feniDonationBalance
                    document.getElementById('current-balance').innerText =  currentBalance - feniDonationAmount
})

// quata movement section
document.getElementById('quata-donation-btn').addEventListener('click',function(){
                    const currentBalance = parseFloat(document.getElementById('current-balance').innerText)
                    const quataDonationAmount = parseFloat(document.getElementById('quata-donation-input').value)
                    const quataDonationBalance = parseFloat(document.getElementById('quata-donation-balance').innerText)
                    if(quataDonationAmount < 0 || currentBalance < quataDonationAmount){
                                        alert('Invalid Amount')
                                        return
                    }
                    document.getElementById('quata-donation-balance').innerText =  quataDonationAmount + quataDonationBalance
                    document.getElementById('current-balance').innerText =  currentBalance - quataDonationAmount
})

// history button click
document.getElementById('history').addEventListener('click',function(){
                    const history = document.getElementById('history');
                    const donation = document.getElementById('donation')
                    const noakhaliFloodSection = document.getElementById('noakhali-flood-section');
                    const feniFloodSection = document.getElementById('feni-flood-section');
                    const quataMovementSection = document.getElementById('quata-section');
                    noakhaliFloodSection.classList.add('hidden')
                    feniFloodSection.classList.add('hidden')
                    quataMovementSection.classList.add('hidden')
                    history.classList.add('bg-[#B4F461]')
                    donation.classList.remove('bg-[#B4F461]')
                   
                    
})

// donation button click
document.getElementById('donation').addEventListener('click',function(){
                    const donation = document.getElementById('donation');
                    const history = document.getElementById('history')
                    const noakhaliFloodSection = document.getElementById('noakhali-flood-section');
                    const feniFloodSection = document.getElementById('feni-flood-section');
                    const quataMovementSection = document.getElementById('quata-section');
                    noakhaliFloodSection.classList.remove('hidden')
                    feniFloodSection.classList.remove('hidden')
                    quataMovementSection.classList.remove('hidden')
                    history.classList.remove('bg-[#B4F461]')
                    donation.classList.add('bg-[#B4F461]')

})


