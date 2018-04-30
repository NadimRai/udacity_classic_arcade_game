// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 580) {
        this.x = -60;
       this.speed = 300 + Math.floor(Math.random() * 500);
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var allEnemies = [];
var enemy1 = new Enemy(0, 62,600);
var enemy2 = new Enemy(0, 145,400);
var enemy3 =  new Enemy(0, 228,900);
allEnemies.push(enemy1, enemy2, enemy3);
console.log(allEnemies);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var player = new Player(200, 400, 60);

Player.prototype.handleInput = function(move) {
    if(move === 'left' && this.x > 0) {
        this.x -= this.speed + 50;
    }else if(move === 'right' && this.x < 400){
        this.x += this.speed + 50;
    }else if(move === 'up' && this.y > 0){
        this.y -= this.speed + 30;
    }else if(move === 'down' && this.y< 400){
        this.y += this.speed + 30;
    }
};

Player.prototype.update = function(){
    if (this.y < 0) {
        this.x = 200;
        this.y = 380;
    }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
