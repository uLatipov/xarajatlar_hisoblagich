const dollar = 9433.34
const euro = 10354.03
const goDollar = parseInt(dollar * 500) 
const goEuro = parseInt(goDollar/euro)
const hotelDollar= parseInt(dollar*250)
const hotelEuro=parseInt(hotelDollar/euro)
const museumEuro=parseInt(euro*120)
const museumDollar=parseInt(museumEuro/dollar)
const harajatlar=parseInt(goDollar+hotelDollar+museumDollar)
let pulsum= prompt(`sizda qancha pul borr?? mana sanga yordam agar sanda ${harajatlar}sum bomasa boraman dmagn` )

if (pulsum >= harajatlar){
    alert(`oq yo'l Alisher   sizning hisobingizda ${parseInt(pulsum/dollar)}$ , ${parseInt(pulsum/euro)}£ va ${pulsum}sum bor, harajatlar ${harajatlar}sum, yoki ${parseInt(harajatlar/dollar)}$ , yoki ${parseInt(harajatlar/euro)}£ `)
}
else{
    alert(`senda ${pulsum}sum bor, lekin puling yetmaydi borishinga((`)
}