/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Cellular4g",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 1 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 1 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3Zm7 2a.5.5 0 0 1 .5.41v11.1a.5.5 0 0 1-.99.08V5.5c0-.28.22-.5.5-.5Zm-9 6a.5.5 0 0 1 .5.41v5.09a.5.5 0 0 1-.99.09V11.5c0-.28.22-.5.5-.5Zm-3 2a.5.5 0 0 1 .5.41v3.09a.5.5 0 0 1-1 .09V13.5c0-.28.22-.5.5-.5Zm6-4a.5.5 0 0 1 .5.4v7.1a.5.5 0 0 1-1 .09V9.5c0-.28.22-.5.5-.5Zm3-2a.5.5 0 0 1 .5.41v9.09a.5.5 0 0 1-1 .09V7.5c0-.27.22-.5.5-.5ZM4.96 2.7a.7.7 0 0 0-1.27-.4L1.13 5.9A.7.7 0 0 0 1.7 7h2.26v.5a.5.5 0 1 0 1 0V7h.54a.5.5 0 0 0 0-1h-.54V2.7Zm-1 .94V6H2.28l1.68-2.36Z",
    FILLED : "M9.5 3h-.25C8.56 3 8 3.56 8 4.25v1.5a1.25 1.25 0 0 0 2.5 0h-1a.5.5 0 1 1 0-1H11c.28 0 .5.22.5.5v.5a2.25 2.25 0 1 1-4.5 0v-1.5C7 3.01 8 2 9.25 2h.25c.03 0 1.12 0 1.65 1.02a.5.5 0 1 1-.89.46.86.86 0 0 0-.48-.42C9.63 3.01 9.51 3 9.5 3ZM4.75 13c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 0 1-1.5.11v-2.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 0 1-1.5.11v-4.61c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v6.5a.75.75 0 0 1-1.5.11V9.75c0-.41.34-.75.75-.75Zm3-2c.38 0 .69.28.74.64l.01.11v8.5a.75.75 0 0 1-1.5.11V7.75c0-.41.34-.75.75-.75Zm3-2c.37 0 .68.27.74.63l.01.1-.01 10.52a.74.74 0 0 1-1.48.12l-.01-.1.01-10.52c0-.41.33-.75.74-.75ZM4.95 2.7a.7.7 0 0 0-1.26-.4L1.13 5.9A.7.7 0 0 0 1.7 7h2.26v.5a.5.5 0 1 0 1 0V7h.54a.5.5 0 0 0 0-1h-.54V2.7Zm-1 .94V6H2.29l1.68-2.36Z"
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