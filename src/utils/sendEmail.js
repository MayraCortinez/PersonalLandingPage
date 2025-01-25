import { init, send } from '@emailjs/browser';
import toast from 'react-hot-toast';

init('RKfNABnEW10yFFDti');

const sendEmail = (data) => {
  return send('service_zavna0p', 'template_tvkp19h', {
    from_name: data.nombre,
    from_email: data.email,
    message: data.mensaje,
  });
};

export default sendEmail;
