

const randomPassword = () => {
 let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%&";

 let strLen = string.length;
 let myPass ="";

 for (var i=0; i<7; i++){

    const myPos = Math.floor(Math.random()*strLen);

    myPass+=string.charAt(myPos)
 }

return(myPass)

}

module.exports = randomPassword
