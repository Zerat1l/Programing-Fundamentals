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
    
    for(let i = 0; i < numberOfSongs;i++) {
        let [songType, songName, songTime] = arr[i].split('_');
        let song = new Song(songType, songName, songTime);
        songs.push(song);
    }

    if(typeSong === 'all') {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }

}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )