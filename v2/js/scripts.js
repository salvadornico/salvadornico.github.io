var thingBox = document.getElementById('thingBox')

var thingsList = [
    ['https://www.tested.com', 'tested-logo.png', 'Tested.com'],
    ['https://www.theminimalists.com/etr', 'etr.jpg', 'Everything That Remains'],
    ['https://totorro.bandcamp.com', 'totorro.jpg', 'Totorro'],
    ['https://www.amazon.com/Art-Racing-Rain-Novel/dp/0061537969', 'racing_in_the_rain.jpg', 'The Art of Racing in the Rain'],
    ['https://www.pri.org/programs/world-words', 'wiw.jpg', 'The World In Words'],
    ['https://open.spotify.com/artist/3R1Wpuy9HggfVVXkiZlxkA?autoplay=true', 'plagues.jpg', 'Taken By Cars'],
    ['https://www.youtube.com/watch?v=aaX4dU4uMEY', 'Valo4life.jpg', 'Valo 4 Life'],
    ['http://www.switchedonpop.com', 'switched-on-pop.png', 'Switched On Pop'],
    ['https://www.youtube.com/watch?v=Jpdg5XOZZDY', 'cool-runnings.jpg', 'Cool Runnings'],
    ['https://www.androidpolice.com', 'android-police.png', 'Android Police.com']
]

for (i = 0; i < thingsList.length; ++i) {    
    thingBox.innerHTML += '<div class="thing col s12 m6 l4 xl3"><a href="' + thingsList[i][0] +
        '"><div class="card small hoverable"><div class="card-image"><img src="images/things/' + thingsList[i][1] + 
        '" alt ="' + thingsList[i][2] + '"></div><div class="card-content"><h5 class="center-align">' + thingsList[i][2] +
        '</h5></div></div></a></div>'
}
