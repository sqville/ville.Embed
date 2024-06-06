/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageArrowForward",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
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

   var pathdregular = "M5.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm.9-6.4.9.9H5.74A2.75 2.75 0 0 0 3 7.25v.25a.5.5 0 0 0 1 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 1 0 .71.7l1.76-1.75a.5.5 0 0 0 0-.7L7.1 2.9a.5.5 0 1 0-.7.7ZM3 10.4c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 0 0-2-2h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3.6Zm11-2.9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Zm-8.01 8.23A2 2 0 0 0 6 16h8a2 2 0 0 0 1.01-.27l-4.66-4.58a.5.5 0 0 0-.7 0l-4.66 4.58Z";
   var pathdfilled = "M5.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm.9-6.4.9.9H5.74A2.75 2.75 0 0 0 3 7.25v.25a.5.5 0 0 0 1 0v-.25c0-.97.78-1.75 1.75-1.75h1.54l-.9.9a.5.5 0 1 0 .71.7l1.76-1.75a.5.5 0 0 0 0-.7L7.1 2.9a.5.5 0 1 0-.7.7ZM11 5.5a5.5 5.5 0 0 1-8 4.9V14c0 .65.2 1.25.56 1.74l5.39-5.3a1.5 1.5 0 0 1 2.1 0l5.4 5.3c.34-.49.55-1.1.55-1.74V6a3 3 0 0 0-3-3h-3.6c.38.75.6 1.6.6 2.5ZM12.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm0 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 0 0-.7 0l-5.38 5.3Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});