const accessToken = 'IGQWROa29kOVBGNFdxN1VHejc5dWR1bkZArbjViWXBtdXpxU3pZAOHc2LTlGaTJZAM0pwTzV3eWxyaXpWSVRQdFJmaFhLSkhqb19vcTlwRTJSSHc5UEF5U0pacHVqWDVMbFRRdEQ2TktBUlFCNzlMQ1BtYXo2RENycFUZD';
const feedElement = document.getElementById('instagram-feed');

async function fetchInstagramFeed() {
    try {
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
        const data = await response.json();
        
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
        feedElement.innerHTML = '<p>Error loading Instagram feed. Please try again later.</p>';
    }
}

fetchInstagramFeed();
