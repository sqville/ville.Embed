/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnBidirectionalDownRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13.85 2.15a.5.5 0 0 0-.7.7L16.29 6H9a3 3 0 0 0-3 3v7.3l-3.15-3.15a.5.5 0 0 0-.7.7l4 4c.2.2.5.2.7 0l4-4a.5.5 0 0 0-.7-.7L7 16.29V9c0-1.1.9-2 2-2h7.3l-3.15 3.15a.5.5 0 0 0 .7.7l4-4a.5.5 0 0 0 0-.7l-4-4Z",
    FILLED : "M13.78 2.22a.75.75 0 1 0-1.06 1.06L15.44 6H9a3 3 0 0 0-3 3v6.44l-2.72-2.72a.75.75 0 0 0-1.06 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 1 0-1.06-1.06L7.5 15.44V9c0-.83.67-1.5 1.5-1.5h6.44l-2.72 2.72a.75.75 0 1 0 1.06 1.06l4-4c.3-.3.3-.77 0-1.06l-4-4Z"
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