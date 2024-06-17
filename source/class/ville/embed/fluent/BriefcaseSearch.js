/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BriefcaseSearch",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 5V3.75C7 2.78 7.78 2 8.75 2h2.5c.97 0 1.75.78 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v6a2.5 2.5 0 0 1-2.5 2.5h-4.38l-1-1h5.38c.83 0 1.5-.67 1.5-1.5v-3c-.42.31-.94.5-1.5.5H11v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V11h-.26c-.12-.36-.3-.7-.5-1H9v-.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v.5h3.5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-9C4.67 6 4 6.67 4 7.5v.53c-.35.04-.68.11-1 .23V7.5A2.5 2.5 0 0 1 5.5 5H7Zm1-1.25V5h4V3.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75ZM4.5 16c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 14.6A3.5 3.5 0 1 0 4.5 16Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
    FILLED : "M7 3.75V5H5.5A2.5 2.5 0 0 0 3 7.5v.76A4.5 4.5 0 0 1 8.24 10H9v-.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v.5h4.5c.83 0 1.5-.67 1.5-1.5v-1A2.5 2.5 0 0 0 14.5 5H13V3.75C13 2.78 12.22 2 11.25 2h-2.5C7.78 2 7 2.78 7 3.75ZM14.5 16h-4.38l-1.56-1.56A4.48 4.48 0 0 0 8.97 12h1.53a.5.5 0 0 0 .5-.5V11h4.5c.56 0 1.08-.19 1.5-.5v3a2.5 2.5 0 0 1-2.5 2.5ZM12 5H8V3.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75V5ZM4.5 16c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L7.3 14.6A3.5 3.5 0 1 0 4.5 16Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
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