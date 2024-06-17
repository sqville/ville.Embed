/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CircleShadow",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10.29 17a7.1 7.1 0 0 1-1.73-.15l-2.2-2.2a.5.5 0 1 0-.72.7l.47.47a7 7 0 1 1 9.72-9.7l-.48-.47a.5.5 0 0 0-.7.7l2.2 2.21A7.03 7.03 0 0 1 17 10.3l-1.89-1.9a.5.5 0 0 0-.7.71l2.43 2.44c-.1.41-.22.82-.39 1.2L14.1 10.4a.5.5 0 0 0-.7.7l2.56 2.57c-.2.32-.42.63-.67.91l-2.44-2.43a.5.5 0 0 0-.7.7l2.43 2.44c-.28.25-.59.47-.91.67L11.1 13.4a.5.5 0 0 0-.7.7l2.34 2.35c-.39.16-.79.29-1.2.38L9.1 14.4a.5.5 0 1 0-.7.7l1.89 1.9ZM10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    FILLED : "M16 15.3c.25-.29.48-.6.69-.9l-3.3-3.3a.5.5 0 0 1 .71-.7l3.1 3.1c.18-.37.33-.75.45-1.15L14.4 9.1a.5.5 0 0 1 .7-.7l2.81 2.8a8.06 8.06 0 0 0 .08-1.5l-3.34-3.35a.5.5 0 0 1 .7-.7l2.41 2.4a8 8 0 1 0-9.7 9.71l-2.41-2.4a.5.5 0 0 1 .7-.71l3.35 3.34a7.99 7.99 0 0 0 1.5-.08l-2.8-2.8a.5.5 0 0 1 .7-.71l3.25 3.25c.4-.12.78-.27 1.14-.45l-3.1-3.1a.5.5 0 0 1 .71-.7l3.3 3.29c.3-.21.61-.44.9-.7l-3.15-3.14a.5.5 0 0 1 .7-.7L16 15.29Z"
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