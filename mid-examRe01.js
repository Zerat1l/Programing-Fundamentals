function swimChamp(input) {

    let days = Number(input.shift());
    let pointsToCover = Number(input.shift());
    let swimmersCount = Number(input.shift());
    let hotelPriceForDay = Number(input.shift());
    let participationFee = Number(input.shift());
    
    let totalHotelFee = swimmersCount * hotelPriceForDay * days;
    let totalPraticipationFee = swimmersCount * participationFee;

    let allPoints = input;
    let expences = totalHotelFee + totalPraticipationFee;
    let points = 0;
    let prevDayPoints = 0;
   

    for(let i = 0; i < days;i++) {
        let currentPoints = Number(allPoints[i]);
        points += currentPoints;

    }
    for(let i = 1; i < allPoints.length;i++) {
        prevDayPoints += allPoints[i - 1] * 0.05;
    }
    points += prevDayPoints;

    if(pointsToCover <= points) {
        let sponsorCover = expences * 0.75;
        console.log(`Money left to pay: ${sponsorCover.toFixed(2)} BGN.`);
        console.log('The championship was successful!');
    } else {
        let sponsorCover = expences * 0.90;
        console.log(`Money left to pay: ${sponsorCover.toFixed(2)} BGN.`);
        console.log('The championship was not successful.');
    }   
}

swimChamp(["3",
"400",
"5",
"70.6",
"15.0",
"100.6",
"300.59",
"250.9"])

swimChamp(["2",
"600",
"3",
"100.8",
"50.5",
"100.68",
"80.1"])

