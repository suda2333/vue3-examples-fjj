import { Course, User } from "@/datasource/Types";
import { getShop, listShops, Order, Shop } from "@/views/homework01/homework01";
import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import * as vxt from "./VuexTypes";
export interface State {
  
  user: User;
  courses: Course[];
  exception: string;
  userCourses: Course[];
  // homework02
  shopList: Shop[];
  shopCache: Shop;
  orders: Order[];
}
const myState: State = {
  user: {
    name: "BO",
    address: "956",
    level: 1
  },
  courses: [],
  userCourses: [],
  exception: "",
  shopList: [],
  shopCache: {},
  orders: []
};
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data),
  [vxt.GET_SHOPS]: (state, data: Shop[]) => (state.shopList = data),
  [vxt.GET_SHOP]: (state, data: Shop) => (state.shopCache = data),
};
const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({ commit }, data: User) => {
    setTimeout(() => {
      commit(vxt.UPDATE_USER, data);
    }, 2000);
  },
  [vxt.GET_SHOPS]: ({ commit }) => {
    commit(vxt.GET_SHOPS, listShops());
  },
  [vxt.GET_SHOP]: ({ commit }, sid: number) => {
    const shop = getShop(sid);
    commit(vxt.GET_SHOP, shop);
    console.log(shop);
    
  }
};
const myGetters: GetterTree<State, State> = {
  [vxt.GETTER_PERMISSION]: state => (level: number) => state.user.level == level
};
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters
});
