/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PhoneKey",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M7 2a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h2v-1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5.54a3.97 3.97 0 0 1 1-.4V4a2 2 0 0 0-2-2H7Zm3.38 13 .91-.9A.5.5 0 0 0 11 14H9a.5.5 0 0 0 0 1h1.38Zm.12 4a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V17c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 0 1-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 0 1 1.61-1.57 2.94 2.94 0 0 1 3.27.64A3 3 0 0 1 15 15.84V16.52a.65.65 0 0 1-.08.24.5.5 0 0 1-.15.17.46.46 0 0 1-.27.07H14c0 .24 0 .43-.02.56a.46.46 0 0 1-.11.3.47.47 0 0 1-.3.12L13 18v.27c0 .08 0 .17-.02.25a.86.86 0 0 1-.06.24.37.37 0 0 1-.15.17.57.57 0 0 1-.27.07h-2Zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 0 0-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 0 0-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 0 0 .22-.53Z",
    FILLED : "M6.5 2C5.67 2 5 2.67 5 3.5v13c0 .83.67 1.5 1.5 1.5H9v-1c0-.41.16-.78.44-1.06l.94-.94H9a.5.5 0 0 1 0-1h2c.1 0 .2.03.29.1l.73-.74a3.72 3.72 0 0 1 .31-1.98A4.1 4.1 0 0 1 15 9.13V3.5c0-.83-.67-1.5-1.5-1.5h-7Zm4 17a.48.48 0 0 1-.35-.15.48.48 0 0 1-.15-.35V17c0-.14.05-.25.15-.35l2.94-2.94a3.74 3.74 0 0 1-.09-.77c0-.4.08-.79.24-1.14a3.1 3.1 0 0 1 1.61-1.57 2.94 2.94 0 0 1 3.27.64A3 3 0 0 1 15 15.84V16.52a.65.65 0 0 1-.08.24.5.5 0 0 1-.15.17.46.46 0 0 1-.27.07H14c0 .24 0 .43-.02.56a.46.46 0 0 1-.11.3.47.47 0 0 1-.3.12L13 18v.27c0 .08 0 .17-.02.25a.86.86 0 0 1-.06.24.37.37 0 0 1-.15.17.57.57 0 0 1-.27.07h-2Zm7-6.75c0-.2-.07-.39-.22-.53a.72.72 0 0 0-.53-.22c-.2 0-.39.07-.53.22a.72.72 0 0 0-.22.53c0 .2.07.39.22.53.14.15.32.22.53.22.2 0 .39-.07.53-.22a.72.72 0 0 0 .22-.53Z"
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