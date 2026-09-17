document.getElementById("foodType").addEventListener("change", (event) => {
    const selectedFood = event.currentTarget.value;

    if (selectedFood === "appetizers") {
        document.getElementById("appetizers").style.display = "block";
        document.getElementById("main").style.display = "none";
        document.getElementById("desserts").style.display = "none";
    } else if (selectedFood === "main") {
        document.getElementById("main").style.display = "block";
        document.getElementById("appetizers").style.display = "none";
        document.getElementById("desserts").style.display = "none";
    } else if (selectedFood === "desserts") {
        document.getElementById("desserts").style.display = "block";
        document.getElementById("appetizers").style.display = "none";
        document.getElementById("main").style.display = "none";
    }
});