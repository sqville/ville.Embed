/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageProhibited",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M5.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 0 1 5.5 9Zm2.1-6.3L2.7 7.6a3.5 3.5 0 0 1 4.9-4.9ZM3 10.4c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 0 0-2-2h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6Zm1.99 5.33A2 2 0 0 0 6 16h8a2 2 0 0 0 1.01-.27l-4.66-4.58a.5.5 0 0 0-.7 0l-4.66 4.58ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z",
    FILLED : "M5.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 0 1 5.5 9ZM2.7 7.6a3.5 3.5 0 0 1 4.9-4.9L2.7 7.6ZM13 7.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM5.5 11a5.5 5.5 0 0 0 4.9-8H14a3 3 0 0 1 3 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 0 0-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14v-3.6c.75.38 1.6.6 2.5.6ZM14 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM6 17c-.65 0-1.24-.2-1.73-.55l5.38-5.3c.2-.2.5-.2.7 0l5.38 5.3c-.49.35-1.08.55-1.73.55H6Z"
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