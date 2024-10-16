const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${accessToken}`);
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Instagram feed' })
    };
  }
};
