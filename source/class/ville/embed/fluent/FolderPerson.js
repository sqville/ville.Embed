/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FolderPerson",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2 5.5A2.5 2.5 0 0 1 4.5 3h2.48c.47 0 .91.18 1.24.51L9.71 5h5.79A2.5 2.5 0 0 1 18 7.5v2.84c-.26-.38-.6-.7-1-.94V7.5c0-.83-.67-1.5-1.5-1.5H9.7L8.16 7.56A1.5 1.5 0 0 1 7.09 8H3v6.5c0 .83.67 1.5 1.5 1.5h6.55a2.51 2.51 0 0 0-.01 1H4.5A2.5 2.5 0 0 1 2 14.5v-9ZM4.5 4C3.67 4 3 4.67 3 5.5V7h4.09a.5.5 0 0 0 .35-.15L8.79 5.5 7.51 4.22A.75.75 0 0 0 6.98 4H4.5Zm13 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z",
    FILLED : "M4.5 3A2.5 2.5 0 0 0 2 5.5V7h5.09a.5.5 0 0 0 .35-.15L9.5 4.8 8.22 3.51A1.75 1.75 0 0 0 6.98 3H4.5ZM2 14.5V8h5.09c.4 0 .78-.16 1.06-.44L10.7 5h4.79A2.5 2.5 0 0 1 18 7.5v2.84a3 3 0 1 0-4.73 3.67A2.5 2.5 0 0 0 11.04 17H4.5A2.5 2.5 0 0 1 2 14.5ZM17.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5Z"
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