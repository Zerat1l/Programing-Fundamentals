function songs(arr) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];
    let numberOfSongs = arr.shift();
    let typeSong = arr.pop();
    console.log(typeSong);

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);