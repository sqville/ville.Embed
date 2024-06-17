/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.CameraAdd",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.12 2a1.5 1.5 0 0 0-1.34.83L6.2 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h5.1c-.16-.32-.3-.65-.4-1H4.5A1.5 1.5 0 0 1 3 14.5v-8C3 5.67 3.68 5 4.5 5h2a.5.5 0 0 0 .45-.28l.73-1.44A.5.5 0 0 1 8.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 0 0 .45.28h2c.82 0 1.5.67 1.5 1.5v3.1c.35.19.69.4 1 .66V6.5A2.5 2.5 0 0 0 15.5 4h-1.7l-.58-1.17A1.5 1.5 0 0 0 11.89 2H8.12ZM10 6a4 4 0 0 1 3.88 3.03c-.33.04-.66.11-.98.2a3 3 0 1 0-3.66 3.67c-.1.32-.17.65-.2.98A4 4 0 0 1 10 6Zm9 8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z",
    FILLED : "M6.78 2.83c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.09.32 1.34.83L13.81 4h1.7A2.5 2.5 0 0 1 18 6.5v3.76a5.48 5.48 0 0 0-4.13-1.23 4 4 0 1 0-4.85 4.85A5.56 5.56 0 0 0 9.6 17H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h1.7l.58-1.17ZM10 7a3 3 0 0 1 2.9 2.24 5.51 5.51 0 0 0-3.66 3.66A3 3 0 0 1 10 7Zm9 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 1 0 0 1H14v1.5a.5.5 0 1 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
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