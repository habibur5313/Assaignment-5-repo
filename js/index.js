const currentBalance = parseFloat(document.getElementById('current-balance').innerText)




document.getElementById('noakhali-donation-btn').addEventListener('click',function(){
                    const noakhaliDonationAmount = parseFloat(document.getElementById('noakhali-donation-input').value)
                    const noakhaliDonationBalance = parseFloat(document.getElementById('noakhali-donation-balance').innerText)
                    if(noakhaliDonationAmount < 0){
                                        alert('Invalid Amount')
                                        return
                    }
                    
                    
                    document.getElementById('noakhali-donation-balance').innerText =  noakhaliDonationAmount + noakhaliDonationBalance
                    document.getElementById('current-balance').innerText =  currentBalance - noakhaliDonationAmount
                   
                    

                    
                    
})


