/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShareAndroid",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 5.5a2.5 2.5 0 1 1 .53 1.54L7.92 9.35a2.5 2.5 0 0 1 0 1.3l4.61 2.3a2.5 2.5 0 1 1-.45.9l-4.61-2.3a2.5 2.5 0 1 1 0-3.1l4.61-2.3A2.5 2.5 0 0 1 12 5.5ZM14.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm0 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM4 10a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    FILLED : "M17 5.5a2.5 2.5 0 0 1-4.47 1.54L7.92 9.35a2.5 2.5 0 0 1 0 1.3l4.61 2.3a2.5 2.5 0 1 1-.45.9l-4.61-2.3a2.5 2.5 0 1 1 0-3.1l4.61-2.3A2.5 2.5 0 1 1 17 5.5Z"
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