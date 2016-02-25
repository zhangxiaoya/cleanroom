//TODO: Please write code in this file.

function printInventory(inputItem)
{
	//  step one
var allItem = loadAllItems();                      // load all items

var sum_item_list_names =[];
var sum_item_list_sumprices =[];
var sum_item_list_prices =[];
var sum_item_list_units =[];
var sum_item_list_barcodes =[];
var sum_item_list_counts =[];
var sum_item_list =[];
for(var i =0;i<inputItem.length;++i)               // foreach all inputItem
{
	var j =0;
	for(;j<sum_item_list_barcodes.length;++j)        // if exsit
	{
		if(sum_item_list_barcodes[j] == inputItem[i])
		{
			sum_item_list_counts[j] += 1;
			sum_item_list_sumprices[j] += sum_item_list_prices[j]
			break;
		}
	}
	if(j == sum_item_list_barcodes.length)                 // if not
	{
		var itemInfo;
		var k = 0;
		for(;k<allItem.length;++k)
		{
			if(inputItem[i] == allItem[k].barcode)
			{
				itemInfo = allItem[k];
				break;
			}
		}
		var tempBarcode;
		var tempCount;
		var tempSumprice;
		if(k == allItem.length)
		{
			var temp = inputItem[i].split("-");
			tempBarcode = temp[0];
			tempCount = parseInt(temp[1]);

			for(k=0;k<allItem.length;++k)
			{
				if(tempBarcode == allItem[k].barcode)
				{
					itemInfo = allItem[k];
					break;
				}
			}
			tempSumprice = itemInfo.price * tempCount;
		}
		else
		{
			tempBarcode = itemInfo.barcode;
			tempCount = 1;	
			tempSumprice = itemInfo.price;
		}
		sum_item_list_barcodes.push(tempBarcode);
		sum_item_list_counts.push(tempCount);
		sum_item_list_names.push(itemInfo.name);
		sum_item_list_sumprices.push(tempSumprice);
		sum_item_list_prices.push(itemInfo.price);
		sum_item_list_units.push(itemInfo.unit)
	}
}

for(var i = 0;i < sum_item_list_barcodes.length;++i)
{
	var temobj ={
		barcode:sum_item_list_barcodes[i],
		name:sum_item_list_names[i],
		unit:sum_item_list_units[i],
		price:sum_item_list_prices[i],
		sumprice: sum_item_list_sumprices[i],
		count:sum_item_list_counts[i]
	};
	sum_item_list.push(temobj);
}

// step two
var sum_all_price = 0;
for(var i =0;i<sum_item_list.length;++i)
{
	sum_all_price += sum_item_list[i].sumprice;
}


// step three
var promotions = loadPromotions();                 // load promotions
var last_sum_item_list = sum_item_list;
var promotion_item_list = promotions[0].barcodes;

// step four

for(var i =0;i<last_sum_item_list.length;++i)
{
	// if((last_sum_item_list[i].barcode in promotion_item_list) && (last_sum_item_list[i].count >2) )
	var j =0;
	for(;j<promotion_item_list.length;++j)
	{
		if(promotion_item_list[j] == last_sum_item_list[i].barcode)
			break;
	}
	if(j < promotion_item_list.length && (last_sum_item_list[i].count >2) )	
		last_sum_item_list[i].sumprice -= last_sum_item_list[i].price;
}

// step five

var last_sum_all_price = 0;
for (var i = 0; i < last_sum_item_list.length; i++) {
	last_sum_all_price += last_sum_item_list[i].sumprice;
};

// step six

var promotion_price = sum_all_price - last_sum_all_price;

// step seven

var globalLine ="";
var store_name = "没钱赚商店";
var item_name = "名称："
var item_count = "，数量："
var item_price  = "，单价："
var item_sum_price = "，小计："

// console.log("***<" + store_name + ">购物清单***" + "\n")
globalLine += ("***<" + store_name + ">购物清单***\n");
for(var i = 0;i<last_sum_item_list.length;++i)
{
	var linestr = item_name + last_sum_item_list[i].name + item_count + last_sum_item_list[i].count + last_sum_item_list[i].unit + item_price + last_sum_item_list[i].price.toFixed(2) + "(元)"+ item_sum_price + last_sum_item_list[i].sumprice.toFixed(2) +"(元)" + "\n";
	// document.write(linestr);
	// console.log(linestr);
	globalLine += linestr;
}

// console.log("----------------------\n")
globalLine += "----------------------\n";
var promotion_title = "挥泪赠送商品：\n"
// console.log(promotion_title);
globalLine += promotion_title;
for(var i =0;i<promotion_item_list.length;++i)
{
	for(var j =0;j<last_sum_item_list.length;++j)
	{
		if(promotion_item_list[i] == last_sum_item_list[j].barcode)
		{
			var linestr = item_name + last_sum_item_list[j].name +item_count + 1 + last_sum_item_list[j].unit + "\n";
			// console.log(linestr);
			globalLine += linestr;
			break;
		}
	}
}

globalLine += "----------------------\n";
globalLine += ("总计：" + last_sum_all_price.toFixed(2) + "(元)\n");
globalLine += ("节省：" + promotion_price.toFixed(2) + "(元)\n");
globalLine += "**********************";
console.log(globalLine);
}
// console.log("----------------------\n");
// console.log("总计：" +  last_sum_all_price + "(元)" + "\n");
// console.log("节省：" + promotion_price + "(元)" + "\n");
// console.log("**********************\n")	