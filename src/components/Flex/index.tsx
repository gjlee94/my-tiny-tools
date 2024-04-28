import { ComponentPropsWithRef, CSSProperties, ReactElement, forwardRef, ElementType } from 'react';

export interface FlexOptions<T extends ElementType = 'div'> {
  as?: T;
  children?: ReactElement[];
  ['align']?: CSSProperties['alignItems'];
  ['justify']?: CSSProperties['justifyContent'];
  ['direction']?: CSSProperties['flexDirection'];
  ['flex']?: CSSProperties['flex'];
}

export const Flex = forwardRef(function Flex<T extends ElementType>(
  props: FlexOptions<T>,
  ref: ComponentPropsWithRef<T>['ref']
) {
  const styles: CSSProperties = {
    alignItems: props.align,
    justifyContent: props.justify,
    flexDirection: props.direction,
    flex: props.flex,
  };

  const Element = props.as || 'div';

  return (
    <Element ref={ref} style={styles} {...props}>
      {props.children}
    </Element>
  );
});
