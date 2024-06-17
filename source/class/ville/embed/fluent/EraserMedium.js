/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EraserMedium",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l.72-.72a5.46 5.46 0 0 1-.37-1.04L8.1 16.86a.5.5 0 0 1-.71 0L3.15 12.6a.5.5 0 0 1 0-.7l1.69-1.7L9 14.39c.01-.43.07-.84.17-1.24L5.54 9.5l6.37-6.36c.2-.2.5-.2.7 0l4.25 4.24c.2.2.2.51 0 .7L15.8 9.16c.36.1.71.22 1.04.37l.72-.72a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z",
    FILLED : "M2.44 11.2a1.5 1.5 0 0 0 0 2.12l4.24 4.24a1.5 1.5 0 0 0 2.12 0l.72-.72a5.46 5.46 0 0 1-.37-1.04L8.1 16.86a.5.5 0 0 1-.71 0L3.15 12.6a.5.5 0 0 1 0-.7l1.69-1.7L9 14.39a5.5 5.5 0 0 1 7.84-4.86l.72-.72a1.5 1.5 0 0 0 0-2.12l-4.24-4.24a1.5 1.5 0 0 0-2.12 0L2.44 11.2ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
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