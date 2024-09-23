const transectionHistory = document.getElementById('transection-history')
// blog
document.getElementById('blog').addEventListener('click',function(){
  window.location.href = 'blog.html'
})
// noakhali flood section
document.getElementById('noakhali-donation-btn').addEventListener('click',function(){
                    const currentBalance = parseFloat(document.getElementById('current-balance').innerText)
                   const noakhaliDonationAmount = parseFloat(document.getElementById('noakhali-donation-input').value)
                    const noakhaliDonationBalance = parseFloat(document.getElementById('noakhali-donation-balance').innerText)
                   if(noakhaliDonationAmount < 0 || currentBalance < noakhaliDonationAmount || isNaN(noakhaliDonationAmount)){
                                        alert('Invalid Donation Amount')
                                        const modal = document.getElementById('my_modal_1')
                                          modal.classList.add('hidden')
                                        return
                    }
                   
                    else{
                    document.getElementById('noakhali-donation-balance').innerText =  noakhaliDonationAmount + noakhaliDonationBalance
                    document.getElementById('current-balance').innerText =  currentBalance - noakhaliDonationAmount;
                    const modal = document.getElementById('my_modal_1')
                    modal.classList.remove('hidden')
                  const div = document.createElement('div');
                  div.className = 'border p-3 rounded-lg'
                  div.innerHTML = `
                  <p class= "text-gray-500 font-extrabold">${noakhaliDonationAmount} TK Donation for Flood at Noakhali, Bangladesh The recent floods in Noakhali have caused.</p>
                  <p class= "text-gray-500 font-extrabold">${new Date().toLocaleString()}</p>
                  `
                  transectionHistory.appendChild(div)
                   
                    }
                    
})

// feni flood section
document.getElementById('feni-donation-btn').addEventListener('click',function(){
                    const currentBalance = parseFloat(document.getElementById('current-balance').innerText)
                    const feniDonationAmount = parseFloat(document.getElementById('feni-donation-input').value)
                    const feniDonationBalance = parseFloat(document.getElementById('feni-donation-balance').innerText)
                    if(feniDonationAmount < 0 || currentBalance < feniDonationAmount || isNaN(feniDonationAmount)){
                      const modal = document.getElementById('my_modal_2')
                      modal.classList.add('hidden')
                                        alert('Invalid Donation Amount')
                                        return
                    }
                  else { document.getElementById('feni-donation-balance').innerText =  feniDonationAmount + feniDonationBalance
                    document.getElementById('current-balance').innerText =  currentBalance - feniDonationAmount
                    const modal = document.getElementById('my_modal_2')
                    modal.classList.remove('hidden')
                    const div = document.createElement('div');
                    div.className = 'border p-3 rounded-lg'
                    div.innerHTML = `
                    <p class= "text-gray-500 font-extrabold">${feniDonationAmount} TK Donation for Flood at Feni, Bangladesh The recent floods in Feni have caused.</p>
                    <p class= "text-gray-500 font-extrabold">${new Date().toLocaleString()}</p>
                    `
                    transectionHistory.appendChild(div)
                  }

})

// quata movement section
document.getElementById('quata-donation-btn').addEventListener('click',function(){
                    const currentBalance = parseFloat(document.getElementById('current-balance').innerText)
                    const quataDonationAmount = parseFloat(document.getElementById('quata-donation-input').value)
                    const quataDonationBalance = parseFloat(document.getElementById('quata-donation-balance').innerText)
                    if(quataDonationAmount < 0 || currentBalance < quataDonationAmount || isNaN(quataDonationAmount)){
                      const modal = document.getElementById('my_modal_3')
                      modal.classList.add('hidden')
                                        alert('Invalid Donation Amount')
                                        return
                    }
                  else { document.getElementById('quata-donation-balance').innerText =  quataDonationAmount + quataDonationBalance
                    document.getElementById('current-balance').innerText =  currentBalance - quataDonationAmount
                    const modal = document.getElementById('my_modal_3')
                    modal.classList.remove('hidden')
                    const div = document.createElement('div');
                    div.className = 'border p-3 rounded-lg'
                    div.innerHTML = `
                    <p class= "text-gray-500 font-extrabold">${quataDonationAmount} TK Donation for Quata Movement.</p>
                    <p class= "text-gray-500 font-extrabold">${new Date().toLocaleString()}</p>
                    `
                    transectionHistory.appendChild(div)
                  }
})



// history button click
document.getElementById('history').addEventListener('click',function(){
                   
                    common('transection-history')
                    commonColor('history')
                   
})

// donation button click
document.getElementById('donation').addEventListener('click',function(){
                   
               common('main')
               commonColor('donation')
                  
})


