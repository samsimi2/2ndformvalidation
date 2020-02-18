function comparepass()
{
    var pass = document.getElementById('inpass').value;
    var conpass = document.getElementById('conpass').value;
    if (conpass !== pass){
        document.getElementById('pass').innerHTML = 'Passwords does not match';
    }else{
        document.getElementById('pass').innerHTML = 'Passwords is already Matched';
    }
}