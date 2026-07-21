import RootNavigator from './src/utility/navigation/RootNavigator.tsx';
import { Provider } from 'react-redux';
import { store } from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );

};

export default App;
