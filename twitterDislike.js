var els = document.querySelectorAll('[role="group]');

for (var i = 0; i < els.length; i++){
    //node one
    var node1 = document.createElement("div");                            // Create o1
    node1.classList.add('css-1dbjc4n', 'r-18u37iz', 'r-1h0z5md');         //give dive class
    
    //node2
    var node2 = createElement("div");                                     // Create o2
    node2.classList.add('css-18t94o4', 'css-1dbjc4n', 'r-1777fci', 'r-11cpok1', 'r-1ny4l3l', 'r-bztko3', 'r-lrvibr');//o2
    //should also add other attributes.
    node1.appendChild(node2); 
    
    //node3
    var node3 = createElement("div");                                     // Create o3
    node3.classList.add('css-901oao', 'r-1awozwy', 'r-1re7ezh', 'r-6koalj', 'r-1qd0xha', 'r-a023e6', 'r-16dba41', 'r-1h0z5md', 'r-ad9z0x', 'r-bcqeeo', 'r-o7ynqc', 'r-clp7b1', 'r-3s2u2q', 'r-qvutc0');//o3
    //should also add other attributes.
    node2.appendChild(node3); 
    
    //node4
    var node4 = createElement("div");                                     // Create o4
    node4.classList.add('css-1dbjc4n', 'r-xoduu5');//o4
    //should also add other attributes.
    node3.appendChild(node4); 
    
    //node5, gets added to node 4
    var node5 = createElement("div");                                     // Create o5
    node5.classList.add('css-1dbjc4n', 'r-sdzlij', 'r-1p0dtai', 'r-xoduu5', 'r-1d2f490', 'r-xf4iuw', 'r-1ny4l3l', 'r-u8s1d', 'r-zchlnj', 'r-ipm5af', 'r-o7ynqc', 'r-6416eg');//o5
    //should also add other attributes.
    node4.appendChild(node5);
    
    ///svg, gets added to node 4
    var pic = createElement("img");                                     // Create o5
    pic.classList.add('r-4qtqp9', 'r-yyyyoo', 'r-1xvli5t', 'r-dnmrzs', 'r-bnwqim', 'r-1plcrui', 'r-lrvibr', 'r-1hdv0qi');//pic
    pic.src = "https://www.flaticon.com/svg/static/icons/svg/2717/2717402.svg";
    //should also add other attributes.
    node4.appendChild(pic);
    
    
    els[i].appendChild(node1);                          //finally add original node to group
}


