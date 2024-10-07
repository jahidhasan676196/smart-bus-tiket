const seatClass =document.getElementsByClassName('kbd');

for(seat of seatClass){
    seat.addEventListener('click',function(e){
        const targetText= e.target
        const addBgColor=targetText.classList.add('bg-[#1DD100]');
        // const addDisabled=targetText.classList.add('');
        
      // update tiket
        const totalTiket =getCovertedValue('current-seat')
        const currentTiket=totalTiket-1;
        addedTheValueById('current-seat',currentTiket)
       
      // add card
      const name =e.target.innerText
      const price =getCovertedValue('per-tiket')
        
      const addDiv= document.getElementById('added-tiket')
      const createDiv =document.createElement('div')
      createDiv.classList.add('flex')
      createDiv.classList.add('justify-between')
      const p =document.createElement('p')
      p.innerText=name
      const p2 =document.createElement('p')
      p2.innerText='Economy';
      const p3 =document.createElement('p')
      p3.innerText =price;
      createDiv.appendChild(p)
      createDiv.appendChild(p2)
      createDiv.appendChild(p3)
      addDiv.appendChild(createDiv)
     
      
      // total price
     const perTiket =getCovertedValue('per-tiket')
     const totalPriceValue =getCovertedValue('total-price')
     const totalPrice =perTiket+totalPriceValue;
     addedTheValueById('total-price',totalPrice)

    //  grand total
    calculateGrandTotal(totalPrice)
    })
}

// converted value
function getCovertedValue(id){
  const currentSeat=  document.getElementById(id);
  const currentValue =currentSeat.innerText;
  const value =parseInt(currentValue);
  return value;
}

// added the value 
function addedTheValueById(id,value){
    const getId =document.getElementById(id);
    const numberValue =parseInt(value)
    getId.innerText=numberValue;
}

// grand total
function calculateGrandTotal(totalPrice){
 const value= document.getElementById('grand-total').innerText=totalPrice;
}
// copun input field
function getVaule(v){
 const total= document.getElementById('grand-total').innerText
 const tatalVale =parseInt(total)
  const copunValue = document.getElementById('copun-feld').value
   if(copunValue=='NEW15'){
    const newvalue =tatalVale-tatalVale*15/100;
    document.getElementById('grand-total').innerText=newvalue;
   }
   
   else if(copunValue=='COUPLE20'){
    const newvalue2 =tatalVale-tatalVale*20/100;
    document.getElementById('grand-total').innerText=newvalue2;
   }
   
 }



 const phoneValue =document.getElementById('phn-number')
 const phonetext=phoneValue.innerText
console.log(phonetext)

