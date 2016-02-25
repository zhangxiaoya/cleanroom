function StringHaveFirstNum(num,a)
{
	var result = "";
	while(num != 0)
	{
		if((num % 10) == a)
		{
			result = "Fizz";
			break;
		}
		else
			num = parseInt(num / 10);
	}
	return result;
}
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

	var checkHaveFirstNum = StringHaveFirstNum(num,a);
	if(checkHaveFirstNum.length != 0)
		result = checkHaveFirstNum;
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
