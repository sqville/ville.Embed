/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.UninstallApp",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4.5 17A1.5 1.5 0 0 1 3 15.5v-11C3 3.67 3.67 3 4.5 3H9c.83 0 1.5.67 1.5 1.5v5h5c.83 0 1.5.67 1.5 1.5v4.5c0 .83-.67 1.5-1.5 1.5h-11Zm11-6.5h-5V16h5a.5.5 0 0 0 .5-.5V11a.5.5 0 0 0-.5-.5Zm-6 0H4v5c0 .28.22.5.5.5h5v-5.5Zm0-1v-5A.5.5 0 0 0 9 4H4.5a.5.5 0 0 0-.5.5v5h5.5Zm4.35-2.65a.5.5 0 0 1-.7-.7l1.64-1.65-1.64-1.65a.5.5 0 0 1 .7-.7l1.65 1.64 1.65-1.64a.5.5 0 0 1 .7.7L16.21 4.5l1.64 1.65a.5.5 0 0 1-.7.7L15.5 5.21l-1.65 1.64Z",
    FILLED : "M4.5 17A1.5 1.5 0 0 1 3 15.5v-11C3 3.67 3.67 3 4.5 3h4.75c.83 0 1.5.67 1.5 1.5v4.75h4.75c.83 0 1.5.67 1.5 1.5v4.75c0 .83-.67 1.5-1.5 1.5h-11Zm11-6.25h-4.75v4.75h4.75v-4.75Zm-6.25 0H4.5v4.75h4.75v-4.75Zm0-1.5V4.5H4.5v4.75h4.75Zm5.03-2.47a.75.75 0 1 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 1.06-1.06l1.22 1.22 1.22-1.22a.75.75 0 1 1 1.06 1.06L16.56 4.5l1.22 1.22a.75.75 0 0 1-1.06 1.06L15.5 5.56l-1.22 1.22Z"
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