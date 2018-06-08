// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < 8*101){
        this.x+=(dt * this.speed);
    }else{
        this.x=-2* 83;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-princess-girl.png';
};
Player.prototype.update = function(dt) {
        if(this.y <= 0){
            this.x = 2 * 101;
            this.y = 4.75 * 83;
        }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction){

    switch (direction){
        case 'left':
            if(this.x > 0){
                this.x-=101;
            }
            break;
        case 'right':
            if(this.x < 4*101){
                this.x+=101;
            }
            break;
        case 'up':
            if(this.y > 0){
                this.y-=83;
            }
            break;
        case 'down':
            if(this.y < 4.75*83){
                this.y+=83;
            }
            break;
        
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

var enemy1 = new Enemy(0 * 101, 0.75 * 83, 300),
    enemy2 = new Enemy(2 * 101, 0.75 * 83, 200),
    enemy3 = new Enemy(0 * 101, 1.75 * 83, 400),
    enemy4 = new Enemy(3 * 101, 1.75 * 83, 500),
    enemy5 = new Enemy(1 * 101, 2.75 * 83, 200),
    enemy6 = new Enemy(4 * 101, 2.75 * 83, 300);
allEnemies.push(enemy1,enemy2,enemy3,enemy4,enemy5,enemy6);



// Place the player object in a variable called player
var player =  new Player(2 * 101, 4.75 * 83);

var checkCollisions = function(){
    
    for (var i=0;i< allEnemies.length;i++){
        if((allEnemies[i].x+82 >= player.x && allEnemies[i].x+82 < player.x+82 ) && (player.y == allEnemies[i].y)){
            player.x = 2 * 101;
            player.y = 4.75 * 83;
        }
    }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        65: 'left',// 37
        87: 'up', //38
        68: 'right',// 39
        83: 'down' //40
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
