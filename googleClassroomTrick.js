setTimeout(start,5000);
var els;
var els2;

function start(){
  
  els = document.getElementsByClassName("VkMwfe");
  //for (var i = 0; i < els.length; i++){
    //if (els[i].innerHTML === "Meet Link"){
      var node1 = document.createElement("span");
      node1.innerHTML = '<div id="fake" jscontroller="EcW08c" jsshadow="" class="LsSwGf SWVgue N2RpBe" jsaction="keydown:I481le;dyRcpb:dyRcpb;click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd" jsname="ihHDq" aria-label="Visible to students" role="checkbox" aria-checked="true" tabindex="0"><div class="hh4xKf MLPG7"></div><div class="YGFwk MbhUzd"></div><div class="rbsY8b"><div class="E7QdY espmsb" jsname="IT5dJd"></div></div></div>';
      els[1].appendChild(node1);  
      
    //}
  //}
  els2 = document.getElementsByClassName("QRiHXd");
  document.getElementById("fake").addEventListener("click",change);
}

var changed = "on";
function change(){
  if (changed === "on"){
  //if (1 === 1){
    els2[8].innerHTML = 'https://meet.google.com/lookup/fr7yxj35bu <svg focusable="false" width="18" height="18" viewBox="0 0 24 24" class=" NMm5M"><path d="M10.58 7.25l1.56 1.56c1.38.07 2.47 1.17 2.54 2.54l1.56 1.56c.16-.44.26-.91.26-1.41C16.5 9.02 14.48 7 12 7c-.5 0-.97.1-1.42.25z"></path><path d="M12 6a9.77 9.77 0 0 1 8.82 5.5 9.762 9.762 0 0 1-2.66 3.33l1.42 1.42c1.51-1.26 2.7-2.89 3.43-4.74C21.27 7.11 17 4 12 4c-1.4 0-2.73.25-3.98.7l1.61 1.6C10.4 6.12 11.19 6 12 6zm4.43 9.93l-1.25-1.25-1.27-1.27-3.82-3.82-1.27-1.27-1.25-1.25-1.48-1.48-2.78-2.78-1.42 1.41 2.53 2.53A11.96 11.96 0 0 0 1 11.5C2.73 15.89 7 19 12 19c1.4 0 2.73-.25 3.98-.7l4.3 4.3 1.41-1.41-3.78-3.78-1.48-1.48zm-4.57-1.74a2.677 2.677 0 0 1-2.54-2.54l2.54 2.54zM12 17a9.77 9.77 0 0 1-8.82-5.5 9.762 9.762 0 0 1 2.66-3.33l1.91 1.91c-.15.45-.25.92-.25 1.42 0 2.48 2.02 4.5 4.5 4.5.5 0 .97-.1 1.42-.25l.95.95c-.77.18-1.56.3-2.37.3z"></path></svg>';
    changed = "off";
  }
  else{
    els2[8].innerHTML = 'https://meet.google.com/lookup/fr7yxj35bu <svg focusable="false" height="24" viewBox="0 0 24 24" width="24" class="rbygle NMm5M"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2c-4.97 0-9 3.99-9 9 0 4.74 4.29 8.5 9 8.5V23c5.47-2.79 9-7.36 9-12 0-5.01-4.03-9-9-9zm5 12l-3-2.5V14H8V8h6v2.5L17 8v6z"></path></svg>';
    changed = "on";
  }
}
