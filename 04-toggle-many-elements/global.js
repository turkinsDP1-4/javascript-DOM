// Your JavaScript goes here.
window.addEventListener('load', function()
{
    const button = document.querySelector('#button');
    var isHidden = true;

    button.addEventListener('click', (e) => 
    {
        if(isHidden)
        {
            let i = 0;
            while(i < 2)
            {
                document.getElementsByClassName('toggle_me')[i].style.display = "block";
                i++;
            }
            isHidden = !isHidden;
        }
        else
        {
            let i = 0;
            while(i < 2)
            {
                document.getElementsByClassName('toggle_me')[i].style.display = "none";
                i++;
            }
            isHidden = !isHidden;
        }
    });
});