import React from 'react';
import {
  default as IconButton,
  IIconButtonProps,
} from '../../composites/IconButton';
import Icon from '../../primitives/Icon';

export type ICloseButtonProps = IIconButtonProps;

const CloseButton = (props: ICloseButtonProps) => {
  const iconSize: any = { xs: 6, sm: 8, md: 10, lg: 12 };
  return (
    <IconButton
      {...props}
      icon={
        <Icon name={'close'} size={props.size ? iconSize[props.size] : 8} />
      }
    />
  );
};

export default React.memo(CloseButton);