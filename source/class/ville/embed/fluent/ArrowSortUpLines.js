/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowSortUpLines",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15 17.5a.5.5 0 0 1-1 0V3.7l-2.15 2.15a.5.5 0 0 1-.7-.7l3-3c.2-.2.5-.2.7 0l3 3a.5.5 0 0 1-.7.7L15 3.71V17.5ZM2.5 16a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1h-9ZM5 12.5c0 .28.22.5.5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5ZM8.5 10a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Z",
    FILLED : "M15 17.25a.75.75 0 0 1-1.5 0V4.68l-1.45 1.58a.75.75 0 0 1-1.1-1.02l2.75-3a.75.75 0 0 1 1.1 0l2.75 3a.75.75 0 0 1-1.1 1.02L15 4.68v12.57ZM2.75 16.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5h-8.5ZM5 12.75c0 .41.34.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75Zm3.75-2.25a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5h-2.5Z"
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