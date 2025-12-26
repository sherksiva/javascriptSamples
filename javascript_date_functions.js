//month names, weekday names, and ordinal indicators are in English

//  Date.now()
//  Date.fromISOString(isoStr)
//  Date.timeBetween(date1, date2)
//  dat.isLeapYear()
//  dat.isUTCLeapYear()
//  dat.getDaysInMonth()
//  dat.getUTCDaysInMonth()
//  dat.getMonthName()
//  dat.getUTCMonthName()
//  dat.getDayName()
//  dat.getUTCDayName()
//  dat.format(formatStr, useUTC)
//  dat.toISOString()

(function (){
	
	"use strict";
	
	//note that JavaScript always calculates dates/times in UTC, even for dates occurring before UTC was introduced
	
	if(!Date.now) Date.now = function now(){ return (new Date()).getTime(); };
	
	
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"],
		dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		
	function isLeapYear(year){ return year%400 === 0 || (year%4 === 0 && year%100 !== 0); }
	
	if(!Date.prototype.isLeapYear)
		Date.prototype.isLeapYear = function isLeapYear(){ return isLeapYear(this.getFullYear()); };
	if(!Date.prototype.isUTCLeapYear)
		Date.prototype.isUTCLeapYear = function isUTCLeapYear(){ return isLeapYear(this.getUTCFullYear()); };
	if(!Date.prototype.getDaysInMonth)
		Date.prototype.getDaysInMonth = function getDaysInMonth(){ return ([31, (isLeapYear(this.getFullYear())?29:28), 31,30,31,30,31,31,30,31,30,31])[this.getMonth()]; };
	if(!Date.prototype.getUTCDaysInMonth)
		Date.prototype.getUTCDaysInMonth = function getUTCDaysInMonth(){ return ([31, (isLeapYear(this.getUTCFullYear())?29:28), 31,30,31,30,31,31,30,31,30,31])[this.getUTCMonth()]; };
	if(!Date.prototype.getMonthName)
		Date.prototype.getMonthName = function getMonthName(){ return monthNames[this.getMonth()]; };
	if(!Date.prototype.getUTCMonthName)
		Date.prototype.getUTCMonthName = function getUTCMonthName(){ return monthNames[this.getUTCMonth()]; };
	if(!Date.prototype.getDayName)
		Date.prototype.getDayName = function getDayName(){ return dayNames[this.getDay()]; };
	if(!Date.prototype.getUTCDayName)
		Date.prototype.getUTCDayName = function getUTCDayName(){ return dayNames[this.getUTCDay()]; };
	
	
	
	//if useUTC is true, UTC values will be used instead of local time values
	function formatDate(formatStr, useUTC){
		/*
		Format string variables:
		
		%Y  4-digit year (0000-9999)
		%y  2-digit year (00-99)
		%M  2-digit month (01-12)
		%m  month (1-12)
		%B  full month name (January-December)
		%b  abbreviated month name (Jan-Dec)
		%D  2-digit day of month (01-31)
		%d  day of month (1-31)
		%o  ordinal indicator of the day of month (st, nd, rd, th)
		%W  full weekday name (Sunday-Saturday)
		%w  abbreviated weekday name (Sun-Sat)
		%I  hour in 24-hour format (00-23)
		%H  2-digit hour in 12-hour format (01-12)
		%h  hour in 12-hour format (1-12)
		%P  AM/PM
		%p  am/pm
		%q  a/p
		%N  2-digit minute (00-59)
		%n  minute (0-59)
		%S  2-digit second (00-59)
		%s  second (0-59)
		%Z  3-digit milliseconds (000-999)
		%z  milliseconds (0-999)
		%e  UTC offset +/-
		%F  2-digit hour offset (00-23)
		%f  hour offset (0-23)
		%G  2-digit minute offset (00-59)
		%g  minute offset (0-59)
		
		%%  percent sign
		*/
		
		var theDate = this;
		
		function pad(numStr, digits){
			numStr = numStr.toString();
			while(numStr.length < digits) numStr = "0"+numStr;
			return numStr;
		}
		
		function replacer(match, p1){
			var d, h;
			
			switch(p1){
				case "Y": return useUTC ? theDate.getUTCFullYear() : theDate.getFullYear();
				case "y": return (useUTC ? theDate.getUTCFullYear() : theDate.getFullYear()).toString().slice(-2);
				case "M": return pad((useUTC ? theDate.getUTCMonth() : theDate.getMonth())+1, 2);
				case "m": return (useUTC ? theDate.getUTCMonth() : theDate.getMonth())+1;
				case "B": return useUTC ? theDate.getUTCMonthName() : theDate.getMonthName();
				case "b": return (useUTC ? theDate.getUTCMonthName() : theDate.getMonthName()).slice(0,3);
				case "D": return pad((useUTC ? theDate.getUTCDate() : theDate.getDate()), 2);
				case "d": return useUTC ? theDate.getUTCDate() : theDate.getDate();
				case "o":
					d = useUTC ? theDate.getUTCDate() : theDate.getDate();
					return (d===1 || d===21 || d===31) ? "st" : (d===2 || d===22) ? "nd" : (d===3 || d===23) ? "rd" : "th";
				case "W": return useUTC ? theDate.getUTCDayName() : theDate.getDayName();
				case "w": return (useUTC ? theDate.getUTCDayName() : theDate.getDayName()).slice(0,3);
				case "I": return pad((useUTC ? theDate.getUTCHours() : theDate.getHours()), 2);
				case "H":
					h = (useUTC ? theDate.getUTCHours() : theDate.getHours()) % 12;
					return pad((h===0 ? 12 : h), 2);
				case "h":
					h = (useUTC ? theDate.getUTCHours() : theDate.getHours()) % 12;
					return h===0 ? 12 : h;
				case "P": return (useUTC ? theDate.getUTCHours() : theDate.getHours())<12 ? "AM" : "PM";
				case "p": return (useUTC ? theDate.getUTCHours() : theDate.getHours())<12 ? "am" : "pm";
				case "q": return (useUTC ? theDate.getUTCHours() : theDate.getHours())<12 ? "a" : "p";
				case "N": return pad((useUTC ? theDate.getUTCMinutes() : theDate.getMinutes()), 2);
				case "n": return useUTC ? theDate.getUTCMinutes() : theDate.getMinutes();
				case "S": return pad((useUTC ? theDate.getUTCSeconds() : theDate.getSeconds()), 2);
				case "s": return useUTC ? theDate.getUTCSeconds() : theDate.getSeconds();
				case "Z": return pad((useUTC ? theDate.getUTCMilliseconds() : theDate.getMilliseconds()), 3);
				case "z": return useUTC ? theDate.getUTCMilliseconds() : theDate.getMilliseconds();
				case "e": return (useUTC ? 0 : -theDate.getTimezoneOffset())<0 ? "-" : "+";	//if offset is 0, theDate will be "+"
				case "F": return pad(Math.floor(Math.abs(useUTC ? 0 : -theDate.getTimezoneOffset())/60), 2);
				case "f": return Math.floor(Math.abs(useUTC ? 0 : -theDate.getTimezoneOffset())/60);
				case "G": return pad((useUTC ? 0 : -theDate.getTimezoneOffset())%60, 2);
				case "g": return (useUTC ? 0 : -theDate.getTimezoneOffset())%60;
				case "%": return "%";
				default: return match;
			}
		}
		
		return formatStr.replace(/%(.)/g, replacer);
	}
	
	if(!Date.prototype.format)
		Date.prototype.format = formatDate;
	
	//formats the Date into a string according to the Internet profile of ISO 8601 described in RFC 3339
	//see http://tools.ietf.org/html/rfc3339
	//time zone is always UTC
	if(!Date.prototype.toISOString)
		Date.prototype.toISOString = function toISOString(){ return formatDate.call(this, "%Y-%M-%DT%I:%N:%S.%ZZ", true); };
	
	//creates a Date object from a basic ISO 8601 formatted string
	//expanded years are not supported
	//see http://tools.ietf.org/html/rfc3339#section-5.6
	//    http://en.wikipedia.org/wiki/Iso8601
	if(!Date.fromISOString){
		Date.fromISOString = function fromISOString(isoStr){
			var rxpCalendarDate = "(\\d{4})(?:(-?)(\\d{2})(?:\\2(\\d{2}))?)?",
				rxpWeekDate = "(\\d{4})(-?)[Ww](\\d{2})(?:\\2(\\d))?",
				rxpOrdinalDate = "(\\d{4})-?(\\d{3})",
				rxpTime = "(\\d{2})(?:(:?)(\\d{2})(?:\\2(\\d{2}))?)?(?:[.,](\\d+))?",
				rxpOffset = "(?:([Zz])|([+-])(\\d{2})(?::?(\\d{2}))?)",
				rxpFullDate = "^(?:(\\d{4})(?:(-?)(\\d{2})(?:\\2(\\d{2}))?)?|(\\d{4})(-?)[Ww](\\d{2})(?:\\6(\\d))?|(\\d{4})-?(\\d{3}))(?=[Tt]|$)",
				rxpFullTime = rxpTime+rxpOffset+"?$",
				now, parts, rxp, isoDate, isoTime, date;
			
			if(!( RegExp(rxpFullDate+"$").test(isoStr) || 
				  RegExp("^"+rxpFullTime).test(isoStr) || 
				  (RegExp(rxpFullDate+"[Tt].*").test(isoStr) && RegExp("^[^Tt]+[Tt]"+rxpFullTime).test(isoStr)) )) return null;	//not a supported ISO 8601 string
			
			now = new Date();
			parts = {year:now.getFullYear(), month:now.getMonth(), day:now.getDate(), hour:0, minute:0, second:0, fraction:0};	//default is midnight this morning, local time
			rxp;
			
			isoDate = RegExp(rxpFullDate).exec(isoStr);
			if(isoDate){	//string includes a date
				try{
					isoDate = isoDate[0];
					if((rxp = RegExp("^"+rxpCalendarDate+"$")).exec(isoDate)){	//calendar date
						isoDate.replace(rxp, function (match, y, dash, m, d){
								if(m!="" && (m<1 || m>12)) throw new RangeError("Month is out of range");
								if(d!="" && (d<1 || d>31)) throw new RangeError("Day is out of range");
								
								parts.year = y;
								parts.month = m=="" ? 0 : m-1;
								parts.day = d=="" ? 1 : d;
								
								if(parts.day > daysInMonth(parts.year, parts.month)) throw new RangeError("Day is out of range");
							});
					}
					else if((rxp = RegExp("^"+rxpWeekDate+"$")).exec(isoDate)){	//week date
						isoDate.replace(rxp, function (match, y, dash, w, d){
								var jan4th, dayOfJan4th, firstMonday, mondayAfter52Weeks, weekday, date;
								
								if(w<1 || w>53) throw new RangeError("Week number is out of range");
								if(d!="" && (d<1 || d>7)) throw new RangeError("Weekday number is out of range");
								
								jan4th = new Date(y, 0, 4);
								dayOfJan4th = (jan4th.getDay()+6)%7;	//0-6 == Mon-Sun
								firstMonday = new Date(jan4th.valueOf() - dayOfJan4th*86400000);
								if(w == 53)
								{
									mondayAfter52Weeks = (new Date(firstMonday.valueOf() + 52*7*86400000)).getDate();
									//if the 53rd week is actually the first week of next year (i.e., it includes Jan 4th), throw range error
									if(!(mondayAfter52Weeks > 4 && mondayAfter52Weeks < 29)) throw new RangeError("Week number is out of range");
								}
								weekday = d=="" ? 0 : d-1;	//0-6 == Mon-Sun
								date = new Date(firstMonday.valueOf() + weekday*86400000 + (w-1)*7*86400000);
								parts.year = date.getFullYear();
								parts.month = date.getMonth();
								parts.day = date.getDate();
							});
					}
					else{	//ordinal date
						isoDate.replace(RegExp("^"+rxpOrdinalDate+"$"), function (match, y, d){
								var date;
								
								if(d > (isLeapYear(y)?366:365)) throw new RangeError("Day number is out of range");
								
								parts.year = y;
								date = new Date((new Date(y, 0, 1)).valueOf() + (d-1)*86400000);
								parts.month = date.getMonth();
								parts.day = date.getDate();
							});
					}
				}catch(err){
					return null;	//date string is invalid
				}
			}
			
			isoTime = RegExp("(?:^|[Tt])"+rxpFullTime).exec(isoStr);
			if(isoTime){	//string includes a time
				try{
					isoTime = isoTime[0];
					if(isoTime[0].toUpperCase() == "T") isoTime = isoTime.slice(1);
					
					if(RegExp("^"+rxpTime+"$").exec(isoTime)){	//if there is no time zone designator
						//use local time
						date = new Date(parts.year, parts.month, parts.day);
						//add hours, minutes, and seconds to date
						isoTime.replace(RegExp("^"+rxpTime+"$"), function (match, h, colon, m, s, f){
								var val;
								
								if(h>24) throw new RangeError("Hour is out of range");
								if(m!="" && m>59) throw new RangeError("Minute is out of range");
								if(s!="" && s>60) throw new RangeError("Second is out of range");
								
								val = date.valueOf();
								val += h*3600000;
								if(m) val += m*60000;
								if(s) val += s*1000;
								if(f) val += 1000*("."+f.substr(0,3));
								date = new Date(val);
							});
					}
					else{	//there is a time zone designator
						//use UTC time as base
						date = new Date(Date.UTC(parts.year, parts.month, parts.day));
						//add hours, minutes, seconds, and offset to date
						isoTime.replace(RegExp("^"+rxpTime+rxpOffset+"$"), function (match, h, colon, m, s, f, z, sign, oh, om){
								var val;
								
								if(h>24) throw new RangeError("Hour is out of range");
								if(m!="" && m>59) throw new RangeError("Minute is out of range");
								if(s!="" && s>60) throw new RangeError("Second is out of range");
								if(oh!="" && oh>23) throw new RangeError("Offset hour is out of range");
								if(om!="" && om>59) throw new RangeError("Offset minute is out of range");
								
								val = date.valueOf();
								val += h*3600000;
								if(m) val += m*60000;
								if(s) val += s*1000;
								if(f) val += 1000*("."+f.substr(0,3));
								
								if(!z)	//if there is an offset from UTC time
								{
									//adjust time according to offset (i.e., convert to UTC time)
									sign = sign=="-" ? 1 : -1;
									val += sign*oh*3600000;
									if(om != "") val += sign*om*60000;
								}
								date = new Date(val);
							});
					}
					
					parts.year = date.getFullYear();
					parts.month = date.getMonth();
					parts.day = date.getDate();
					parts.hour = date.getHours();
					parts.minute = date.getMinutes();
					parts.second = date.getSeconds();
					parts.fraction = date.getMilliseconds();
				}catch(err){
					return null;	//time string is invalid
				}
			}
			
			return new Date(parts.year, parts.month, parts.day, parts.hour, parts.minute, parts.second, parts.fraction);
		};
	}
	
	//returns an object with time intervals between two Dates
	//Date objects, milliseconds, or date strings are accepted arguments
	//object properties: years, months, weeks, days, hours, minutes, seconds, milliseconds
	//each part is *in addition* to the sum of the larger parts; e.g., if there are 17 days between the two dates, .weeks==2 and .days==3
	if(!Date.timeBetween){
		Date.timeBetween = function timeBetween(date1, date2){
			var tmp, parts = {};
			
			date1 = new Date(date1);
			date2 = new Date(date2);
			if(isNaN(date1.valueOf()+date2.valueOf())) return null;	//invalid date(s)
			
			if(date1.valueOf() > date2.valueOf()){
				tmp = date1;
				date1 = date2;
				date2 = tmp;
			}
			
			//years
			parts.years = date2.getFullYear() - date1.getFullYear();
			
			//months
			date1.setFullYear(date2.getFullYear());
			parts.months = date2.getMonth() - date1.getMonth();
			
			//days
			date1.setMonth(date2.getMonth());
			if(date1.valueOf() > date2.valueOf()){
				date1.setMonth(date1.getMonth()-1);
				parts.months--;
			}
			parts.days = Math.floor((date2.valueOf()-date1.valueOf())/86400000);
			
			//weeks
			parts.weeks = Math.floor(parts.days/7);
			parts.days = parts.days%7;
			
			//time
			parts.hours = date2.getHours() - date1.getHours();
			parts.minutes = date2.getMinutes() - date1.getMinutes();
			parts.seconds = date2.getSeconds() - date1.getSeconds();
			parts.milliseconds = date2.getMilliseconds() - date1.getMilliseconds();
			
			//adjust for negative values
			if(parts.milliseconds < 0){ parts.milliseconds = 1000+parts.milliseconds; parts.seconds--; }
			if(parts.seconds < 0){ parts.seconds = 60+parts.seconds; parts.minutes--; }
			if(parts.minutes < 0){ parts.minutes = 60+parts.minutes; parts.hours--; }
			if(parts.hours < 0) parts.hours = 24+parts.hours;
			if(parts.months < 0){ parts.months = 12+parts.months; parts.years--; }
			
			return parts;
		};
	}
	
})();