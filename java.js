document.getElementById('purchase-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;

    // Validate Minecraft username (basic example)
    if (!/^[a-zA-Z0-9_]{3,16}$/.test(username)) {
        alert('Please enter a valid Minecraft username!');
        return;
    }

    const response = await fetch('/purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
    });

    const result = await response.json();
    alert(result.message);
});
