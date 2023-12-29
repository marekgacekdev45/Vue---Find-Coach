import { createStore } from "vuex";

import coachModules from './modules/coaches/index'
import requestModules from './modules/requests/index'

const store = createStore({
modules:{
    coaches:coachModules,
    request:requestModules
}
})

export default store