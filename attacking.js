class Attacking{
constructor(bodyA, pointB){
console.log(bodyA)
console.log(pointB)
var options = {
bodyA: bodyA,
pointB: pointB,
stiffness: 0.04,
length: 10,

}


this.bullet = Constraint.create(options);
//this.image = loadImage("images/bullet.png");
this.pointB = pointB
World.add(world, this.bullet);


    }



    display(){
//        image(this.bullet,200,20);
    
        if(this.bullet.bodyA){
            var pointA = this.bullet.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
              //  line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
               // line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
               // image(this.bullet,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(3);
              //  line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                //line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
               // image(this.bullet,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}
