

var ClassicAlbums={
    album:['Enter the 36 Chambers', 'Illmatic', 'mmFood', 'The Chronic', 'Reasonable Doubt', 'Midnight Marauders', 'Aquemini', 'College Dropout', 'Paid in Full', 'Run DMC'],
    releaseYear:[],
    
    fillLoop: function(years){
        for(var i=0; i<years.length; i++){
            this.releaseYear.push(years[i])
            console.log(this.releaseYear[i])        
        }
    },
    
    isClassic: function(years){
        for(var i=0; i<years.length; i++){
            if(years[i]>=2000){
                console.log(this.album[i]+" is considered a Modern Era classic Hip Hop album.")
            }
            else if(years[i]<2000 && years[i]>=1990){
                console.log(this.album[i]+" is considered a Golden Era classic Hip Hop album.")
            }
            else if(years[i]<1990){
                console.log(this.album[i]+" is considered a Old School Era classic Hip Hop album.")
            }
        }
    } 
}

var years=[1993, 1994, 2004, 1992, 1996, 1993, 1998, 2004, 1987, 1984];
ClassicAlbums.fillLoop(years);
ClassicAlbums.isClassic(years);