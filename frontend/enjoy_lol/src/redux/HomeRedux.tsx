const CHANGENAME = 'Home/changeName' as const;

export const changeName = (name: string) => ({type: CHANGENAME, payload: name})

type HomeAction =
  | ReturnType<typeof changeName>;

type HomeState = {
    name: string;
}

const initialState: HomeState = {
    name: ''
};

function HomeReducer(state: HomeState = initialState, action: HomeAction) {
    switch (action.type) {
      case CHANGENAME:
        return Object.assign({}, state, {name: action.payload});
      default:
        return state
    }
  }
  
  export default HomeReducer;