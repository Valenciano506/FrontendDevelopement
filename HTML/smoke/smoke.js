const min_particle_size = 10;
const min_speed_x = 1;
const min_speed_y = 1;
const num_of_particles = 10;
const canvas = document.getElementById("smoke_canvas");
console.log(canvas);
const ctx = canvas.getContext("2d");
//Define the color that we want to use for our drawings
ctx.fillStyle = 'rgb(255, 0, 0)';
//Prepare to draw a path
ctx.beginPath();
//Draw an arc
ctx.arc(2, 3, 2, 0, Math.PI * 2);
//Fill the object that we have drawn
ctx.fill();

class Smoke{
    constructor(){
        this.particles = [];
    }

    add(particle){
        this.particles.push(particle);
        console.log(smoke.particles);
    }

    animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let index = 0; index < this.particles.length; index++) {
            //Update the states of the particle and draw it to the screen
            this.particles[index].update();
            if (this.particles[index].size <= 0.2){
                this.particles.splice(index, 1);
                index--;
            }
        }
        requestAnimationFrame(() => this.animate());
    }

}

class Particles{
    constructor(x, y){
        this.size = Math.random() * 2 + min_particle_size;
        this.color = 'rgb(255, 0, 0)';
        this.speedX = Math.random() * 2 + min_speed_x;
        this.speedY = Math.random() * 2 + min_speed_y;
        this.x = Math.random() * 2 + x;
        this.y = Math.random() * 2 + y;
    }

    //Update the current state of a particle
    update(){
        this.size -= 0.1;
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
window.addEventListener('mousemove', (e)=>{
    console.log(e);
    console.log(e.clientX);
    console.log(e.clientY);

    //Create particles and add them to the smoke object
    for (let index = 0; index < num_of_particles; index++) {
        const particle = new Particles(e.clientX, e.clientY);
        smoke.add(particle);
        console.log(smoke.particles);
    }    
});

smoke.animate();