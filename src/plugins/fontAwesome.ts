//引入图标库
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faAd,
  faBlog,
  faEye,
  faHeart,
  faCommentDots,
  faChevronDown,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
  faStepForward,
  faStepBackward,
  faPlayCircle,
  faPauseCircle,
  faList,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
// import {  } from '@fortawesome/free-brands-svg-icons'
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const components = [
  faUserSecret,
  faAd,
  faBlog,
  faEye,
  faHeart,
  faCommentDots,
  faChevronDown,
  faVolumeDown,
  faVolumeMute,
  faVolumeOff,
  faVolumeUp,
  faStepForward,
  faStepBackward,
  faPlayCircle,
  faPauseCircle,
  faList,
  farHeart,
  faHeadphones
];

components.forEach((item) => {
  library.add(item);
});
export default {
  install: function (app: any) {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
