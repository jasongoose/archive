import DefaultTheme from "vitepress/theme";
import Image from "../../../components/Image.vue";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component("Image", Image);
  },
};
