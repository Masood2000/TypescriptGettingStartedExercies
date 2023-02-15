
var places:String[]
places=["United States","Turkey","Egypt","Russia","Austrailia"]

console.log("........... I would like to visit the Following Places ..............")

for(let place of places){

    console.log(place)

}

var sortedArray:String[] = places.slice().sort()
var reversedPlaces:String[] = sortedArray.slice().reverse()

console.log("Array in Alphabetical Order without Changing Orginal Array")
for(let place of sortedArray){

    console.log(place)

}

console.log("...........  Original Array  ...........")
for(let place of places){

    console.log(place)

}

console.log("Array in Reversed Alphabetical Order without Changing Orginal Array")

for(let place of reversedPlaces){

    console.log(place)

}

console.log("...........  Original Array  ...........")
for(let place of places){

    console.log(place)

}

places.reverse();

console.log("...........  Original Array after Reversing ...........")
for(let place of places){

    console.log(place)

}
places.reverse();

console.log("...........  Original Array after again Reversing ...........")
for(let place of places){

    console.log(place)

}

places.sort();

console.log("...........  Original Array after Sorting...........")
for(let place of places){

    console.log(place)

}

places.reverse()
console.log("...........  Original Array after reverse Sorting...........")
for(let place of places){

    console.log(place)

}
