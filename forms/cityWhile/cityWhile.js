let cities = []
let moreData = "yes"
let i = 0

while(moreData == "yes") {
   let cityName = prompt("Enter a city name")
   cityName.toLowerCase();
   cities.push(cityName);
   moreData = prompt("Enter yes to add more cities")
   }

while(i < cities.length) {
    console.log(cities[i])
    i++
    }

   
