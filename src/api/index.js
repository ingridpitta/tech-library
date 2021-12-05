import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL ;
const collectionId = process.env.REACT_APP_COLLECTION_ID;
const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CLIENT_TOKEN}`,
  }
}

axios.defaults.baseURL = baseUrl

export const shareCollection = async(email) => axios({
  method: 'post',
  url: `/rest/v1/collection/${collectionId}/sharing`,
  data: { role: 'member', emails: [email]},
  ...config,
}).then(response => response).catch(error => {
  throw new Error(error)
})