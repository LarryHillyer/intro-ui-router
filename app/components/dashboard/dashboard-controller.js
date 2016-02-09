app.controller('DashboardController', function($scope, MusicService){
    $scope.test = 'hello dashboard';
    $scope.albums = MusicService.getAlbums();
})