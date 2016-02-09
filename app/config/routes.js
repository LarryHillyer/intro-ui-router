app.config(function($stateProvider){
    
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
          template: '<h1>YOU ARE AWESOME and Authenticated</h1>'
      }) 
})