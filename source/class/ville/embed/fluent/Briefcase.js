/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Briefcase",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 5V3.75C7 2.78 7.78 2 8.75 2h2.5c.97 0 1.75.78 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v6a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 13.5v-6A2.5 2.5 0 0 1 5.5 5H7Zm1-1.25V5h4V3.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75ZM5.5 6C4.67 6 4 6.67 4 7.5v1c0 .83.67 1.5 1.5 1.5H9v-.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v.5h3.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-9Zm9 5H11v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V11H5.5c-.56 0-1.08-.19-1.5-.5v3c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-3c-.42.31-.94.5-1.5.5Z",
    FILLED : "M7 5V3.75C7 2.78 7.78 2 8.75 2h2.5c.97 0 1.75.78 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v1c0 .83-.67 1.5-1.5 1.5H11v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.5H4.5A1.5 1.5 0 0 1 3 8.5v-1A2.5 2.5 0 0 1 5.5 5H7Zm1 0h4V3.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75V5Zm-5 5.5v3A2.5 2.5 0 0 0 5.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-3c-.42.31-.94.5-1.5.5H11v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V11H4.5c-.56 0-1.08-.19-1.5-.5Z"
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