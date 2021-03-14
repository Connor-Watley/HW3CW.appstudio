let items = ["Crocheted Dog Toy", "Slow Feeder Bowl", "Pawz Grey Treat Jar", "Blue Sweet Dreams Thermal Pajamas", "Checker Chewy Vuiton Bowl", "Red Heart Sweater Dress", "Velvet Hair Bow - Sun Kissed", "Into the Wild Leash"]
let price = [10.00, 14.00, 20.00, 30.00, 32.00, 27.00, 12.00 , 27.00 ]
let wishList = []


Input1.oninput=function(){
  let userInput = Input1.value
wishList.push(items[userInput])
wishList.push(price[userInput])
}





Button1.onclick=function(){
  alert(`${wishList}`)
}


