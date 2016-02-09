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
         template: '<h1>HELLO FROM CHIM CHIM</h1> <a ui-sref="home">GO BACK</a>' 
      }) 
})