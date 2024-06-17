/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DataTrending",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 3.5a.5.5 0 0 0-1 0v11A2.5 2.5 0 0 0 5.5 17h11a.5.5 0 0 0 0-1h-11A1.5 1.5 0 0 1 4 14.5v-11ZM12.5 5a.5.5 0 0 0 0 1h2.8L11 10.3 9.35 8.64a.5.5 0 0 0-.7 0l-3.5 3.5a.5.5 0 0 0 .7.7L9 9.71l1.65 1.64a.5.5 0 0 0 .7 0L16 6.71V9.5a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5h-4Z",
    FILLED : "M4.5 3.75a.75.75 0 0 0-1.5 0v10.5A2.75 2.75 0 0 0 5.75 17h10.5a.75.75 0 0 0 0-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V3.75ZM12.75 5a.75.75 0 0 0 0 1.5h1.69L11 9.94 9.53 8.47a.75.75 0 0 0-1.06 0l-2.75 2.75a.75.75 0 1 0 1.06 1.06L9 10.06l1.47 1.47a.75.75 0 0 0 1.06 0l3.97-3.97v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5Z"
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