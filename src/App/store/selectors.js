export const storageSelector = state => state.storageReducers;
export const isLoginSelector = state => storageSelector(state).isLogin;
export const currentNewsSelector = state => state.storageReducers;
