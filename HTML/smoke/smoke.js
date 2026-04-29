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

}

class Particles{
    constructor(x, y){
        this.size = Math.random() * 2 + min_particle_size;
        this.color = '#23a';
        this.speedX = Math.random() * 2 + min_speed_x;
        this.speedY = Math.random() * 2 + min_speed_y;
        this.X = x;
        this.Y = y;
    }

    //Update the current state of a particle
    update(){
        this.size -= 1;
        //this.size = this.size - 1;
    }

    draw(){

    }

}

//Create a smoke object
const smoke = new Smoke();
window.addEventListener('mousemove', (e)=>{
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);

    //Create particles and add them to the smoke object
    for (let index = 0; index < min_particle_size; index++) {
        const particle = new Particles(e.clientX, e.clientY);
        smoke.add(particle);
    }
    
});