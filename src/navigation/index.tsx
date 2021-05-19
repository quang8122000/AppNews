import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import * as React from 'react';
import {createService} from '../configs/api';
import App from './App';
import {DetailsBooks} from '../screens/Details/detailsBooks';
import {DetailNewAll} from '../screens/Details/detailNewAll';
import ResultsofSearch from '../screens/searchArticle/resultsofSearch';
import Splash from '../screens/Splash';
const Stack = createStackNavigator();

const Index = props => {
  React.useEffect(() => {
    createService();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'News App'} component={App} {...props} />
        <Stack.Screen name={'DetailsBooks'} component={DetailsBooks} />
        <Stack.Screen name={'DetailNewAll'} component={DetailNewAll} />
        <Stack.Screen name={'ResultsofSearch'} component={ResultsofSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;
