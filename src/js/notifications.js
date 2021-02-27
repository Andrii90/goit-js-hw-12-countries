import { error,defaults} from '@pnotify/core';
import 'material-design-icons/iconfont/material-icons.css';
import '@pnotify/core/dist/Material.css';
defaults.styling = 'material';
defaults.icons = 'material';

function notificationsError(text) {
  const notificationsError = error({
    title: 'ERROR',
    text: `${text}`,
    closer: false,
    sticker: false,
    delay: 1000,
  });

  notificationsError.on('click', () => {
    notificationsError.close();
  });
}
export {notificationsError};
