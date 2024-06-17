/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.IotAlert",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M16 4a2 2 0 0 1-2.65 1.88l-1.28 1.95.3.33c-.34.1-.66.24-.96.43A2 2 0 0 0 8 10a2 2 0 0 0 1.5 1.94v1.02a3 3 0 0 1-1.91-1.17l-1.64.78A2 2 0 0 1 4 15a2 2 0 1 1 1.5-3.32l1.64-.79A3 3 0 0 1 7.77 8l-.93-1.17a2 2 0 1 1 .77-.63l.95 1.18a2.99 2.99 0 0 1 2.68-.1l1.28-1.94A2 2 0 1 1 16 4Zm-1 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm5.5-1a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 14v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z",
    FILLED : "M16 4a2 2 0 0 1-2.65 1.88l-1.28 1.95.3.33A4 4 0 0 0 9.5 12v.96a3 3 0 0 1-1.91-1.17l-1.64.78A2 2 0 0 1 4 15a2 2 0 1 1 1.5-3.32l1.64-.79A3 3 0 0 1 7.77 8l-.93-1.17a2 2 0 1 1 .77-.63l.95 1.18a2.99 2.99 0 0 1 2.68-.1l1.28-1.94A2 2 0 1 1 16 4Zm-5.5 8a3 3 0 0 1 6 0v2l1.32 1.12a.5.5 0 0 1-.32.88h-8a.5.5 0 0 1-.32-.88L10.5 14v-2Zm3 6a1.5 1.5 0 0 1-1.42-1h2.83c-.2.58-.76 1-1.41 1Z"
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