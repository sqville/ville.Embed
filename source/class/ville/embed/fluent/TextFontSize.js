/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextFontSize",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M13 3.5c.2 0 .4.13.47.32l3 8v.02l1.5 3.98a.5.5 0 1 1-.94.36l-1.38-3.68h-5.3l-1.38 3.68a.5.5 0 0 1-.93 0L6.96 13.5H4.04l-1.08 2.69a.5.5 0 1 1-.92-.38l1.2-2.98v-.03l1.8-4.49a.5.5 0 0 1 .92 0l1.8 4.5v.02l.73 1.79 1.04-2.78v-.03l3-7.99A.5.5 0 0 1 13 3.5Zm-2.28 8h4.56L13 5.42l-2.28 6.08Zm-4.16 1L5.5 9.85 4.44 12.5h2.12Z",
    FILLED : "M13 3c.32 0 .6.2.7.5l4.26 12.25a.75.75 0 0 1-1.42.5l-1.3-3.75h-4.66L9.2 16.26a.75.75 0 0 1-1.4.01L6.92 14H4.26l-.8 2.25a.75.75 0 0 1-1.42-.5L4.8 8a.75.75 0 0 1 1.41-.02l2.28 5.9L12.3 3.48c.1-.3.39-.5.7-.49ZM4.8 12.5h1.55l-.8-2.1-.75 2.1Zm8.19-6.52L11.14 11h3.58l-1.74-5.02Z"
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