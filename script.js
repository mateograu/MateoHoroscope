var sign = 0;
var messages = ["The dynamic that's responsible for all the hard work you've done lately is still in focus. " +
"There's a chance that a golden opportunity will come your way that adds to your workload but is too good to miss." +
" While you're quite the canny operator and not easily fooled, be sure by midweek that everything's in order by " +
"checking the details and the fine print. Lovely Venus in Libra suggests you'll be eager to make concessions even if it " +
"means compromising a little.","It may be no surprise that one association is red hot right now, particularly" +
" early this week, when a Scorpio connection hints at fire between the sheets. You'll also find you learn a lot from " +
"others, especially when it comes to monitoring your reactions to key situations. The people around you can teach you " +
"much about what's important to you and where you need to change your attitude. Luscious Venus in Libra hints at" +
" the potential for lucrative deals." , "There's a lot going on in the more mysterious areas of your chart," +
" where the current lineup could enhance intimacy and perhaps encourage you to explore unusual or exciting ways to " +
"please your loved one. Being open and vulnerable could be very good for you. It's also an opportunity to let go of " +
"buried resentment and to experience feelings of lightness and peace. Career matters also get a boost, but you'll need" +
" to be cautious around money matters this week." , "This week your focus is very much geared toward productivity and " +
"plain old hard work. The difference is that you seem quite passionate about your involvement and eager to see results." +
" A romance could unexpectedly spring up with one who shares your enjoyment of a certain subject or craft." +
" You might need to make a radical decision that brings about a positive change in your life. Lovely Venus in your " +
"health zone could motivate you to exercise more and to be as fit as possible." , " The week ahead of you could be a little heavy" +
" on you even though you're already eager to make progress. Thoughts of the approaching holiday season could coincide" +
" with a decision to get organized and perhaps give you gifts. At work, the current situation might need revamping, " +
"especially if old methods no longer cut it. A few changes could transform things for the better. Finally, " +
"romance looks promising, whether you're spoken for or newly in love." , "Your desire to have fun could snowball," +
" giving you a lot more to do. If you can come up with a strategy to help you both work and enjoy life, you might get " +
"even more done. The chance of a lucrative deal might be too good to miss even if it is an informal offer. Despite all" +
" the hard work, don't neglect the chance to enjoy yourself. Indeed, make it a priority and you'll feel rejuvenated" +
" and more upbeat in general." , "One desire could be so strong that it fills your mind and senses, particularly " +
"early in the week when you may wonder what hit you. Perhaps you should follow it up, because you might get more than " +
"you expect. The focus on your home zone could lead you to wonder about the motives of certain family members. " +
"A heart-to-heart chat might be a lot better than harboring unnecessary suspicions. Finally, gorgeous Venus in Libra " +
"can be helpful for negotiation and romantic sweet talk." , "It may seem like you could miss out on a golden " +
"opportunity if you don't hurry. However, if you're excited about the possibilities open to you, the current " +
"alignment suggests, perhaps you should consider eliminating projects or activities that no longer hold much appeal." +
" Doing so means you'll be able to make the most of any new options that come your way. In addition, taking that bit " +
"of extra care of your finances can also be beneficial." , "The continued focus on your home sector suggests that if" +
" you're tired and wired, you should cut back on activities allowing you to relax and recharge. You might also find it" +
" both nurturing and healing to pay attention to your creative sides. If you want to learn a new craft or musical " +
"instrument, this is the time to go for it. It could become your preferred way to unwind in the future. With Venus" +
" in Libra, this is your chance to revel in being you." , "Chatty Mercury's presence in your sign encourages you to " +
"look deeper into situations and circumstances around you. Indeed, the week ahead of you may be" +
" puzzled or outright confused by a relationship that at once fascinates and slightly frightens you. Come Thursday," +
" a powerful blend of energies involving expansive Jupiter could see you taking charge of the situation once and for " +
"all. This may be exactly what you need to help you feel more positive." , "You're in a phase when you'd benefit from" +
" unwinding and recharging. After eleven months of activity, the twelfth should be dedicated to meditating on your" +
" progress and your goals for the coming twelve months. It's also an opportunity to release feelings and situations" +
" that drain your energy. If you can do this now, you'll make the best possible use of your recuperation period. " +
"With luscious Venus dancing in your social sector, it's an excellent time for collaboration and teamwork." , "With " +
"Saturn in your spiritual sector, there is a chance to clear out weight you've accumulated these past couple of years." +
" We're talking about a deep clean rather than a superficial dust and vacuum. While you've likely been at this on and " +
"off, there's no time like the present to continue. It is the perfect time to make amends, " +
"clear emotional clutter, and enhance vitality. Convivial Venus in Libra suggests one or two career deals could " +
"be moneymakers."];



