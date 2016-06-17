#pragma strict

 var target : Transform;
 var xDistance : float -1.5;
 var yDistance : float 0.3;
 var zDistance : float -7.75; 

 var xRotation : float 14.5;
 var yRotation : float -2.0;
 var zRotation : float 0.12;

 function Update() {
     transform.position.z = (target.position.z + zDistance);
     transform.position.y = (target.position.y + yDistance);
     transform.position.x = (target.position.x + xDistance);

     transform.rotation.x = xRotation;
     transform.rotation.y = yRotation;
     transform.rotation.z = zRotation;      
 }