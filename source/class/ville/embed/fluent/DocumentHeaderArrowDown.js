/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentHeaderArrowDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 0 1-.66-1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.02c.34.03.68.1 1 .19V4a2 2 0 0 0-2-2H6Zm1 2a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H7Zm12 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z",
    FILLED : "M6 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h4.26A5.5 5.5 0 0 1 16 9.2V4a2 2 0 0 0-2-2H6Zm1 2h6a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2Zm12 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4.85 2.35a.5.5 0 0 0 .35.15.5.5 0 0 0 .35-.15l2-2a.5.5 0 0 0-.7-.7L15 15.29V12.5a.5.5 0 0 0-1 0v2.8l-1.15-1.15a.5.5 0 0 0-.7.7l2 2Z"
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