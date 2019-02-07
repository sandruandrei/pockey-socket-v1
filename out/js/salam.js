// Find your browser's implementation of requestAnimationFrame
window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

// The update method
var update = function(timestamp) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // How much time has elapsed since the start of the animation?
    var elapsedTime = timestamp - startTime;

    // How far have we moved at that time?
    var distanceTravelled = elapsedTime * speed;
    if (distanceTravelled >= totalDistance) distanceTravelled = totalDistance; // Don't overshoot

    // How far have we moved in each component?
    var distanceTravelledX = xPerUnitDistance * distanceTravelled;
    var distanceTravelledY = yPerUnitDistance * distanceTravelled;

    // Move there!
    this.x = Math.round(origin.x + distanceTravelledX);
    this.y = Math.round(origin.y + distanceTravelledY);

    // Draw!
    this.drawBoid();

    if (distanceTravelled < totalDistance) {
        // Schedule update to be called just before the next repaint
        requestAnimationFrame(update);
    }
}

// The distance you want to move
var distance = 1; // In distance units

// Speed you want to move at
var speed = 0.005 / 1000; // In distance units per millisecond

// Storage for the time when your animation started
var startTime;

// The start point, in distance units
var origin = {
    x: 0,
    y: 0
};

// The destination, in distance units
var destination = {
    x: 100,
    y: 75
};

// Distance to travel
var deltaX = (destination.x - origin.x);
var deltaY = (destination.y - origin.y);
var totalDistance = Math.sqrt( Math.pow(deltaX, 2) + Math.pow(deltaY, 2) );

// Storage for the contribution of each component per unit distance
var xPerUnitDistance,
    yPerUnitDistance;

if (totalDistance > 0) {
    // Start animating!
    xPerUnitDistance = deltaX / totalDistance;
    yPerUnitDistance = deltaY / totalDistance;

    // Get the start time
    startTime = window.performance.now ?
        // Some browsers use high-precision timers
        (performance.now() + performance.timing.navigationStart) :
        Date.now(); // A fallback for those that don't

    update(startTime);
}