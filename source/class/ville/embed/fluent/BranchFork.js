/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BranchFork",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9 5a3 3 0 1 0-3.5 2.96v4.08a3 3 0 1 0 1 0V11H12a2.5 2.5 0 0 0 2.5-2.5v-.54a3 3 0 1 0-1 0v.54c0 .83-.67 1.5-1.5 1.5H6.5V7.96A3 3 0 0 0 9 5ZM6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
    FILLED : "M9 5a3 3 0 0 1-2.5 2.96V10H12c.83 0 1.5-.67 1.5-1.5v-.54a3 3 0 1 1 1 0v.54A2.5 2.5 0 0 1 12 11H6.5v1.04a3 3 0 1 1-1 0V7.96A3 3 0 1 1 9 5Z"
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