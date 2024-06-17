/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ContractUpRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 6c0-1.1.9-2 2-2h4v4c0 1.1.9 2 2 2h4v4a2 2 0 0 1-2 2h-2.5a.5.5 0 0 0 0 1H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2.5a.5.5 0 0 0 1 0V6Zm8 3a1 1 0 0 1-1-1V4h3a2 2 0 0 1 2 2v3h-4Zm-9 2.5c0 .28.22.5.5.5h3.8l-4.15 4.15a.5.5 0 0 0 .7.7L8 12.71v3.79a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5Z",
    FILLED : "M6 4a2 2 0 0 0-2 2v2.5a.5.5 0 0 1-1 0V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-2.5a.5.5 0 0 1 0-1H14a2 2 0 0 0 2-2v-4h-4a2 2 0 0 1-2-2V4H6Zm-2.5 8a.5.5 0 0 1 0-1h5c.28 0 .5.22.5.5v5a.5.5 0 0 1-1 0v-3.8l-4.15 4.15a.5.5 0 0 1-.7-.7L7.29 12H3.5Z"
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