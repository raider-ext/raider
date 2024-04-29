const adContent = `
    <div style="border: 1px solid #ccc; padding: 10px;">
        <h2>Advertisement</h2>
        <p>This is an advertisement.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae ultrices velit.</p>
        <p>Visit our website for more information: <a href="https://example.com">Example.com</a></p>
    </div>
`;

// Display the loaded ad content in the ad container
document.getElementById('adContainer').innerHTML = adContent;
document.getElementById('adContainer').style.display = 'block';