/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.FoodGrains",
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

   var pathdregular = "M10.43 2.21a.65.65 0 0 0-.86 0 5.73 5.73 0 0 0-1.74 5.74 7.11 7.11 0 0 0-4.2-.96.66.66 0 0 0-.61.72 6.99 6.99 0 0 0 1.65 3.77c-.35-.02-.7-.02-1.05 0a.66.66 0 0 0-.6.73A6.37 6.37 0 0 0 9.36 18h1.28c3.3 0 6.04-2.51 6.34-5.8a.66.66 0 0 0-.6-.71c-.36-.03-.7-.03-1.05-.01a6.99 6.99 0 0 0 1.65-3.77.66.66 0 0 0-.6-.72 7.1 7.1 0 0 0-4.21.96c.52-2-.06-4.24-1.74-5.74ZM10 14.43a7.15 7.15 0 0 0-3.47-2.6 6.17 6.17 0 0 1-2.47-3.86c1.54-.05 3 .5 4.12 1.45.76.64.96 1.23 1.15 1.76l.22.54a.5.5 0 0 0 .9 0l.22-.54c.18-.53.4-1.12 1.15-1.76a6.12 6.12 0 0 1 4.12-1.45 6.17 6.17 0 0 1-2.5 3.9A7.15 7.15 0 0 0 10 14.42ZM9.36 17a5.37 5.37 0 0 1-5.3-4.53 6.13 6.13 0 0 1 5.5 3.13.5.5 0 0 0 .88 0 6.13 6.13 0 0 1 5.5-3.13 5.37 5.37 0 0 1-5.3 4.53H9.36ZM10 9.82a4.74 4.74 0 0 1 0-6.64 4.74 4.74 0 0 1 0 6.64Z";
   var pathdfilled = "M10.43 2.21a.65.65 0 0 0-.86 0 5.72 5.72 0 0 0-1.92 4.35c0 .18.09.34.24.43A7.4 7.4 0 0 1 9.63 8.4a.5.5 0 0 0 .74 0 7.4 7.4 0 0 1 1.74-1.42.5.5 0 0 0 .24-.43c.02-1.59-.62-3.2-1.92-4.35Zm-7.41 10a.66.66 0 0 1 .6-.72A6.36 6.36 0 0 1 10 15.33a6.36 6.36 0 0 1 6.38-3.84c.36.03.64.35.6.72A6.37 6.37 0 0 1 10.64 18h-.46c-.07 0-.12 0-.18-.02a.66.66 0 0 1-.18.02h-.46a6.37 6.37 0 0 1-6.34-5.8ZM10 10.83a6.36 6.36 0 0 0-6.38-3.84.66.66 0 0 0-.6.72c.08.9.35 1.75.76 2.5a.5.5 0 0 0 .43.26c2.1.01 4.03.92 5.37 2.39.11.12.27.18.42.16a.5.5 0 0 0 .42-.16 7.36 7.36 0 0 1 5.36-2.4.5.5 0 0 0 .44-.25c.41-.75.68-1.6.76-2.5a.66.66 0 0 0-.6-.72A6.36 6.36 0 0 0 10 10.83Z";
   
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