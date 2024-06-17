/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookCoins",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M4 16V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2ZM15 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v11h10V4Zm-8 7.25c0-.08.01-.15.03-.22l.45.3a5.1 5.1 0 0 0 5.49-.3c.02.07.03.14.03.22 0 .3-.18.55-.33.71-.17.18-.4.36-.65.5a4.1 4.1 0 0 1-4.04 0 2.8 2.8 0 0 1-.65-.5 1.1 1.1 0 0 1-.33-.71Zm.03-2.22a.79.79 0 0 0-.03.22c0 .3.18.55.33.71.17.18.4.36.65.5a4.1 4.1 0 0 0 4.04 0c.26-.14.48-.32.65-.5.15-.16.33-.41.33-.71a.79.79 0 0 0-.03-.22l-.45.3a5.1 5.1 0 0 1-5.49-.3ZM8 7c0-.21.13-.45.48-.66.36-.2.9-.34 1.52-.34.63 0 1.16.14 1.52.34.35.21.48.45.48.66 0 .21-.13.45-.48.66-.36.2-.9.34-1.52.34a3.1 3.1 0 0 1-1.52-.34C8.13 7.45 8 7.2 8 7Zm2-2c-.76 0-1.47.16-2.02.48C7.43 5.8 7 6.31 7 7c0 .69.43 1.2.98 1.52.55.32 1.26.48 2.02.48s1.47-.16 2.02-.48c.55-.32.98-.83.98-1.52 0-.69-.43-1.2-.98-1.52A4.08 4.08 0 0 0 10 5Z",
    FILLED : "M4 4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v11a1 1 0 0 1-1 1H5a1 1 0 0 0 1 1h9.5a.5.5 0 0 1 0 1H6a2 2 0 0 1-2-2V4Zm6 1c-.76 0-1.47.16-2.02.48C7.43 5.8 7 6.31 7 7c0 .69.43 1.2.98 1.52.55.32 1.26.48 2.02.48s1.47-.16 2.02-.48c.55-.32.98-.83.98-1.52 0-.69-.43-1.2-.98-1.52A4.08 4.08 0 0 0 10 5ZM7.03 9.03a.79.79 0 0 0-.03.22c0 .3.18.55.33.71.17.18.4.36.65.5a4.1 4.1 0 0 0 4.04 0c.26-.14.48-.32.65-.5.15-.16.33-.41.33-.71a.79.79 0 0 0-.03-.22l-.45.3a5.1 5.1 0 0 1-5.49-.3Zm0 2a.79.79 0 0 0-.03.22c0 .3.18.55.33.71.17.18.4.36.65.5a4.1 4.1 0 0 0 4.04 0c.26-.14.48-.32.65-.5.15-.16.33-.41.33-.71a.79.79 0 0 0-.03-.22l-.45.3a5.1 5.1 0 0 1-5.49-.3Z"
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