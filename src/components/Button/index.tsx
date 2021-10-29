import React from 'react';
import { TouchableOpacity, TouchableOpacityComponent, TouchableOpacityProps } from 'react-native';

import { ButtonTouchable, ButtonText } from './styles';

type ButtonProps = TouchableOpacityProps & {
    loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
    <ButtonTouchable {...rest}>
        <ButtonText>
            {loading ? 'Carregando...' : children}
        </ButtonText>
        
    </ButtonTouchable>);

export default Button;