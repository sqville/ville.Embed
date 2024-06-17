/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CubeTree",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.66 4.53a.5.5 0 0 0-.32.95l1.16.38V7a.5.5 0 0 0 1 0V5.86l1.16-.38a.5.5 0 1 0-.32-.95L10 4.97l-1.34-.44Zm1.77-2.46a1.5 1.5 0 0 0-.86 0l-2.86.85a.99.99 0 0 0-.71.95v4.26c0 .44.3.83.72.96l2.79.83a.5.5 0 0 0-.01.08v1H8a2 2 0 0 0-2 2v.05a2.5 2.5 0 1 0 1 0V13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v.05a2.5 2.5 0 1 0 1 0V13a2 2 0 0 0-2-2h-1.5v-1a.5.5 0 0 0 0-.08l2.78-.83a1 1 0 0 0 .72-.96V3.87a1 1 0 0 0-.72-.95l-2.85-.85Zm-.57.95a.5.5 0 0 1 .28 0l2.86.85v4.26l-2.86.85a.5.5 0 0 1-.28 0L7 8.13V3.87l2.86-.85ZM5 15.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm8.5-1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z",
    FILLED : "M9.57 2.07c.28-.09.58-.09.86 0l2.85.85a1 1 0 0 1 .72.95v4.26a1 1 0 0 1-.72.96l-2.79.83a.5.5 0 0 1 .01.08v1H12a2 2 0 0 1 2 2v.05a2.5 2.5 0 1 1-1 0V13a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.05a2.5 2.5 0 1 1-1 0V13c0-1.1.9-2 2-2h1.5v-1a.5.5 0 0 1 0-.08l-2.78-.83A1 1 0 0 1 6 8.13V3.87a1 1 0 0 1 .72-.95l2.85-.85Zm-.91 2.46a.5.5 0 0 0-.32.95l1.16.38V7a.5.5 0 0 0 1 0V5.86l1.16-.38a.5.5 0 1 0-.32-.95L10 4.97l-1.34-.44Z"
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