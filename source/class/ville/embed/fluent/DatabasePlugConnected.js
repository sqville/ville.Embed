/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DatabasePlugConnected",
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

   var pathdregular = "M4 5c0-1 .88-1.76 1.9-2.22 1.3-.54 2.7-.8 4.1-.78 1.4-.03 2.8.24 4.1.78C15.13 3.24 16 3.99 16 5v5.1a2.97 2.97 0 0 0-1 .27V6.7c-.28.2-.58.38-.9.52-1.3.54-2.7.8-4.1.78-1.4.03-2.8-.24-4.1-.78A4.92 4.92 0 0 1 5 6.7V15c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 17h.02a3 3 0 0 0 .04.16l-.76.77a1.5 1.5 0 0 0-.06.06 10.18 10.18 0 0 1-3.34-.77C4.87 16.75 4 16.01 4 15V5Zm1 0c0 .37.36.87 1.32 1.31A9.2 9.2 0 0 0 10 7a9.2 9.2 0 0 0 3.68-.69C14.64 5.87 15 5.37 15 5c0-.37-.36-.88-1.32-1.31A9.2 9.2 0 0 0 10 3a9.2 9.2 0 0 0-3.68.69C5.36 4.12 5 4.63 5 5Zm14.2 5.85a.5.5 0 1 0-.7-.7l-1.2 1.18a.64.64 0 0 0-.03.05 2 2 0 0 0-2.44.3l-.6.6a.98.98 0 0 0 0 1.4l1.45 1.43a.98.98 0 0 0 1.38 0l.6-.6a2 2 0 0 0 .3-2.44.36.36 0 0 0 .06-.03l1.18-1.19Zm-5.67 3.53a.98.98 0 0 0-1.39 0l-.6.6a2 2 0 0 0-.3 2.43.42.42 0 0 0-.05.04L10 18.63a.5.5 0 0 0 .7.7l1.19-1.18a.5.5 0 0 0 .03-.05 2 2 0 0 0 2.44-.3l.6-.6a.98.98 0 0 0 0-1.39l-1.44-1.44Z";
   var pathdfilled = "M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3Zm4.69.02c.47-.24.93-.54 1.31-.9v2.99a2.97 2.97 0 0 0-1.87.86l-.6.6a1.98 1.98 0 0 0-.58 1.52 1.95 1.95 0 0 0-1.52.58l-.6.6a2.99 2.99 0 0 0-.77 2.9l-.76.75-.05.06C6.3 17.79 4 16.53 4 15V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98Zm4.5 2.83a.5.5 0 1 0-.7-.7l-1.19 1.18a.64.64 0 0 0-.03.05 2 2 0 0 0-2.44.3l-.6.6a.98.98 0 0 0 0 1.4l1.45 1.43a.98.98 0 0 0 1.38 0l.6-.6a2 2 0 0 0 .3-2.44.36.36 0 0 0 .06-.03l1.18-1.19Zm-5.66 3.53a.98.98 0 0 0-1.39 0l-.6.6a2 2 0 0 0-.3 2.43.42.42 0 0 0-.05.04L10 18.63a.5.5 0 0 0 .7.7l1.19-1.18a.5.5 0 0 0 .03-.05 2 2 0 0 0 2.44-.3l.6-.6a.98.98 0 0 0 0-1.39l-1.44-1.44Z";
   
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