// Here You can type your custom JavaScript...


setTimeout(start,15000);
function start(){
  var els = document.querySelectorAll('[role="group"]');
  
  for (var i = 0; i < els.length; i++){
      //node one
      var node1 = document.createElement("div");                            // Create o1
      node1.classList.add('css-1dbjc4n', 'r-18u37iz', 'r-1h0z5md');         //give dive class
      
      //node2
      var node2 = document.createElement("div");                                     // Create o2
      node2.classList.add('css-18t94o4', 'css-1dbjc4n', 'r-1777fci', 'r-11cpok1', 'r-1ny4l3l', 'r-bztko3', 'r-lrvibr');//o2
      //should also add other attributes.
      node1.appendChild(node2); 
      
      //node3
      var node3 = document.createElement("div");                                     // Create o3
      node3.classList.add('css-901oao', 'r-1awozwy', 'r-1re7ezh', 'r-6koalj', 'r-1qd0xha', 'r-a023e6', 'r-16dba41', 'r-1h0z5md', 'r-ad9z0x', 'r-bcqeeo', 'r-o7ynqc', 'r-clp7b1', 'r-3s2u2q', 'r-qvutc0');//o3
      //should also add other attributes.
      node2.appendChild(node3); 
      
      //node4
      var node4 = document.createElement("div");                                     // Create o4
      node4.classList.add('css-1dbjc4n', 'r-xoduu5');//o4
      //should also add other attributes.
      node3.appendChild(node4); 
      
      //node5, gets added to node 4
      var node5 = document.createElement("div");                                     // Create o5
      node5.classList.add('css-1dbjc4n', 'r-sdzlij', 'r-1p0dtai', 'r-xoduu5', 'r-1d2f490', 'r-xf4iuw', 'r-1ny4l3l', 'r-u8s1d', 'r-zchlnj', 'r-ipm5af', 'r-o7ynqc', 'r-6416eg');//o5
      //should also add other attributes.
      node4.appendChild(node5);
      
      ///svg, gets added to node 4
      var pic = document.createElement("img");                                     // Create o5
      pic.classList.add('r-4qtqp9', 'r-yyyyoo', 'r-1xvli5t', 'r-dnmrzs', 'r-bnwqim', 'r-1plcrui', 'r-lrvibr', 'r-1hdv0qi');//pic
      pic.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAwCAIAAADhB9+LAAAACXBIWXMAABYlAAAWJQFJUiTwAAADVElEQVRYw8VZv0v7QBR/ljrVtXKDoIODUyZBaHW7Dp1cRAgFwbFL/Q+s6Z6pWARXT8HFxR+DLkIUxMmTbkJ0k2Q1g+QgDg/u229+t2nSzxSSa+5z733ey3uv4MWCc97v9xVFgXRQFEVVVcaYaZremICYZ5RSyAYfLU3TQpcRQizLiqQif0YpNQzDdd3EY5mmaZomY0xV1VCDxZBmjIVTMQwDV1iW5U2KKFrm/8AzR1LBEzDGvCnh5+fHNE2k4nvEGMO9ykFbOY7DOQeAWq0GU0KlUqlUKvFrSsFbtm3jRbVahQIRQmVlZQUvarVao9EQQhRDJcRBT09PeME5J4T8/v6Wy+UZWMW27Z2dHYxhzvnHx0eij/OyysHBwff3N6X07u6uGGNEWuXi4gIATk9PC+bht8rn52eum8nMmUxFymJpaclxnKmrpF6vp3WQTCTz8/Orq6sywUwLQoiY1FCog5rNJgDc398nUBFCbG9v4yd0MBhsbGxMXblbW1uptHJycsI5VxTl7e0tJ6scHh6m0srz8zMADAYDmBFKRW7W6/V6vV5aKl9fX/lR6Xa73W43gYoQAkO31WrNjSDmELk4yHGcZrP58PAAM0UZ6xKsB9rt9t7eXmjtUgQV27axfOScF1y2+R2EuU9V1dnyAIDS8vIyAAyHQ5g1SvV6nRDCOZd1ZB6wbfv29jZZtrqut1qtzc1NSun+/v5kmzUajVAXCyF84Xl+fj664Pr6GmSD5LqupmmEkCznJoTEN96Jjeqc53mS/svLy/Hxcfrth8MhRh+l9OjoKFgZvb+/K4pCCNF1fXd3N+r91WpV13XI2H7KSjF0Qb/fBwBN07IONdIAm+9OpxPTe0cR9eGfgyaD4zgLCwuouWDULC4uAoDrummqsFL2KI169Pr6ijJKWQ1Op14Jjb6zszMAGCM7ZNQKRpCqqiEyHHNYlNUqj4+PALC2thYMY7RW+k9bVipYEa+vr/vuX11dAUC73R7jXRkdFOoF13XlWGQ6w9JEWJYVeh7sjaM+BbloRerAF9KXl5djeye7VnAW6us9kVlQQPlq5ebmBvNYMN+PO1vPSkXKZfSbJ0fFhVIZHX13Oh3DMKJGxUVQGWUzOmCaDRX0lPy7ZgIenuf9AeBrnIHvQtktAAAAAElFTkSuQmCC";
      node4.appendChild(pic);
          
      
      els[i].appendChild(node1);                          //finally add original node to group
  }
}
