/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.85 2.15a.5.5 0 1 0-.7.7l1.4 1.41A2.99 2.99 0 0 0 3 6v8a3 3 0 0 0 3 3h8c.65 0 1.25-.2 1.74-.55l1.4 1.4a.5.5 0 0 0 .71-.7l-15-15Zm6.56 7.97a1.5 1.5 0 0 0-.46.31l-4.67 4.59A2 2 0 0 1 4 14V6a2 2 0 0 1 .28-1.02l5.13 5.14ZM6 16a2 2 0 0 1-1.01-.27l4.66-4.58c.2-.2.5-.2.7 0l4.66 4.58A2 2 0 0 1 14 16H6ZM16 6v7.88l.9.9A3 3 0 0 0 17 14V6a3 3 0 0 0-3-3H6a3 3 0 0 0-.78.1l.9.9H14a2 2 0 0 1 2 2Zm-2 1.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z",
    FILLED : "M2.85 2.15a.5.5 0 1 0-.7.7l1.4 1.41A2.99 2.99 0 0 0 3 6v8c0 .65.2 1.25.55 1.74l5.39-5.39c.12-.12.26-.22.41-.29l.98.98a.5.5 0 0 0-.68.02l-5.39 5.39c.5.34 1.1.55 1.74.55h8c.65 0 1.25-.2 1.74-.55l1.4 1.4a.5.5 0 0 0 .71-.7l-15-15ZM17 14a3 3 0 0 1-.1.78L5.22 3.1A3 3 0 0 1 6 3h8a3 3 0 0 1 3 3v8Zm-2.5-7.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Z"
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