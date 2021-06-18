//引入图标库
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faAd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const components = [faUserSecret, faAd];

components.forEach((item) => {
  library.add(item);
});
export default {
  install: function (app: any) {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};
