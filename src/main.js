// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

import VueQuillEditor from "vue-quill-editor";
import Quill from "quill";

import { ImageDrop } from "quill-image-drop-module";

import { ImagePaste } from "./imagePasteClass";

Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imagePaste", ImagePaste);

Vue.use(VueQuillEditor);
Vue.component("quill-editor", VueQuillEditor.quillEditor);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
