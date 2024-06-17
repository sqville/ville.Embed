/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PulseSquare",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.97 6.33a.5.5 0 0 0-.94 0L6.65 10H5.5a.5.5 0 0 0 0 1H7c.2 0 .4-.13.47-.32l1.02-2.73 2.04 5.72a.5.5 0 0 0 .92.05L12.8 11h1.69a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.45.28l-.97 1.95-2.1-5.9ZM5 3a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5ZM4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z",
    FILLED : "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm5.97 1.33a.5.5 0 0 0-.94 0L6.65 10H5.5a.5.5 0 0 0 0 1H7c.2 0 .4-.13.47-.32l1.02-2.73 2.04 5.72a.5.5 0 0 0 .92.05L12.8 11h1.69a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.45.28l-.97 1.95-2.1-5.9Z"
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