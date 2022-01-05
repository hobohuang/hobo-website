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
  faCompactDisc,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import {  } from '@fortawesome/free-brands-svg-icons'
import {
  faHeart as farHeart,
  faGrin as farGin,
  faImage as farImage,
} from "@fortawesome/free-regular-svg-icons";
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
  faHeadphones,
  faCompactDisc,
  farGin,
  farImage,
  faClock,
  faMapMarkerAlt,
];

components.forEach((item) => {
  library.add(item);
});
export default {
  install: function (app: any) {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
