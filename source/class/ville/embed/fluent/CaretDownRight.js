/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CaretDownRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.3 5.25a1 1 0 0 1 1.7.7v7.55c0 .83-.67 1.5-1.5 1.5H5.96a1 1 0 0 1-.71-1.7l8.04-8.05Zm.7.7L5.96 14h7.54a.5.5 0 0 0 .5-.5V5.96Z",
    FILLED : "M15 5.96a1 1 0 0 0-1.7-.71l-8.05 8.04a1 1 0 0 0 .7 1.71h7.55c.83 0 1.5-.67 1.5-1.5V5.96Z"
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