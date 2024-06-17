/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SwipeDown",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M14 6a4 4 0 0 1-2.5 3.7V8.6a3 3 0 1 0-3 0v1.1A4 4 0 1 1 14 6ZM9.65 17.85c.2.2.5.2.7 0l3-3a.5.5 0 0 0-.7-.7l-2.15 2.14V5.5a.5.5 0 0 0-1 0v10.8l-2.15-2.15a.5.5 0 1 0-.7.7l3 3Z",
    FILLED : "M14 6a4 4 0 0 1-2.25 3.6V8.44a3 3 0 1 0-3.5 0V9.6A4 4 0 1 1 14 6ZM9.47 17.78c.3.3.77.3 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V5.75a.75.75 0 0 0-1.5 0v9.69l-1.22-1.22a.75.75 0 0 0-1.06 1.06l2.5 2.5Z"
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