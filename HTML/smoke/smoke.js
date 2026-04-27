const min_particle_size = 0.2;
const min_speed_x = 1;
const min_speed_y = 1;

window.addEventListener('mousemove', (e)=>{});

class Smoke{

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
}