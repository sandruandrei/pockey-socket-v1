/// <reference types="pixi.js" />
export interface ExtendedTextStyle extends PIXI.TextStyleOptions {
    valign?: "top" | "middle" | "bottom" | "baseline" | number;
    debug?: boolean;
}
export interface TextStyleSet {
    [key: string]: ExtendedTextStyle;
}
export interface MstDebugOptions {
    spans: {
        enabled?: boolean;
        baseline?: string;
        top?: string;
        bottom?: string;
        bounding?: string;
        text?: boolean;
    };
    objects: {
        enabled?: boolean;
        bounding?: string;
        text?: boolean;
    };
}
export default class MultiStyleText extends PIXI.Text {
    private static DEFAULT_TAG_STYLE;
    static debugOptions: MstDebugOptions;
    private textStyles;
    constructor(text: string, styles: TextStyleSet);
    styles: TextStyleSet;
    setTagStyle(tag: string, style: ExtendedTextStyle): void;
    deleteTagStyle(tag: string): void;
    private _getTextDataPerLine(lines);
    private getFontString(style);
    private createTextData(text, style, tagName);
    private getDropShadowPadding();
    updateText(): void;
    protected wordWrap(text: string): string;
    protected updateTexture(): void;
    private assign(destination, ...sources);
}
