function main(a,b,c){
    var result = "";
    for(var i = 1;i<= 100;++i)
    {
    	if(i == 1)
    		result += i.toString();
    	else
    		result += (" " + i.toString());
    }
    return result;
}

module.exports = main;
