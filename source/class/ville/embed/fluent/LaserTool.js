/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LaserTool",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 2.5a.5.5 0 0 0-1 0V5a2 2 0 0 0 1 1.73v.77C4 8.33 4.67 9 5.5 9h4v3.5a.5.5 0 0 0 1 0V9h4c.83 0 1.5-.67 1.5-1.5v-.77A2 2 0 0 0 17 5V2.5a.5.5 0 0 0-1 0V5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2.5ZM5 7h10v.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7Z",
    FILLED : "M3.5 2a.5.5 0 0 0-.5.5V5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5h-13Z"
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