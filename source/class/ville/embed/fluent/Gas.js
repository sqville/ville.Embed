/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Gas",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11.08 2.22A.5.5 0 0 1 11.5 2h3c.28 0 .5.22.5.5v3c.6.46 1 1.18 1 2v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 14.5v-7A2.5 2.5 0 0 1 6.5 5h.41c-.2-.58-.76-1-1.41-1h-1a.5.5 0 0 1 0-1h1c1.2 0 2.22.86 2.45 2h1.28l1.85-2.78ZM14 3h-2.23l-1.34 2h3.07c.17 0 .34.02.5.05V3ZM6.5 6C5.67 6 5 6.67 5 7.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7Zm6.35 2.15c.2.2.2.5 0 .7L10.71 11l2.14 2.15a.5.5 0 0 1-.7.7L10 11.71l-2.15 2.14a.5.5 0 0 1-.7-.7L9.29 11 7.15 8.85a.5.5 0 1 1 .7-.7L10 10.29l2.15-2.14c.2-.2.5-.2.7 0Z",
    FILLED : "M11.08 2.22A.5.5 0 0 1 11.5 2h3c.28 0 .5.22.5.5v3c.6.46 1 1.18 1 2v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 14.5v-7A2.5 2.5 0 0 1 6.5 5h.41c-.2-.58-.76-1-1.41-1h-1a.5.5 0 0 1 0-1h1c1.2 0 2.22.86 2.45 2h1.28l1.85-2.78ZM14 3h-2.23l-1.34 2h3.07c.17 0 .34.02.5.05V3Zm-1.15 5.15a.5.5 0 0 0-.7 0L10 10.29 7.85 8.15a.5.5 0 1 0-.7.7L9.29 11l-2.14 2.15a.5.5 0 0 0 .7.7L10 11.71l2.15 2.14a.5.5 0 0 0 .7-.7L10.71 11l2.14-2.15a.5.5 0 0 0 0-.7Z"
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