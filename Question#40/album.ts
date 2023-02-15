

let Album = {
  artitstName: "",
  albumTitle : "",
  numberOfTracks : 0
}


function makeAlbum(names:string,title:string,noOfTrack?:number):typeof Album{

    Album.artitstName = names
    Album.albumTitle = title
    if(typeof noOfTrack !== 'undefined')
    Album.numberOfTracks=noOfTrack

    return Album

}


let album1 = makeAlbum("Argit Singh","Sad",3)

console.log("Album Title : %s \nArtist Name : %s \nNo of Tracks : %d",album1.albumTitle,album1.artitstName,album1.numberOfTracks)