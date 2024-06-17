/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BuildingDesktop",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 3.25c0-.14.11-.25.25-.25h5.5c.14 0 .25.11.25.25v2.5C9 6.44 9.56 7 10.25 7h1.5c.14 0 .25.11.25.25V8h1v-.75C13 6.56 12.44 6 11.75 6h-1.5a.25.25 0 0 1-.25-.25v-2.5C10 2.56 9.44 2 8.75 2h-5.5C2.56 2 2 2.56 2 3.25v10.5c0 .69.56 1.25 1.25 1.25H7v-1H3.25a.25.25 0 0 1-.25-.25V3.25ZM7.25 8.5c.27 0 .51.15.64.36A3 3 0 0 0 7.17 10a.75.75 0 0 1 .08-1.5Zm-2.5-3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5.5 7A.75.75 0 1 1 4 7a.75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8 11c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v1h1.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H12v-1h-2a2 2 0 0 1-2-2v-4Zm2 5h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1Zm4 2v-1h-1v1h1Z",
    FILLED : "M2 3.25C2 2.56 2.56 2 3.25 2h5.5C9.44 2 10 2.56 10 3.25v2.5c0 .14.11.25.25.25h1.5c.69 0 1.25.56 1.25 1.25V8h-3c-.82 0-1.57.33-2.1.86A.75.75 0 1 0 7.16 10 3 3 0 0 0 7 11v4H3.25C2.56 15 2 14.44 2 13.75V3.25ZM8.27 10A2 2 0 0 1 10 9h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2v1h1.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H12v-1h-2a2 2 0 0 1-2-2v-4c0-.36.1-.7.27-1ZM10 10a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-7ZM4 4.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4 9.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM7.25 5.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.5 7A.75.75 0 1 0 8 7a.75.75 0 0 0-1.5 0ZM14 18v-1h-1v1h1Z"
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