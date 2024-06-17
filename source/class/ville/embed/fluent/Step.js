/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Step",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4V8a1 1 0 0 1 1-1h4V3Zm5 0h-4v4a1 1 0 0 1-1 1H8v4a1 1 0 0 1-1 1H3v4h12a2 2 0 0 0 2-2V3Z",
    FILLED : "M13 2a1 1 0 0 0-1 1v4H8a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1h-4Z"
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