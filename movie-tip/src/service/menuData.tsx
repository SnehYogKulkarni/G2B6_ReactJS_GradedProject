import axios from 'axios';

const apiBaseUrl = 'http://localhost:4000';


const menuData = async () => {
    const response = await axios.get(`${apiBaseUrl}/db`);
    const menuitem = Object.keys(response.data);
    return menuitem;
}

export default menuData