/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextDirectionRotate315Right",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.5 2a.5.5 0 0 0 0 1h1.8L7.14 6.15a.5.5 0 1 0 .7.7L11 3.71V5.5a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5h-3ZM2.72 7.05a.5.5 0 0 0-.67.67l4 8a.5.5 0 1 0 .9-.45l-1.17-2.34 2.15-2.15 2.35 1.17a.5.5 0 1 0 .44-.9l-8-4ZM7 10.3 5.3 12 3.62 8.62l3.37 1.68ZM14.5 8a.5.5 0 0 0 0 1h1.8l-8.15 8.15a.5.5 0 0 0 .7.7L17 9.71v1.79a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5h-3Z",
    FILLED : "M8 2.75c0-.41.34-.75.75-.75h2.5c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-.69L8.28 6.78a.75.75 0 1 1-1.06-1.06L9.44 3.5h-.7A.75.75 0 0 1 8 2.75ZM3.09 6.58a.75.75 0 0 0-1.01 1l4 8a.75.75 0 0 0 1.34-.67l-1.09-2.18 1.9-1.9 2.18 1.1a.75.75 0 1 0 .68-1.35l-8-4Zm3.73 3.54-1.2 1.2-1.2-2.4 2.4 1.2ZM14.75 8a.75.75 0 0 0 0 1.5h.69l-7.22 7.22a.75.75 0 1 0 1.06 1.06l7.22-7.22v.69a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-.75-.75h-2.5Z"
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