function MostrarMenu(menu) 
{

    var display = document.getElementById(menu).style.display;

    if (display == "none") 
    {
        document.getElementById(menu).style.display = 'block';
    }

    else
    {
        document.getElementById(menu).style.display = 'none';
    }
}