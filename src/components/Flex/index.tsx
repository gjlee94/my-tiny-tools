import { ComponentPropsWithRef, CSSProperties, forwardRef, ElementType } from 'react';

export type FlexOptions<T extends ElementType = 'div'> = {
  as?: T;
  ['align']?: CSSProperties['alignItems'];
  ['justify']?: CSSProperties['justifyContent'];
  ['direction']?: CSSProperties['flexDirection'];
  ['flex']?: CSSProperties['flex'];
} & React.ComponentPropsWithoutRef<T>;

export const Flex = forwardRef(function Flex<T extends ElementType>(
  props: FlexOptions<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const styles: CSSProperties = {
    display: 'flex',
    alignItems: props.align,
    justifyContent: props.justify,
    flexDirection: props.direction,
    flex: props.flex,
  };

  const Element = props.as || 'div';

  return <Element ref={ref} style={styles} {...props} />;
});
