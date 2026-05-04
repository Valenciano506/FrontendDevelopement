const min_particle_size = 0.2;
const min_speed_x = 1;
const min_speed_y = 1;
const canvas = document.getElementById("smoke_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
//Define the color that we want to use for our drawings
ctx.fillStyle = 'rgb(0, 0, 0)';
//Prepare to draw a path
ctx.beginPath();
//Draw an arc
ctx.arc(20, 30, 20, 0, Math.PI * 2);
//Fill the object that we have drawn
ctx.fill();
console.log(smoke);

class Smoke{
    constructor(){
        this.particles = [];
    }

    add(particle){
        this.particles.push(particle);
        console.log(smoke.particles);
    }

    animate(){
        for (let index = 0; index < this.particles.length; index++) {
            //Update the states of the particle and draw it to the screen
            this.particles[index].update();            
        }
        requestAnimationFrame(animate);
    }

}

class Particles{
    constructor(x, y){
        this.size = Math.random() * 2 + min_particle_size;
        this.color = '#23a';
        this.speedX = Math.random() * 2 + min_speed_x;
        this.speedY = Math.random() * 2 + min_speed_y;
        this.X = Math.random() * 2 + x;
        this.Y = Math.random() * 2 + y;
    }

    //Update the current state of a particle
    update(){
        this.size -= 1;
        //this.size = this.size - 1;

        this.draw();
    }

    draw(){
        //Define the color that we want to use for our drawings
        ctx.fillStyle = this.color;
        //Prepare to draw a path
        ctx.beginPath();
        //Draw an arc
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        //Fill the object that we have drawn
        ctx.fill();
    }

}

//Create a smoke object
const smoke = new Smoke();
console.log(smoke);
window.addEventListener('mousedown', (e)=>{
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);

    //Create particles and add them to the smoke object
    for (let index = 0; index < min_particle_size; index++) {
        const particle = new Particles(e.clientX, e.clientY);
        smoke.add(particle);
        console.log(smoke.particles);
    }    
});

smoke.animate();