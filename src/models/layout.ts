import { Effect, Reducer, Subscription } from 'umi';

export interface LayoutModelState {
  navlist: [];
}

export interface LayoutModelType {
  namespace: 'layout';
  state: LayoutModelState;

  reducers: {
    save: Reducer<LayoutModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
}

const LayoutModel: LayoutModelType = {
  namespace: 'layout',
  state: {
    navlist: [],
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
};

export default LayoutModel;
