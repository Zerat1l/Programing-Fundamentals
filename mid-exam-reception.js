function softUniReception(arr) {
    arr = arr.map(Number);
    let studentsPerHour = arr[0] + arr[1] + arr[2];
    let studentsCount = arr[3]
    let hourCount = 0;
    
    while(studentsCount > 0) {
        
        hourCount++;
        if(hourCount % 4 == 0 && hourCount != 0) {
            continue;
        } else {
            studentsCount -= studentsPerHour;
        }
    }
    
    console.log(`Time needed: ${hourCount}h.`);
}

softUniReception(['1','2','3','45'])
// softUniReception([5,6,4,20])