/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataLine",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM13 5.5a2.5 2.5 0 1 1 1.56 2.32l-1.29 1.92A2.5 2.5 0 0 1 11.5 14a2.5 2.5 0 0 1-2.05-1.08L6.95 14A2.51 2.51 0 0 1 4.5 17a2.5 2.5 0 1 1 2.05-3.92L9.05 12A2.51 2.51 0 0 1 11.5 9c.33 0 .65.07.94.18l1.29-1.92A2.5 2.5 0 0 1 13 5.5Zm-3 6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Zm-7 3a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z",
    FILLED : "M18 5.5a2.5 2.5 0 0 1-3.44 2.32l-1.29 1.92A2.5 2.5 0 0 1 11.5 14a2.5 2.5 0 0 1-2.05-1.08L6.95 14A2.51 2.51 0 0 1 4.5 17a2.5 2.5 0 1 1 2.05-3.92L9.05 12a2.51 2.51 0 0 1 3.4-2.83l1.28-1.92A2.5 2.5 0 0 1 15.5 3 2.5 2.5 0 0 1 18 5.5Z"
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