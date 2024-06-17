/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Drafts",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "m13.25 2.82-9.61 9.6-.12.13a2 2 0 0 0-.4.76l-1.1 4.06-.02.08a.5.5 0 0 0 .63.53l4.06-1.1.16-.06a2 2 0 0 0 .73-.46l9.6-9.6.13-.15a2.78 2.78 0 0 0-4.06-3.8Zm-8.9 10.31 8.04-8.04 2.52 2.52-8.04 8.04-.1.09-.1.07a1 1 0 0 1-.25.1l-3.2.87.87-3.2.04-.13a1 1 0 0 1 .22-.32Zm12.12-9.6.11.11c.59.7.55 1.75-.1 2.4l-.87.87-2.52-2.53.86-.86.12-.1c.7-.59 1.75-.55 2.4.1ZM11.65 3H2.5a.5.5 0 0 0 0 1h8.15l1-1Zm-3 3H2.5a.5.5 0 0 0 0 1h5.15l1-1Zm-4 4 1-1H2.5a.5.5 0 0 0 0 1h2.15Z",
    FILLED : "m15.61 8.32-3.93-3.94-8.04 8.04-.12.13a2 2 0 0 0-.4.76l-1.1 4.06-.02.08a.5.5 0 0 0 .63.53l4.06-1.1.16-.06a2 2 0 0 0 .73-.46l8.03-8.04Zm1.57-5.5a2.78 2.78 0 0 0-3.93 0l-.87.86 3.94 3.93.86-.86.13-.14c.96-1.09.91-2.75-.13-3.8ZM11.65 3H2.5a.5.5 0 0 0 0 1h8.15l1-1Zm-3 3H2.5a.5.5 0 0 0 0 1h5.15l1-1Zm-3 3-1 1H2.5a.5.5 0 1 1 0-1h3.15Z"
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