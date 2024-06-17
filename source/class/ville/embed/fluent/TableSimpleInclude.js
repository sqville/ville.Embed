/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableSimpleInclude",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v3.63a2.74 2.74 0 0 0-1-.53V5.5c0-.83-.67-1.5-1.5-1.5h-4v4.6c-.37.1-.71.29-1 .53V4h-4C4.67 4 4 4.67 4 5.5v4h5.13c-.24.29-.42.63-.53 1H4v4c0 .83.67 1.5 1.5 1.5h3.1c.1.37.29.71.53 1H5.5A2.5 2.5 0 0 1 3 14.5v-9Zm6.5 5.75c0-.97.78-1.75 1.75-1.75h4c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-4c-.97 0-1.75-.78-1.75-1.75v-4Z",
    FILLED : "M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.13c.11-.14.23-.26.37-.37V3h-4ZM3 10.5h5.6c-.06.24-.1.49-.1.75v4c0 .66.24 1.27.63 1.75H5.5A2.5 2.5 0 0 1 3 14.5v-4Zm14-5v3.63a2.74 2.74 0 0 0-1.75-.63h-4c-.26 0-.51.04-.75.1V3h4A2.5 2.5 0 0 1 17 5.5Zm-7.5 5.75c0-.97.78-1.75 1.75-1.75h4c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-4c-.97 0-1.75-.78-1.75-1.75v-4Z"
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