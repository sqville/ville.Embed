/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableFreezeRow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9ZM4 12V8h3v4H4Zm12-5H4V5.36A1.5 1.5 0 0 1 5.5 4h9.14A1.5 1.5 0 0 1 16 5.5V7ZM8 8h4v4H8V8Zm-4 6.5V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5Zm8-1.5v3H8v-3h4Zm4-5v4h-3V8h3Zm0 5V14.64A1.5 1.5 0 0 1 14.5 16H13v-3h3Z",
    FILLED : "M14.5 4c.83 0 1.5.67 1.5 1.5V8h-3v4h4V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5C4 4.67 4.67 4 5.5 4h9ZM3 14.5V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5Zm9-1.5H8v4h4v-4ZM8 8v4h4V8H8Zm5 9v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13Z"
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