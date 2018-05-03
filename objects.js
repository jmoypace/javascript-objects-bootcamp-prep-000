var playlist={artistname:"song"};
function updatePlaylist(playlist,artistname,songTitle){
  playlist[artistname]=songTitle
}
function removeFromtPlaylist(playlist,artistname){
  delete playlist.artistname;
}