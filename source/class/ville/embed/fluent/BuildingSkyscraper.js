/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingSkyscraper",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7.5 8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.5 11.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm5.25 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75-1.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7 2a.5.5 0 0 0-.5.5V4h-.94a.5.5 0 0 0-.5.5v1.74A2 2 0 0 0 4 8v8.5c0 .27.22.5.5.5h12a.5.5 0 0 0 .5-.5v-4A4.5 4.5 0 0 0 12.5 8H12a2 2 0 0 0-.94-1.7V4.5a.5.5 0 0 0-.5-.5H9.5V2.5A.5.5 0 0 0 9 2H7Zm3 4H6.06V5h4v1H10Zm1 10h-1v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H5V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8Zm-4 0v-2h2v2H7Zm9 0h-4V9h.5a3.5 3.5 0 0 1 3.5 3.5V16ZM8.5 4h-1V3h1v1Z",
    FILLED : "M7 2.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V3H7v-.5ZM5.46 4a.5.5 0 0 0-.46.5V5h6v-.5a.5.5 0 0 0-.46-.5H5.46Zm8.29 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm.75-3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5 6h6v.02c.6.34 1 .99 1 1.73V8h.5a4.5 4.5 0 0 1 4.5 4.5v4a.5.5 0 0 1-.5.5H9v-2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V17H4.5a.5.5 0 0 1-.5-.5V7.75a2 2 0 0 1 1-1.73V6Zm7 10h4v-3.5A3.5 3.5 0 0 0 12.5 9H12v7ZM7.5 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM7.5 11.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
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