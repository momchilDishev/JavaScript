function replaceSpaces(value) {
    var result;
    result = value.split(' ').join('&nbps;')
    return console.log(result);
}

replaceSpaces("But you were living in another world tryin' to get your message through");
replaceSpaces("We are living in a yellow submarine. We don't have anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.");

/*
    or
    var re = new RegExp(" ", 'g'); 
    return result = str.replace(re, "");
    
    */