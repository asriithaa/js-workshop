document.addEventListener("DOMContentLoaded", function() {
    let counterElement = document.getElementById("counter");
    let counter = 0;

    function updateCounter() {
        counterElement.textContent = counter;
    }

    document.getElementById("increment").addEventListener("click", function() {
        // Post-increment
        counter++;
        updateCounter();
    });

    document.getElementById("decrement").addEventListener("click", function() {
        // Post-decrement
        counter--;
        updateCounter();
    });

    document.getElementById("pre-increment").addEventListener("click", function() {
        // Pre-increment
        ++counter;
        updateCounter();
    });

    document.getElementById("pre-decrement").addEventListener("click", function() {
        // Pre-decrement
        --counter;
        updateCounter();
    });

    updateCounter(); // Initialize counter display
});
