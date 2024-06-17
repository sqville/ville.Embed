/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ClearFormatting",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.25 3a.5.5 0 0 0-.5.42l-.24 1.5a.5.5 0 0 0 .98.16L4.67 4h3.57l-1.73 9.91a.5.5 0 0 0-.01.09h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1l1.74-9.91A.5.5 0 0 0 9.25 4h3.41l-.15.92a.5.5 0 1 0 .98.16l.25-1.5a.5.5 0 0 0-.49-.58h-9ZM9.6 17c-.16-.32-.3-.65-.4-1H2.5a.5.5 0 0 0 0 1h7.1Zm9.4-2.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z",
    FILLED : "M4.47 3c-.38 0-.7.28-.75.65l-.13 1a.75.75 0 1 0 1.49.2l.04-.35H7.9l-1.57 9h-.58a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.4l1.57-9h2.69l-.02.16a.75.75 0 1 0 1.48.2l.14-1.01a.75.75 0 0 0-.75-.85h-8.5ZM2.75 15.5a.75.75 0 0 0 0 1.5H9.6a5.46 5.46 0 0 1-.5-1.5H2.74Zm16.25-1a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.65-1.15a.5.5 0 0 0-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 0 0-.7.7l1.14 1.15-1.14 1.15a.5.5 0 0 0 .7.7l1.15-1.14 1.15 1.14a.5.5 0 0 0 .7-.7l-1.14-1.15 1.14-1.15Z"
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