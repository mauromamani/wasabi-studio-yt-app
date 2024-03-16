export interface StylesConfig {
  [key: string]: number | boolean;
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

  /**
   * Support Card Design
   */
  supportCardAllCaps: boolean;
  supportCardTitleFontSize: number;
  supportCardSubTitleFontSize: number;
  supportCardOtherTextFontSize: number;
  supportCardMessageFontSize: number;
}
