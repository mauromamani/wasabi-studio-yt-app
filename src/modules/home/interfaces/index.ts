type LayoutAlign = 'start' | 'end';
export interface StylesConfig {
  [key: string]: number | boolean | string;
  /**
   * Chat Layout
   */
  layoutScale: number;
  layoutAlign: LayoutAlign;
  layoutMarginY: number;
  layoutMarginX: number;
  /**
   * Badge
   */
  badgeDisplayBadge: boolean;
  badgeFontSize: number;
  /**
   * Chat Design
   */
  chatAllCaps: boolean;
  chatMessageFontSize: number;
  chatAuthorFontSize: number;
  chatEmoteSize: number;

  /**
   * Support Card Design
   */
  supportCardAllCaps: boolean;
  supportCardDisplayCard: boolean;
  supportCardTitleFontSize: number;
  supportCardSubTitleFontSize: number;
  supportCardOtherTextFontSize: number;
  supportCardMessageFontSize: number;
  supportCardEmoteSize: number;
}
