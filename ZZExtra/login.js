document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = form.username.value.trim();
        const password = form.password.value.trim();

        if (!username || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate login (replace with actual server validation if needed)
        if (username === "student" && password === "password123") {
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
