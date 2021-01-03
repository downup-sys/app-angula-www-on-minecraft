function timer()
{
    document.getElementById('time').innerHTML(new Date().getFullYear() + ' ' + new Date().getTime())
}
setInterval(timer(), 1)