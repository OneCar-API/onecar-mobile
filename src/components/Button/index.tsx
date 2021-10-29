import React from 'react';

import { ButtonTouchable, ButtonText } from './styles';

type ButtonProps = {
    loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
    <ButtonTouchable  {...rest}>
        <ButtonText>
            {loading ? 'Carregando...' : children}
        </ButtonText>
        
    </ButtonTouchable>);

export default Button;