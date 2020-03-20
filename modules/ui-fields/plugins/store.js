import actions from './actions';
import mutations from './mutations';
import getters from './getters';

export default async ({ store }) => {
  store.registerModule(
	"uiFields",
	{
	  namespaced: true,
	  state: () => ({
		fields: [],
		errors: []
	  }),
	  actions,
	  mutations,
	  getters
	},
	{
	  preserveState: !!store.state.uiFields
	}
  );
};
