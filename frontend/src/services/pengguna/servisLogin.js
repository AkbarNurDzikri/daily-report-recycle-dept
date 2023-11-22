import axios from 'axios';
import Swal from 'sweetalert2';

const servisLogin = async (username, password) => {
  try {
    const data = {
      username,
      password
    };
    
    const result = await axios.post('http://localhost:5000/auth/login', data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    Swal.fire({
      icon: "success",
      title: result.statusText,
      html: result.data.message
    })

    return 'success';

  } catch (error) {
    if(error) {
      Swal.fire({
        icon: "error",
        title: error.message,
        html: `Maaf, terjadi kesalahan tidak terduga.<br />Coba lagi nanti atau hubungi tim IT.`
      })
    }

    if(error.response) {
      let mainInfo = '';
      switch(error.response.status) {
        case 500:
          mainInfo = 'Maaf, terjadi kesalahan di internal server.<br />Coba lagi nanti atau hubungi tim IT.<hr />Detail Info:<br />';
          break;
        case 403:
          mainInfo = '';
          break;
      }

      Swal.fire({
        icon: "error",
        title: error.response.statusText,
        html: `${mainInfo}${error.response.data.errors}`
      })
    }
  }
}

export default servisLogin;