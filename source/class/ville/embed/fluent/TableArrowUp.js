/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableArrowUp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V8h-3v1.2c-.35.1-.68.24-1 .4V8H8v4h1.6c-.16.32-.3.65-.4 1H8v3h1.2c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4-6h4V4H8v3Zm6.5-3H13v3h3V5.5c0-.78-.6-1.42-1.36-1.5h-.14ZM4 5.5V7h3V4H5.5c-.78 0-1.42.6-1.5 1.36v.14ZM7 12V8H4v4h3Zm12 2.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 1 0 1 0v-2.8l1.15 1.15c.2.2.5.2.7 0Z",
    FILLED : "M17 7h-4V3h1.5A2.5 2.5 0 0 1 17 5.5V7ZM7 8v4H3V8h4Zm5 1.6A5.52 5.52 0 0 0 9.6 12H8V8h4v1.6Zm5 0a5.48 5.48 0 0 0-4-.4V8h4v1.6ZM9.2 13a5.5 5.5 0 0 0 .4 4H8v-4h1.2ZM3 13h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm9-10v4H8V3h4ZM7 7V3H5.5A2.5 2.5 0 0 0 3 5.5V7h4Zm12 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-2.15.35a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.35-.15.5.5 0 0 0-.35.15l-2 2a.5.5 0 0 0 .7.7L14 13.71v2.79a.5.5 0 1 0 1 0v-2.8l1.15 1.15c.2.2.5.2.7 0Z"
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