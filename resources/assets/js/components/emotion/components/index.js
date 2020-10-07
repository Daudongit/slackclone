// import vue
import Vue from 'vue';

// import component
import EmojiComponent from './Emoji.vue';

const components = {
  EmojiComponent
};

Object.keys(components).forEach(component => {
  Vue.component(component, components[component]);
});

const ChatEmoji = components;

export { default as ChatEmoji } from "./Emoji.vue";
export { default as emojis } from "../emoji/index";