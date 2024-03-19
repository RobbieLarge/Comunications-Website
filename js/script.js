document.addEventListener("DOMContentLoaded", function() {
    // Define the header's HTML with the specific links and order
    var headerHTML = `
        <header>
            <nav>
                <ul style="list-style: none; display: flex;">
                    <li style="margin-right: 20px;"><a href="index.html">Home</a></li>
                    <li style="margin-right: 20px;"><a href="ProgrammingPage.html">Programming</a></li>
                    <li style="margin-right: 20px;"><a href="Resources.html">Resources</a></li>
                    <li style="margin-right: 20px;"><a href="Tutorials.html">Tutorials</a></li>
                    <li style="margin-right: 20px;"><a href="CommunityForum.html">Community Forum</a></li>
                </ul>
            </nav>
        </header>
    `;

    // Insert the header into the 'global-header' div
    document.getElementById("global-header").innerHTML = headerHTML;
});
