import axios from 'axios';
import Swal from 'sweetalert2';

const getAllMesin = async () => {
  try {
    const result = await axios.get('http://localhost:5000/master/mesin');
    return result.data.data;
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
          mainInfo = 'Terjadi kesalahan saat mengambil data<br />Coba lagi nanti atau hubungi tim IT.<hr />Detail Info:<br />';
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

export default getAllMesin;