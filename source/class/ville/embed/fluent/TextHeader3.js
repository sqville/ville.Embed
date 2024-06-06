/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TextHeader3",
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

   var pathdregular = "M3 4.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0V10h6v5.5a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0V9H3V4.5Zm8.98 2.14c.09-.3.28-.7.66-1.04.38-.32.95-.6 1.86-.6C16.24 5 17 6.19 17 7c0 .5-.1 1.11-.5 1.6-.37.46-1.08.9-2.5.9a.5.5 0 0 0 0 1c.5 0 1.3.06 1.94.36.31.15.57.34.76.6.18.24.3.57.3 1.04 0 1-.33 1.6-.76 1.96a2.7 2.7 0 0 1-1.74.54c-.7 0-1.22-.12-1.61-.36-.38-.24-.7-.63-.92-1.3a.5.5 0 1 0-.94.32c.27.83.71 1.44 1.33 1.83.61.38 1.34.51 2.14.51.82 0 1.7-.2 2.38-.77.7-.58 1.12-1.48 1.12-2.73 0-.66-.18-1.2-.5-1.63-.3-.42-.7-.7-1.1-.9.36-.2.65-.46.88-.74.6-.74.72-1.63.72-2.23 0-1.39-1.24-3-3.5-3a3.7 3.7 0 0 0-2.51.85 3.22 3.22 0 0 0-.97 1.51.5.5 0 0 0 .96.28Z";
   var pathdfilled = "M3.5 4.5a.75.75 0 0 0-1.5 0v11a.75.75 0 0 0 1.5 0v-5h5v5a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-1.5 0V9h-5V4.5Zm8.97 1.96c.09-.3.22-.57.47-.79.24-.2.69-.42 1.56-.42.78 0 1.26.3 1.55.65.32.37.45.82.45 1.1 0 .36-.1.92-.45 1.38-.33.42-.96.87-2.3.87a.75.75 0 0 0 0 1.5c.45 0 1.2.11 1.81.42.6.3.94.71.94 1.33 0 .84-.26 1.39-.6 1.72-.33.34-.82.53-1.4.53-.68 0-1.15-.12-1.46-.3a1.17 1.17 0 0 1-.55-.85.75.75 0 1 0-1.48.3c.17.81.6 1.44 1.26 1.84.63.38 1.41.51 2.23.51.92 0 1.8-.3 2.47-.97A3.82 3.82 0 0 0 18 12.5c0-1.23-.7-2.03-1.48-2.51.28-.2.52-.44.72-.7.63-.8.76-1.74.76-2.29 0-.63-.25-1.43-.8-2.08a3.43 3.43 0 0 0-2.7-1.17 3.8 3.8 0 0 0-2.53.78 3.02 3.02 0 0 0-.94 1.51.75.75 0 0 0 1.44.42Z";
   
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