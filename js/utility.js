function common(id){
                    document.getElementById('main').classList.add('hidden')
                    document.getElementById('transection-history').classList.add('hidden')

                    document.getElementById(id).classList.remove('hidden')
}
function commonColor (id){
                    document.getElementById('donation').classList.remove('bg-[#B4F461]')
                    document.getElementById('history').classList.remove('bg-[#B4F461]')

                    document.getElementById(id).classList.add('bg-[#B4F461]')
}