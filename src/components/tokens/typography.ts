const getTypographyToken = <FontSize extends number, LineHeight extends number>(options: {
  fontSize: FontSize;
  lineHeight: LineHeight;
}) => `font-size: ${options.fontSize}, line-height: ${options.lineHeight}`;

const regular = <TypographyToken extends string>(typographyToken: TypographyToken) =>
  `${typographyToken} font-weight: normal` as const;
const bold = <TypographyToken extends string>(typographyToken: TypographyToken) =>
  `${typographyToken} font-weight: bold` as const;

export const TYPO_12 = getTypographyToken({ fontSize: 12, lineHeight: 16 });
export const TYPO_12_R = regular(TYPO_12);
export const TYPO_12_B = bold(TYPO_12);

export const TYPO_14 = getTypographyToken({ fontSize: 14, lineHeight: 20 });
export const TYPO_14_R = regular(TYPO_14);
export const TYPO_14_B = bold(TYPO_14);

export const TYPO_16 = getTypographyToken({ fontSize: 16, lineHeight: 24 });
export const TYPO_16_R = regular(TYPO_16);
export const TYPO_16_B = bold(TYPO_16);

export const TYPO_20 = getTypographyToken({ fontSize: 20, lineHeight: 28 });
export const TYPO_20_R = regular(TYPO_20);
export const TYPO_20_B = bold(TYPO_20);

export const TYPO_24 = getTypographyToken({ fontSize: 24, lineHeight: 32 });
export const TYPO_24_R = regular(TYPO_24);
export const TYPO_24_B = bold(TYPO_24);

export const TYPO_28 = getTypographyToken({ fontSize: 28, lineHeight: 36 });
export const TYPO_28_R = regular(TYPO_28);
export const TYPO_28_B = bold(TYPO_28);

export const TYPO_32 = getTypographyToken({ fontSize: 32, lineHeight: 40 });
export const TYPO_32_R = regular(TYPO_32);
export const TYPO_32_B = bold(TYPO_32);

export const TYPO_48 = getTypographyToken({ fontSize: 48, lineHeight: 56 });
export const TYPO_48_R = regular(TYPO_48);
export const TYPO_48_B = bold(TYPO_48);

// https://pie.design/foundations/typography/tokens/global/
