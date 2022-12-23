const share = document.getElementById('share');
const shareIcon = document.getElementById('share_icon');
const shareIconMobile = document.getElementById('share_icon_mobile');
const avatar = document.getElementById('avatar');
const writer = document.getElementById('writer');

shareIcon.addEventListener("click", function(){
    if(share.style.display == "flex"){ 
        share.style.display = "none";        
    }
    else share.style.display ='flex';
    if(screen.width < 400){ 
        shareIcon.style.display = 'none';
        avatar.style.display = 'none';
        writer.style.display = 'none';
    }
})

shareIconMobile.addEventListener("click", function(){
    share.style.display = 'none';
    shareIcon.style.display = 'flex';
    avatar.style.display = 'flex';
    writer.style.display = 'flex';
})