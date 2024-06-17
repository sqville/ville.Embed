/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageStack",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm7.7 13-2.46-2.47a1.75 1.75 0 0 0-2.48 0L6.3 16H6a2 2 0 0 1-2-2v-4h12v4a2 2 0 0 1-2 2h-.3Zm-6 0 1.77-1.76c.3-.3.77-.3 1.06 0L12.29 16H7.71ZM16 9h-2.8l-1.96-1.97a1.75 1.75 0 0 0-2.48 0L6.8 9H4V6c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v3ZM8.2 9l1.27-1.26c.3-.3.77-.3 1.06 0L11.79 9H8.21ZM15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    FILLED : "M6 3a3 3 0 0 0-3 3v3h3.3l2.46-2.47c.69-.68 1.8-.68 2.48 0L13.7 9H17V6a3 3 0 0 0-3-3H6Zm11 7v4a3 3 0 0 1-2.36 2.93l-3.4-3.4a1.75 1.75 0 0 0-2.48 0l-3.4 3.4A3 3 0 0 1 3 14v-4h14ZM6.7 17h6.6l-2.77-2.76a.75.75 0 0 0-1.06 0L6.71 17Zm1-8h4.6l-1.77-1.76a.75.75 0 0 0-1.06 0L7.71 9Zm7.8-3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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