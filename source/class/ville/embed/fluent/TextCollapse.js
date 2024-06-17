/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextCollapse",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5 3.5c0-.28.22-.5.5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 12c0-.28.22-.5.5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm6-8c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm0 4c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-2-2a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM3.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z",
    FILLED : "M5 3.5c0-.41.34-.75.75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 3.5Zm0 12c0-.41.34-.75.75-.75h11.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 15.5Zm6.75-8.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5ZM11 11.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75Zm-2-2a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-6 0c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"
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