function getHoroscope(){
    var name  = document.getElementById("name").value;
    var m = document.getElementById("month").value;
    var d = document.getElementById("day").value;
    var y = document.getElementById("year").value;
    document.getElementById("sign").innerHTML = determineSign(m,d,name);
    document.getElementById("paragraph").innerHTML = determineHoroscope(sign);
    document.getElementById("image").innerHTML = determineImage();
    var zodiac = getZodiacAnimal(y);
    document.getElementById("animal").innerHTML = zodiac[0] + zodiac[1];

    // console.log(m);
    // console.log(d);
}

function determineSign(m,d, name) {
    if(m == 2 && d >= 29){
        sign = 13;
        return "Please enter a valid date."
    }
    if(m == 4 && d >= 31){
        sign = 13;
        return "Please enter a valid date."
    }
    if(m == 6 && d >= 31){
        sign = 13;
        return "Please enter a valid date."
    }
    if(m == 9 && d >= 31){
        sign = 13;
        return "Please enter a valid date."
    }
    if(m == 11 && d >= 31){
        sign = 13;
        return "Please enter a valid date."
    }
    if((m == 3 && d >= 21) || (m == 4 && d <= 19)){
        sign = 3;
        return name+"," +  " you are an Aries!"
    }
    if((m == 4 && d >= 20)||(m == 5 && d <= 20)){
        sign = 4;
        return name+"," + " you are a Taurus!"
    }
    if((m == 5 && d >= 21) || (m == 6 && d <= 20)){
        sign = 5;
        return name+"," + " you are a Gemini!"
    }
    if((m == 6 && d >= 21) || (m == 7 && d <= 22)){
        sign = 6;
        return name+"," + " you are a Cancer!"
    }
    if((m == 7 && d >= 23) || (m == 8 && d <= 22)){
        sign = 7;
        return name+"," + " you are a Leo!"
    }
    if((m == 8 && d >= 23) || (m == 9 && d <= 22)){
        sign = 8;
        return name+"," + " you are a Virgo!"
    }
    if((m == 9 && d >= 23) || (m == 10 && d <= 22)){
        sign = 9;
        return name+"," + " you are a Libra!"
    }
    if((m == 10 && d >= 23) || (m == 11 && d <= 21)){
        sign = 10;
        return name+"," + " you are a Scorpio!"
    }
    if((m == 11 && d >= 22) || (m == 12 && d <= 21)){
        sign = 11;
        return name+"," + " you are a Sagittarius!"
    }
    if((m == 12 && d >= 22) || (m == 1 && d <= 19)){
        sign = 12;
        return name+"," + "  you are a Capricorn!"
    }
    if((m == 1 && d >= 20) || (m == 2 && d <= 18)){
        sign = 1;
        return name+"," + " you are an Aquarius!"
    }
    if((m == 2 && d >= 19) || (m == 3 && d <= 20)){
        sign = 2;
        return name+"," + " you are a Pisces!"
    }
}

function determineHoroscope(){
    if(sign == 1){
        return messages[0];
    }
    if(sign == 2){
        return messages[1];
    }
    if(sign == 3){
        return messages[2];
    }
    if(sign == 4){
        return messages[3];
    }
    if(sign == 5){
        return messages[4];
    }
    if(sign == 6){
        return messages[5];
    }
    if(sign == 7){
        return messages[6];
    }
    if(sign == 8){
        return messages[7];
    }
    if(sign == 9){
        return messages[8];
    }
    if(sign == 10){
        return messages[9];
    }
    if(sign == 11){
        return messages[10];
    }
    if(sign == 12){
        return messages[11];
    }
    if(sign == 13){
        return " ";
    }
}

