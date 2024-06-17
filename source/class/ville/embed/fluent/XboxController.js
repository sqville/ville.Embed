/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.XboxController",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M8.33 4.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02l1.51-1.73A2 2 0 0 1 8.4 13h3.19a2 2 0 0 1 1.52.7c.51.6 1.04 1.2 1.51 1.73.6.67 1.75.84 2.4.02a4.51 4.51 0 0 0 .82-4.06c-.33-1.5-1.16-3.27-2.27-5.43a2.37 2.37 0 0 0-1.66-1.25l-.9-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03Zm-1.16.81c.26-.05.51-.02.72.08l.05.03c.44.23.94.37 1.47.37h1.18c.52 0 1.02-.14 1.47-.37l.05-.03c.2-.1.45-.13.71-.08l.9.17c.41.08.77.35.96.72 1.12 2.18 1.89 3.84 2.18 5.2.29 1.31.12 2.3-.62 3.22-.18.22-.59.26-.87-.06l-1.5-1.73A3 3 0 0 0 11.59 12H8.4a3 3 0 0 0-2.27 1.04l-1.5 1.73c-.3.32-.7.28-.88.06-.73-.92-.9-1.9-.62-3.22.3-1.36 1.06-3.02 2.18-5.2.2-.37.55-.64.97-.72l.89-.17ZM10 8.5A.75.75 0 1 0 10 7a.75.75 0 0 0 0 1.5Z",
    FILLED : "M8.33 4.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02L6.9 13.7A2 2 0 0 1 8.4 13h3.2a2 2 0 0 1 1.51.7l1.51 1.73c.6.67 1.75.84 2.4.02a4.51 4.51 0 0 0 .82-4.06c-.32-1.5-1.16-3.27-2.27-5.43a2.37 2.37 0 0 0-1.66-1.25l-.9-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03ZM10 8.5A.75.75 0 1 1 10 7a.75.75 0 0 1 0 1.5Z"
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