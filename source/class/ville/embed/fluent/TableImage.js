/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableImage",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.54a3.53 3.53 0 0 1-.04-.5V16H8v-3h1v-.5c0-.17.01-.34.04-.5H8V8h4v1.04c.16-.03.33-.04.5-.04h.5V8h3v1h.5c.17 0 .34.01.5.04V5.5Zm-13 9V13h3v3H5.36A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3H14.64A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.36A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm3 4.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z",
    FILLED : "M16.5 9c.17 0 .34.01.5.04V8h-4v1h3.5ZM9 16.5V13H8v4h1.04a3.53 3.53 0 0 1-.04-.5Zm.04-4.5A3.5 3.5 0 0 1 12 9.04V8H8v4h1.04ZM7 12V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm3 9.5a2.5 2.5 0 0 1 2.5-2.5h4a2.5 2.5 0 0 1 2.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 0 0-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4Zm7 .25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 0 0-.7 0l-3.03 3.03Z"
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