import { CSSProperties, forwardRef } from 'react';

export interface FlexOptions {
  ['align']?: CSSProperties['alignItems'];
  ['justify']?: CSSProperties['justifyContent'];
  ['direction']?: CSSProperties['flexDirection'];
  ['flex']?: CSSProperties['flex'];
}

export const Flex = forwardRef<HTMLDivElement, FlexOptions>((props, ref) => {
  const styles: CSSProperties = {
    alignItems: props.align,
    justifyContent: props.justify,
    flexDirection: props.direction,
    flex: props.flex,
  };

  return <div ref={ref} style={styles} />;
});
