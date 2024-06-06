/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.XboxControllerError",
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

   var pathdregular = "M8.33 3.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02L6.9 12.7A2 2 0 0 1 8.4 12h.8c.1-.35.24-.68.4-1H8.4a3 3 0 0 0-2.27 1.04l-1.5 1.73c-.29.32-.7.28-.88.06-.73-.92-.9-1.9-.62-3.22.3-1.36 1.07-3.02 2.18-5.2.2-.37.55-.64.97-.72l.89-.17c.26-.05.51-.02.72.08l.05.03c.44.23.94.37 1.47.37h1.18c.52 0 1.02-.14 1.47-.37l.05-.03c.2-.1.45-.13.72-.08l.89.17c.41.08.77.35.96.72.54 1.05 1 1.98 1.36 2.8.47.14.9.34 1.32.59a38.92 38.92 0 0 0-1.79-3.84 2.37 2.37 0 0 0-1.66-1.25l-.9-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03ZM10 7.5A.75.75 0 1 0 10 6a.75.75 0 0 0 0 1.5Zm9 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   var pathdfilled = "M8.33 3.71a2.12 2.12 0 0 0-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 0 0 .82 4.06c.66.82 1.8.65 2.4-.02L6.9 12.7A2 2 0 0 1 8.4 12h.8a5.5 5.5 0 0 1 8.16-3.2 38.92 38.92 0 0 0-1.79-3.84 2.37 2.37 0 0 0-1.66-1.25l-.9-.17a2.12 2.12 0 0 0-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03ZM10 7.5A.75.75 0 1 1 10 6a.75.75 0 0 1 0 1.5Zm9 6a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm0 5.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.24Z";
   
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