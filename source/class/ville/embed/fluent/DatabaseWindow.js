/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabaseWindow",
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

   var pathdregular = "M4 5c0-1 .88-1.76 1.9-2.22C6.98 2.28 8.43 2 10 2c1.57 0 3.02.29 4.1.78C15.12 3.24 16 3.99 16 5v4h-1V6.7c-.27.2-.58.38-.9.52-1.08.5-2.53.78-4.1.78-1.57 0-3.02-.29-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.88 1.32 1.31.7.32 1.63.55 2.68.65v.54c0 .16.01.31.04.46a9.47 9.47 0 0 1-3.14-.74C4.88 16.76 4 16.01 4 15V5Zm1 0c0 .37.36.88 1.32 1.31.91.42 2.22.69 3.68.69s2.77-.27 3.68-.69C14.64 5.88 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.19 9.19 0 0 0 10 3c-1.46 0-2.77.27-3.68.69C5.36 4.12 5 4.63 5 5Zm5 6.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v.5h-9v-.5Zm0 1.5h9v4.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V13Z";
   var pathdfilled = "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9V9h-4.5A2.5 2.5 0 0 0 9 11.5v6c0 .16.01.31.04.46C6.18 17.73 4 16.5 4 15V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98ZM10 11.5c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v.5h-9v-.5Zm0 1.5h9v4.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V13Z";
   
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