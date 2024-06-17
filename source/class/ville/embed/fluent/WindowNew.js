/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.WindowNew",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.52 6a.5.5 0 0 0 0 1h2.77l-4.14 4.15a.5.5 0 0 0 .7.7L13 7.71v2.77a.5.5 0 0 0 1 0V6.5a.5.5 0 0 0-.5-.5H9.52Zm3.25 11a2.5 2.5 0 0 0 2.47-2.11A2.5 2.5 0 0 0 17 12.5v-7A2.5 2.5 0 0 0 14.5 3h-7a2.5 2.5 0 0 0-2.4 1.8A2.5 2.5 0 0 0 3 7.27v6.23A3.5 3.5 0 0 0 6.5 17h6.27ZM4 7.27c0-.66.42-1.21 1-1.42v6.65A2.5 2.5 0 0 0 7.5 15h6.68c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 0 1 4 13.5V7.27ZM7.5 4h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 6 12.5v-7C6 4.67 6.67 4 7.5 4Z",
    FILLED : "M12.77 17a2.5 2.5 0 0 0 2.45-2.01A2 2 0 0 0 17 13V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 1.81 2.5 2.5 0 0 0-2 2.46v6.23A3.5 3.5 0 0 0 6.5 17h6.27ZM4 7.27c0-.66.42-1.21 1-1.42V13c0 1.1.9 2 2 2h7.18c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 0 1 4 13.5V7.27ZM9.52 6h3.98c.28 0 .5.22.5.5v3.98a.5.5 0 0 1-1 0V7.71l-4.15 4.14a.5.5 0 0 1-.7-.7L12.29 7H9.52a.5.5 0 0 1 0-1Z"
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