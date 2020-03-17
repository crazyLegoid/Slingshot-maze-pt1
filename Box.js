class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.4,
            'friction':0.6,
            'density':0.3
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image1 = loadImage("Sprites/En1.png");
        this.image2 = loadImage("Sprites/En2.png");
        this.image3 = loadImage("Sprites/En3.png");
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position
        var color = random(0,10);
        push(); 
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image2, 0, 0, this.width, this.height);
        pop();
      }
}