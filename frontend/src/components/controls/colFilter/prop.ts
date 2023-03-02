export interface ColFilterProp {
  onValueChange: any;
  value:
    | {
        keyword: string;
        adWords: string;
        totalLink: string;
        result: string;
        resultTime: string;
      }
    | any;
}
