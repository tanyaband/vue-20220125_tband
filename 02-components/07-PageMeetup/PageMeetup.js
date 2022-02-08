import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: { type: Number, required: true },
  },

  data() {
    return {
      meetup: null,
      error: null,
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      handler(val) {
        this.meetup = null;
        this.error = null;
        fetchMeetupById(val)
          .then((d) => (this.meetup = d))
          .catch((e) => (this.error = e.message));
      },
    },
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->

      <ui-container v-if="error">
        <ui-alert>{{ error }}</ui-alert>
      </ui-container>

      <ui-container v-else-if="!meetup">
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <meetup-view v-else :meetup="meetup"/>

    </div>`,
});
