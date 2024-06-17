/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PeopleCommunityAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M6 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 6 1Zm0 1a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 6 2Zm.68 5.5H2.5C1.67 7.5 1 8.17 1 9v.5c0 1.59 1.2 3.21 3.31 3.78.2-.34.46-.63.79-.85-2-.32-3.1-1.67-3.1-2.93V9c0-.28.22-.5.5-.5h3.83c.07-.35.19-.69.35-1Zm3.32-1a2.74 2.74 0 0 0-.39 5.47c.19-.35.41-.69.67-1A1.76 1.76 0 0 1 8.42 8.5a1.75 1.75 0 0 1 3.25 1.28c.34-.2.7-.37 1.08-.5v-.03A2.75 2.75 0 0 0 10 6.5Zm8.68 4.42c-.24-.27-.5-.52-.78-.75.07-.22.1-.45.1-.67V9a.5.5 0 0 0-.5-.5h-3.82c-.08-.35-.2-.69-.36-1h4.18c.83 0 1.5.67 1.5 1.5v.5c0 .48-.11.96-.32 1.42ZM9.2 13H6.5A1.5 1.5 0 0 0 5 14.5v.5c0 1.97 1.86 4 5 4 .42 0 .82-.04 1.2-.1a5.54 5.54 0 0 1-.95-.9H10c-2.57 0-4-1.56-4-3v-.5c0-.28.22-.5.5-.5h2.52c.03-.34.1-.68.19-1Zm7.54-9.25a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0Zm-4.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z",
    FILLED : "M10 6.5a2.74 2.74 0 0 0-.39 5.47 5.52 5.52 0 0 1 3.14-2.69v-.03A2.74 2.74 0 0 0 10 6.5Zm8.68 4.42a5.49 5.49 0 0 0-4.94-1.87 3.73 3.73 0 0 0-.42-1.55h4.18c.83 0 1.5.67 1.5 1.5v.5c0 .48-.11.96-.32 1.42ZM9.2 13a5.5 5.5 0 0 0 1.98 5.9c-.37.06-.77.1-1.19.1-3.14 0-5-2.03-5-4v-.5A1.5 1.5 0 0 1 6.5 13h2.7Zm-4.9.28C2.21 12.71 1 11.08 1 9.5V9c0-.83.67-1.5 1.5-1.5h4.18a3.73 3.73 0 0 0 .77 4.5H6.5a2.5 2.5 0 0 0-2.19 1.28ZM6 1a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 6 1Zm8 0a2.75 2.75 0 1 1 0 5.5A2.75 2.75 0 0 1 14 1Zm.5 18a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 0 1 0 1H15v1.5a.5.5 0 0 1-1 0V15h-1.5a.5.5 0 0 1 0-1H14v-1.5c0-.28.22-.5.5-.5Z"
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