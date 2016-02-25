function main(X){
    
    var lyricstr = "";
    for(;X>1;--X)
    {
    	lyricstr += (X +" bottles of beer on the wall, " + X +" bottles of beer.\n");
    	if(X -1 != 1)
    		lyricstr += ("Take one down and pass it around, "+ (X-1) + " bottles of beer on the wall.\n")	
    	else
    		lyricstr += ("Take one down and pass it around, "+ (X-1) + " bottle of beer on the wall.\n")	
    }
    if(X == 1)
    {
    	lyricstr += (X +" bottle of beer on the wall, " + X +" bottle of beer.\n");
    	lyricstr += ("Take one down and pass it around, no more bottles of beer on the wall.\n")
    }
    lyricstr += "No more bottles of beer on the wall, no more bottles of beer.\n"
	lyricstr += "Go to the store and buy some more, 99 bottles of beer on the wall.";
    return lyricstr;
}

module.exports = main;
