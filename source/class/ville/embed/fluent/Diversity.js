/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Diversity",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M11 5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V5ZM4.91 3.67c.45-.9 1.73-.9 2.18 0l1.78 3.54c.4.82-.18 1.79-1.1 1.79H4.23c-.9 0-1.5-.97-1.09-1.79l1.78-3.54Zm1.28.45a.21.21 0 0 0-.38 0L4.03 7.66c-.09.17.04.34.2.34h3.55c.15 0 .28-.17.2-.34L6.18 4.12ZM9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1 0a2 2 0 0 0-3.02-1.72l2.74 2.74A2 2 0 0 0 8 14Zm-2 2a2 2 0 0 0 1.02-.28l-2.74-2.74A2 2 0 0 0 6 16Zm7.64-4.91c.23-.12.5-.12.72 0l2.23 1.15c.25.13.41.38.41.66v2.2c0 .28-.16.53-.41.66l-2.23 1.15a.79.79 0 0 1-.72 0l-2.23-1.15a.75.75 0 0 1-.41-.66v-2.2c0-.28.16-.53.41-.66l2.23-1.15ZM12 13.06v1.88l2 1.03 2-1.03v-1.88l-2-1.03-2 1.03Z",
    FILLED : "M7.74 16.45A2.99 2.99 0 0 1 6 17a3 3 0 0 1-2.45-4.74l4.19 4.19Zm5.9-5.36-2.23 1.15a.75.75 0 0 0-.41.66v2.2c0 .28.16.53.41.66l2.23 1.15c.23.12.5.12.72 0l2.23-1.15a.75.75 0 0 0 .41-.66v-2.2a.75.75 0 0 0-.41-.66l-2.23-1.15a.79.79 0 0 0-.72 0Zm-5.2 4.65A2.99 2.99 0 0 0 9 14a3 3 0 0 0-4.74-2.45l4.19 4.19ZM13 3a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2Zm-8.09.67c.45-.9 1.73-.9 2.18 0l1.78 3.54c.4.82-.18 1.79-1.1 1.79H4.23c-.9 0-1.5-.97-1.09-1.79l1.78-3.54Z"
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