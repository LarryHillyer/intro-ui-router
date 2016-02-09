app.service('MusicService', function(){
    var albums = [{
        id: '123GF749',
        title: 'AFD',
        artist: 'G&R',
        albumArt: 'https://i.ytimg.com/vi/auodBtahBIM/hqdefault.jpg',
        songs: [{track: 1,
            title: 'Welcome To The Jungle',
            runTime: '4:34'
            },{track: 1,
            title: 'It\'s So Easy',
            runTime: '4:34'
            },{track: 1,
            title: 'Nightrain',
            runTime: '4:34'
            },{track: 1,
            title: 'Out Ta Get Me',
            runTime: '4:34'
            },{track: 1,
            title: 'Mr. Brownstone',
            runTime: '4:34'
            },{track: 1,
            title: 'Paradise City',
            runTime: '4:34'
            }]
    },{
        id: 'SR71',
        title: 'And Justice for All',
        artist: 'Metallica',
        albumArt: 'https://cbsradionews.files.wordpress.com/2013/08/metallica-and-justice-for-all.jpg',
        songs: [{track: 1,
            title: 'Jungle Fever',
            runTime: '4:34'
            },{track: 1,
            title: 'It\'s So Easy',
            runTime: '4:34'
            },{track: 1,
            title: 'Nightrain',
            runTime: '4:34'
            },{track: 1,
            title: 'Out Ta Get Me',
            runTime: '4:34'
            },{track: 1,
            title: 'Mr. Brownstone',
            runTime: '4:34'
            },{track: 1,
            title: 'Paradise City',
            runTime: '4:34'
            }]
    },{
        id: '666',
        title: 'Workingman\'s Dead',
        artist: 'The Grateful Dead',
        albumArt: 'http://991.com/newgallery/Grateful+Dead+Workingmans+Dead+592855.jpg',
        songs: [{track: 1,
            title: 'You\'re Not Welcome To The Jungle',
            runTime: '4:34'
            },{track: 1,
            title: 'It\'s So Easy',
            runTime: '4:34'
            },{track: 1,
            title: 'Nightrain',
            runTime: '4:34'
            },{track: 1,
            title: 'Out Ta Get Me',
            runTime: '4:34'
            },{track: 1,
            title: 'Mr. Brownstone',
            runTime: '4:34'
            },{track: 1,
            title: 'Paradise City',
            runTime: '4:34'
            }]
    }]
    
    this.getAlbums = function(){
        return albums;
    }
	
    this.getAlbum = function(title){
        title = title.split('-').join(' ').toLowerCase();
        for (var i = 0; i < albums.length; i++) {
            var currentAlbum = albums[i];
            if(currentAlbum.title.toLowerCase() === title){
                return currentAlbum;
            }
        }
    }
         
}) 