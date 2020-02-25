// var album = {
//     title: 'Black Album',
//     released: 1991,
//     showInfo: function () {
//         console.log(`Título do Album ${this.title}, lançado em ${this.released})`)
//     }
// }
// album.showInfo();

var album = new Object();
album.title = 'Black Album';
album.released = 1991;
album.showInfo = function () {
    console.log(`Título do Album ${this.title}, lançado em ${this.released}`)
}

album.showInfo();
console.log(album.title);
console.log(album.released);

album.tracks = ['Enter Sadman', 'The Unforgiven', 'Nothing Else Matters', 'One'];
album.showTracks = function () {
    this.tracks.forEach(function (value, keys) {
        console.log(value)
    });    
}

album.showTracks();