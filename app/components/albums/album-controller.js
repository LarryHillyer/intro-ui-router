app.controller('AlbumController', function($scope, $stateParams, MusicService){
    $scope.album = MusicService.getAlbum($stateParams.title);
});



