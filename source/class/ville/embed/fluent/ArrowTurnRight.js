/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowTurnRight",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.15 3.15c.2-.2.5-.2.7 0l4 4c.2.2.2.5 0 .7l-4 4a.5.5 0 0 1-.7-.7L14.29 8H8a2 2 0 0 0-2 2v6.5a.5.5 0 0 1-1 0V10a3 3 0 0 1 3-3h6.3l-3.15-3.15a.5.5 0 0 1 0-.7Z",
    FILLED : "M10.72 3.22c.3-.3.77-.3 1.06 0l4 4c.3.3.3.77 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H7c-.83 0-1.5.67-1.5 1.5v6.25a.75.75 0 0 1-1.5 0V10a3 3 0 0 1 3-3h6.44l-2.72-2.72a.75.75 0 0 1 0-1.06Z"
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