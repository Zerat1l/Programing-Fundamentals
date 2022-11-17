function piccolo(input) {

    let parkingLot = new Map();
    let fullList = input.map(el => el.split(', '));
    
    fullList.forEach(element => {
        let command = element[0];
        let carnumber = element[1];

        if(command === 'IN') {
            parkingLot.set(carnumber,command)
        }else if(command === 'OUT') {
            parkingLot.delete(carnumber)
        }
    });

    let sorted = Array.from(parkingLot)
    sorted.sort((a,b) => a[0].localeCompare(b[0]))

    if(parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (const el of sorted) {
            console.log(el[0]);
        }
    }
    
}

piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);




