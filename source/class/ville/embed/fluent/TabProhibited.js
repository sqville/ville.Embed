/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TabProhibited",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v4.6c-.32-.16-.65-.3-1-.4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.2c.1.35.24.68.4 1H5a2 2 0 0 1-2-2V5Zm7 9.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.6-2.8l-4.9 4.9a3.48 3.48 0 0 1-.7-2.1Zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 0 1-2.8 5.6Z",
    FILLED : "M3 5.25C3 4.01 4 3 5.25 3h9.5C15.99 3 17 4 17 5.25V9.6a5.46 5.46 0 0 0-1.5-.5V5.24a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0-.75.75v9.5c0 .41.34.75.75.75h3.84c.1.53.27 1.03.51 1.5H5.25C4.01 17 3 16 3 14.75v-9.5ZM14.5 19a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm0-8a3.5 3.5 0 0 0-2.8 5.6l4.9-4.9a3.48 3.48 0 0 0-2.1-.7Zm-2.1 6.3a3.5 3.5 0 0 0 4.9-4.9l-4.9 4.9Z"
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