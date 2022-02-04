import { defineComponent } from './vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem: MeetupAgendaItem,
  },

  props: {
    agenda: { type: Array, require: true, default: () => [] },
  },

  template: `
    <ul class="agenda">
      <li class="agenda__item">
        <!-- meetup agenda item -->
        <meetup-agenda-item v-for="item in agenda" :agenda-item="item"/>
      </li>
    </ul>`,
});
