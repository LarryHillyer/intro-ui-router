app.controller('AlbumsController', function($scope, MusicService){
    $scope.albums = MusicService.getAlbums();
})
