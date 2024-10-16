async function fetchInstagramFeed() {
    try {
        const response = await fetch('/.netlify/functions/instagram-feed');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const feedElement = document.getElementById('instagram-feed');
        feedElement.innerHTML = '';
        
        data.data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'instagram-post';
            
            const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
            
            postElement.innerHTML = `
                <a href="${post.permalink}" target="_blank">
                    <img src="${imageUrl}" alt="${post.caption || 'Instagram post'}">
                </a>
                <p>${post.caption || ''}</p>
            `;
            
            feedElement.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error fetching Instagram feed:', error);
        document.getElementById('instagram-feed').innerHTML = '<p>Error loading Instagram feed. Please try again later.</p>';
    }
}

fetchInstagramFeed();
