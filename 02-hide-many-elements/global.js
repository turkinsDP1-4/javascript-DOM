window.addEventListener("load", function()
{
    const button = document.querySelector('#button')

    button.addEventListener('click', (e) =>
    {
        let i = 0
        while(i < 2)
        {
            document.getElementsByClassName('hide_me')[i].style.display = "none";
            i++;
        }  
    });
});