/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.New",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.5 3c.28 0 .5.22.5.5v8a.5.5 0 0 1-1 0v-8c0-.28.22-.5.5-.5ZM6.15 6.15c.2-.2.5-.2.7 0l6 6a.5.5 0 0 1-.7.7l-6-6a.5.5 0 0 1 0-.7ZM3.5 15a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1h-8Z",
    FILLED : "M15.5 2.75c.41 0 .75.34.75.75v8a.75.75 0 0 1-1.5 0v-8c0-.41.34-.75.75-.75ZM5.97 5.97c.3-.3.77-.3 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06ZM3.5 14.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-8Z"
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