function determineImage(){
    if(sign == 1){
        return "<img src='img/1.jpg' />";
    }
    if(sign == 2){
        return "<img src='img/2.png' />";
    }
    if(sign == 3){
        return "<img src='img/3.png' />";
    }
    if(sign == 4){
        return "<img src='img/4.png' />";
    }
    if(sign == 5){
        return "<img src='img/5.png' />";
    }
    if(sign == 6){
        return "<img src='img/6.png' />";
    }
    if(sign == 7){
        return "<img src='img/7.png' />";
    }
    if(sign == 8){
        return "<img src='img/8.png' />";
    }
    if(sign == 9){
        return "<img src='img/9.jpeg' />";
    }
    if(sign == 10){
        return "<img src='img/10.png' />";
    }
    if(sign == 11){
        return "<img src='img/11.png' />";
    }
    if(sign == 12){
        return "<img src='img/12.png' />";
    }
    if(sign == 13){
        return " ";
    }
}

var zodiac = 0;

function getZodiacAnimal(y){
    if(y == 2008 || y == 1996 || y == 1984 || y == 1972 || y == 1960){
        zodiac = ["You're Chinese Zodiac animal is a Rat!" , "<img src='zodiacs/rat.png' />"];
    }
    if(y == 2009 || y == 1997 || y == 1985 || y == 1973 || y == 1961){
        zodiac =  ["You're Chinese Zodiac animal is an Ox!" , "<img src='zodiacs/ox.jpeg' />"];
    }
    if(y == 2010 || y == 1998 || y == 1986 || y == 1974 || y == 1962){
        zodiac = ["You're Chinese Zodiac animal is a Tiger!" , "<img src='zodiacs/tiger.jpg' />"];
    }
    if(y == 2011 || y == 1999 || y == 1987 || y == 1975 || y == 1963){
        zodiac = ["You're Chinese Zodiac animal is a Rabbit!" , "<img src='zodiacs/Rabbit.gif' />"];
    }
    if(y == 2012 || y == 2000 || y == 1988 || y == 1976 || y == 1964){
        zodiac = ["You're Chinese Zodiac animal is a Dragon!" , "<img src='zodiacs/dragon.jpg' />"];
    }
    if(y == 2013 || y == 2001 || y == 1989 || y == 1977 || y == 1965){
        zodiac = ["You're Chinese Zodiac animal is a Snake!" , "<img src='zodiacs/snake.jpeg' />"];
    }
    if(y == 2014 || y == 2002 || y == 1990 || y == 1978 || y == 1966){
        zodiac = ["You're Chinese Zodiac animal is a Horse!" , "<img src='zodiacs/horse.jpeg' />"];
    }
    if(y == 2015 || y == 2003 || y == 1991 || y == 1979 || y == 1967){
        zodiac = ["You're Chinese Zodiac animal is a Goat!" , "<img src='zodiacs/goat.jpeg' />"];
    }
    if(y == 2016 || y == 2004 || y == 1992 || y == 1980 || y == 1968){
        zodiac = ["You're Chinese Zodiac animal is a Monkey!" , "<img src='zodiacs/monkey.jpeg' />"];
    }
    if(y == 2017 || y == 2005 || y == 1993 || y == 1981 || y == 1969){
        zodiac = ["You're Chinese Zodiac animal is a Rooster!" , "<img src='zodiacs/rooster.jpeg' />"];
    }
    if(y == 2018 || y == 2006 || y == 1994 || y == 1982 || y == 1970){
        zodiac = ["You're Chinese Zodiac animal is a Dog!" , "<img src='zodiacs/dog.jpeg' />"];
    }
    if(y == 2019 || y == 2007 || y == 1995 || y == 1983 || y == 1971){
        zodiac = ["You're Chinese Zodiac animal is a Pig!" , "<img src='zodiacs/pig.jpeg' />"];
    }
    return zodiac;
}

