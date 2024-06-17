/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CellularOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7L10 10.71v4.88a.5.5 0 0 0 1-.09v-3.8l2 2V15.6a.5.5 0 0 0 1-.09v-.8l3.15 3.15a.5.5 0 0 0 .7-.7l-15-15ZM13 10.88V6.5a.5.5 0 0 1 1-.09v5.47l-1-1Zm3 3V4.5a.5.5 0 0 1 1-.09V14.88l-1-1Zm-8-3.47a.5.5 0 0 0-1 .09v5l.01.09a.5.5 0 0 0 1-.09v-5L8 10.41Zm-3 2a.5.5 0 0 0-1 .09v3.09a.5.5 0 0 0 1-.09v-3.09Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7L10 10.71v4.65a.75.75 0 0 0 1.5-.11v-3.04l1.5 1.5V15.36a.75.75 0 0 0 1.5-.11v-.04l2.65 2.64a.5.5 0 0 0 .7-.7l-15-15ZM13 10.88V6.75a.75.75 0 0 1 1.5-.11v5.74l-1.5-1.5Zm4.48 4.48L16 13.88l.01-9.13a.74.74 0 0 1 1.48-.12l.01.1-.01 10.52-.01.1ZM5.49 12.64a.75.75 0 0 0-1.49.11v2.61a.75.75 0 0 0 1.5-.11v-2.61Zm3-2a.75.75 0 0 0-1.49.11v4.61a.75.75 0 0 0 1.5-.11v-4.61Z"
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