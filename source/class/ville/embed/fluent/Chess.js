/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Chess",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M10 3a1 1 0 0 1 1-1h.5c.39 0 .74.15 1 .38a1.5 1.5 0 0 1 1-.38h1c.38 0 .73.15 1 .38a1.5 1.5 0 0 1 1-.38h.5a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-1.95 2.44c.28 4.04 1.7 6.58 2.19 7.35.16.25.26.55.26.88v.33c0 .83-.67 1.5-1.5 1.5h-5.48c.22-.3.37-.63.44-1H17a.5.5 0 0 0 .5-.5v-.33c0-.11-.03-.23-.1-.34-.58-.9-2.16-3.78-2.38-8.3a.5.5 0 0 1 .5-.53A1.5 1.5 0 0 0 17 5.5V3h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 0-.5-.5H11v2.5c0 .82.66 1.49 1.48 1.5a.5.5 0 0 1 .5.52 18.32 18.32 0 0 1-1.76 7.2 2.82 2.82 0 0 0-.2-.2 4.2 4.2 0 0 1-.55-.55 17.38 17.38 0 0 0 1.48-6.03A2.5 2.5 0 0 1 10 5.5V3ZM4.5 8a2 2 0 1 1 3.6 1.2.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.9a.5.5 0 0 0-.5.56 6.86 6.86 0 0 0 2.34 4.5c.17.15.26.33.26.49 0 .25-.2.45-.45.45h-6.1a.45.45 0 0 1-.45-.45c0-.16.09-.34.26-.49a6.86 6.86 0 0 0 2.34-4.5.5.5 0 0 0-.5-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8c-.25-.33-.4-.75-.4-1.2Zm2-3a3 3 0 0 0-2.82 4.03A1.5 1.5 0 0 0 4 12h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1.5 1.5 0 0 0 .32-2.97A3 3 0 0 0 6.5 5Z",
    FILLED : "M10.5 2a.5.5 0 0 0-.5.5v2.6a3 3 0 0 0 2.2 2.89 16.03 16.03 0 0 1-1.67 6.05c.18.21.36.37.5.49.51.43.97 1.14.97 2.02 0 .54-.18 1.04-.48 1.45H17c.83 0 1.5-.67 1.5-1.5v-.3c0-.35-.12-.68-.3-.94A15.03 15.03 0 0 1 15.8 8 3 3 0 0 0 18 5.1V2.5a.5.5 0 0 0-.5-.5h-.75a.75.75 0 0 0-.75.75v.75a.5.5 0 0 1-1 0v-.75a.75.75 0 0 0-.75-.75h-.5a.75.75 0 0 0-.75.75v.75a.5.5 0 0 1-1 0v-.75a.75.75 0 0 0-.75-.75h-.75Zm-4 3a3 3 0 0 0-2.24 5H4a1 1 0 1 0 0 2h.52a5.76 5.76 0 0 1-1.9 3.3c-.35.28-.62.73-.62 1.25 0 .8.65 1.45 1.45 1.45h6.1c.8 0 1.45-.65 1.45-1.45 0-.52-.27-.97-.62-1.26A5.76 5.76 0 0 1 8.48 12H9a1 1 0 1 0 0-2h-.26A3 3 0 0 0 6.5 5Z"
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