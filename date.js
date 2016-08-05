var min_year = 2016;
var date = new Date();
var cur_year = Math.max(date.getYear(), min_year);
if (cur_year == min_year)
	document.write(cur_year.toString());
else
	document.write(min_year.toString() + "-" + cur_year.toString());
