/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FoodToast",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6.23 7.95c0-.27.22-.5.5-.5h4.34c.28 0 .5.23.5.5v4.1a.5.5 0 0 1-.5.5H6.73a.5.5 0 0 1-.5-.5v-4.1Zm1 3.6h3.34v-3.1H7.23v3.1ZM1.79 4.98A4.05 4.05 0 0 1 5.4 2.5h9.93A3.73 3.73 0 0 1 19 6.18c0 1.33-.76 2.46-1.28 3.01 0 .7.02 1.66.06 2.67v.3c.04 1 .08 2.05.08 2.93 0 .82-.1 1.52-.59 1.95-.24.22-.54.33-.86.39-.31.05-.68.07-1.1.07H5.16c-1.18 0-1.9-.35-2.26-.96a2.53 2.53 0 0 1-.28-1.45V9.2a3.64 3.64 0 0 1-.82-4.22ZM5.4 3.5c-1.16 0-2.21.8-2.7 1.88a2.65 2.65 0 0 0 .73 3.22c.12.1.18.24.18.38v6.21c0 .33 0 .6.14.84.1.18.4.47 1.4.47h7.63c.4 0 .68-.02.89-.06.2-.03.28-.09.32-.13.05-.04.1-.12.14-.32.04-.2.06-.5.06-.9v-2c-.02-1.42-.03-2.87 0-3.87a.5.5 0 0 1 .15-.34l.3-.3c.24-.21.44-.4.63-.68.25-.35.46-.86.5-1.73 0-.67-.39-1.34-1-1.85a3.28 3.28 0 0 0-1.99-.82H5.4Zm9.71 12.69-.08.31h.3c.4 0 .69-.02.9-.06.23-.04.33-.1.4-.15.12-.1.24-.36.24-1.2 0-.86-.04-1.89-.07-2.9l-.01-.3c-.04-1.1-.07-2.16-.05-2.92a.5.5 0 0 1 .15-.35 3.73 3.73 0 0 0 1.12-2.44 2.73 2.73 0 0 0-2.65-2.68l.06.06a3.52 3.52 0 0 1 1.35 2.62v.03a4.24 4.24 0 0 1-.67 2.26c-.26.38-.58.67-.84.91l-.07.07c-.02.97-.02 2.3 0 3.6v2.04c0 .42-.02.8-.08 1.1Z",
    FILLED : "M6.78 7.45a.5.5 0 0 0-.5.5v4.1c0 .27.22.5.5.5h4.34a.5.5 0 0 0 .5-.5v-4.1a.5.5 0 0 0-.5-.5H6.78Zm.5 1h3.34v3.1H7.28v-3.1ZM5.45 2.5c-1.63 0-3 1.1-3.6 2.48-.6 1.33-.49 3 .81 4.22v5.98c0 .3-.01.87.28 1.36.36.6 1.08.96 2.26.96h10.18c.4 0 .78-.02 1.1-.07.3-.06.6-.17.85-.39.5-.43.59-1.13.59-1.95 0-.88-.04-1.92-.07-2.93a66.88 66.88 0 0 1-.07-2.97 4.68 4.68 0 0 0 1.28-3 3.73 3.73 0 0 0-3.68-3.69H5.45Zm7.38 1c.62 0 1.39.3 2 .82.6.51.99 1.18 1 1.85-.05.75-.21 1.24-.41 1.58-.16.27-.35.48-.56.69l-.16.15a13.81 13.81 0 0 0-.31.3l-.14.13v.2c-.04 1-.03 2.44-.02 3.84v.01l.01 2.02c0 .4-.02.7-.06.9-.04.2-.1.28-.14.32-.04.04-.12.1-.32.13a9.84 9.84 0 0 1-.89.06H5.2c-1 0-1.3-.29-1.4-.47-.14-.23-.14-.51-.14-.84V8.99a.5.5 0 0 0-.18-.39 2.65 2.65 0 0 1-.72-3.22 3.05 3.05 0 0 1 2.7-1.88h7.37Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});