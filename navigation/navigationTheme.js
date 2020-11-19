import {DefaultTheme} from '@react-navigation/native';

import Colors from '../config/colors';

export default {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        primary: Colors.red
    }
};