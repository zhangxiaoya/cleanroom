function toCorrectString(num,a,b,c)
{
	var result = "";
	if(num % a == 0)
		result += "Fizz";
	if(num % b == 0)
		result += "Buzz";
	if(num % c == 0)
		result += "Whizz";
	if(result.length == 0)
		result += num.toString();
	return  result;
}


function main(a,b,c){
    var result = "";
    for(var i = 1;i<= 100;++i)
    {
    	if(i == 1)
    		result += toCorrectString(i,a,b,c);
    	else
    		result += (" " + toCorrectString(i,a,b,c));
    }
    return result;
}

module.exports = main;
