import  { createStackNavigator } from 'react-navigation';

import HuntsList from './index';
import EditItem from './edititem';
import HuntScreen from './EditHunt';


const navigator = createStackNavigator(
    {

    Hunts: {screen: HuntsList},
    EditHunt : {screen:HuntScreen},
    EditItem: {screen: EditItem},

    },
    {
        initialRouteName:"Hunts",
    }
);

navigator.navigationOptions = ({navigation}) => {

    let visible = true;

    console.log("state of navigation ", navigation.state);

    //If not at root of stack where hunt list showed, do not show tabs.
    if (navigation.state.index > 0){

        visible = false;
    }

    return {
        tabBarVisible : visible
    };
}

export default navigator;