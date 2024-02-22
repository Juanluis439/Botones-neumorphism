 const botones = document.getElementsByClassName('button');

if(botones && botones.length > 0)
{
    
   for(let i = 0;i < botones.length; i++)
   {
    
    botones[i].addEventListener('click',()=>{
       
        if( !botones[i].classList.contains('reject'))
        {
            botones[i].classList.add('reject')
        }
        else
        {
            botones[i].classList.remove('reject')
        }
    })
   }


}
