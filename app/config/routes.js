app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
      .state('home', {
         url: '/home',
         templateUrl: 'app/components/home/home.html',
         controller: 'HomeController',
         controllerAs: 'hc'
      })
      .state('view2', {
         url: '/banana',
         template: '<h1>HELLO FROM CHIM CHIM</h1> <a ui-sref="home">GO BACK</a> <a ui-sref="auth.dashboard">GO to dashboard</a>' 
      })
      .state('albums', {
          url: '/albums',
          controller: 'AlbumsController',
          templateUrl: 'app/components/albums/albums.html'
      })
      .state('album', {
          url: '/albums/:id',
          controller: 'AlbumController',
          templateUrl: 'app/components/albums/album.html',
          resolve: {
              album: function($stateParams, MusicService){
                  return MusicService.getAlbum($stateParams.id);
              }
          }
      })
      .state('auth', {
          abstract: true,
          template: '<ui-view></ui-view>',
          controller: function($state, AuthService){
              if(!AuthService.loggedIn){
                  $state.go('home');
              }
          },
      })
      .state('auth.dashboard', {
          url: '/dashboard',
          templateUrl: 'app/components/dashboard/dashboard.html',
          controller: 'DashboardController'
      }) 
})