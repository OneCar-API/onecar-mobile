import { SvgUri } from "react-native-svg"
import React from "react";
import { View } from 'react-native'

import LogoSvg from '../../assets/LogoSvg.svg'

const Logo = () => {

    return (
        <View>
           <LogoSvg width={250} />
        </View>
    )
}
export default Logo;