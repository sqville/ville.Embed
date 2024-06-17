/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EraserSmall",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l2.22-2.2a4.06 4.06 0 0 1 .18-1.6l-.7.7-4.96-4.95 6.37-6.36c.2-.2.5-.2.7 0l4.25 4.24c.2.2.2.51 0 .7l-3.1 3.1a4 4 0 0 1 1.6-.17l2.2-2.22a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2Zm.7 1.41a.5.5 0 0 1 0-.7l1.7-1.7 4.95 4.96-1.7 1.69a.5.5 0 0 1-.7 0L3.15 12.6ZM15 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    FILLED : "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l2.22-2.2a4 4 0 0 1 4.34-4.34l2.2-2.22a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2Zm.7 1.41a.5.5 0 0 1 0-.7l1.7-1.7 4.95 4.96-1.7 1.69a.5.5 0 0 1-.7 0L3.15 12.6ZM15 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
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