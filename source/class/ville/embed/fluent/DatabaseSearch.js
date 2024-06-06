/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabaseSearch",
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

   var pathdregular = "M4 5c0-1 .88-1.76 1.9-2.22C6.98 2.28 8.43 2 10 2c1.57 0 3.02.29 4.1.78C15.12 3.24 16 3.99 16 5v4.76c-.3-.2-.64-.38-1-.5V6.7c-.27.2-.58.38-.9.52-1.08.5-2.53.78-4.1.78-1.57 0-3.02-.29-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.88 1.32 1.31a9.19 9.19 0 0 0 4.33.67c.45.37.97.65 1.53.82-.68.13-1.41.2-2.18.2-1.57 0-3.02-.29-4.1-.78C4.88 16.76 4 16.01 4 15V5Zm1 0c0 .37.36.88 1.32 1.31.91.42 2.22.69 3.68.69s2.77-.27 3.68-.69C14.64 5.88 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.19 9.19 0 0 0 10 3c-1.46 0-2.77.27-3.68.69C5.36 4.12 5 4.63 5 5Zm8.5 12c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L16.3 15.6a3.5 3.5 0 1 0-2.8 1.4Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   var pathdfilled = "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9v2.64a4.5 4.5 0 1 0-3.83 8.04c-.68.13-1.4.2-2.17.2-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98ZM13.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 1 0 .7-.7L16.3 15.6a3.5 3.5 0 1 0-2.8 1.4Zm0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z";
   
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