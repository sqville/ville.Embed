/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentMultipleProhibited",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8 2a2 2 0 0 0-2 2v5.02c.34.03.68.1 1 .19V4a1 1 0 0 1 1-1h3v3.5c0 .83.67 1.5 1.5 1.5H16v6a1 1 0 0 1-1 1h-4.02c-.03.34-.1.68-.19 1H15a2 2 0 0 0 2-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0 0 11.59 2H8Zm4 4.5V3.2L15.8 7h-3.3a.5.5 0 0 1-.5-.5ZM5 9.02V4a1 1 0 0 0-1 1v4.2c.32-.08.66-.15 1-.18ZM9.74 18c.26-.3.48-.64.66-1H15a1 1 0 0 1-1 1H9.74ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z",
    FILLED : "M11 2v4.5c0 .83.67 1.5 1.5 1.5H17v6.5c0 .83-.67 1.5-1.5 1.5h-4.7A5.5 5.5 0 0 0 6 9.02V3.5C6 2.67 6.67 2 7.5 2H11ZM5 9.02V4a1 1 0 0 0-1 1v4.2c.32-.08.66-.15 1-.18ZM10.4 17c-.18.36-.4.7-.66 1H14a1 1 0 0 0 1-1h-4.6ZM12 2.25V6.5c0 .28.22.5.5.5h4.25L12 2.25ZM1 14.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm2.4 2.8 4.9-4.9a3.5 3.5 0 0 1-4.9 4.9Zm-.7-.7a3.5 3.5 0 0 1 4.9-4.9l-4.9 4.9Z"
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