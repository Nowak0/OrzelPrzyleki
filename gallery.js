img1=document.getElementById("image1")
img2=document.getElementById("image2")
function openAndCloseImage(id) {
    let countClicks=0;
    if (countClicks==0) {
        if(id==1) {
            img1.style.width="100%";
            img2.style.display="none";
        }
        countClicks+=1;
    }
    else {
        img1.style.width="50%";
        img2.style.display="block";
    }
};