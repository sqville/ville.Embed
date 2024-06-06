/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Mention",
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

   var pathdregular = "M10 2a8 8 0 0 1 8 8c0 2.7-1.14 4.5-3 4.5-1.23 0-2.14-.78-2.62-2.09-.6.98-1.6 1.59-2.88 1.59C7.36 14 6 12.3 6 10c0-2.34 1.31-4 3.5-4 1.05 0 1.9.38 2.5 1.04V6.5a.5.5 0 0 1 1-.09V10c0 2.22.81 3.5 2 3.5s2-1.28 2-3.5a7 7 0 1 0-4.62 6.58.5.5 0 0 1 .34.94A7.99 7.99 0 0 1 2 10a8 8 0 0 1 8-8Zm-.5 5C7.92 7 7 8.17 7 10c0 1.8.97 3 2.5 3s2.5-1.2 2.5-3c0-1.83-.92-3-2.5-3Z";
   var pathdfilled = "M10 1.75c4.56 0 8.25 3.7 8.25 8.25 0 2.83-1.22 4.75-3.25 4.75-1.2 0-2.12-.68-2.67-1.82a3.5 3.5 0 0 1-2.83 1.32c-2.3 0-3.75-1.82-3.75-4.25 0-2.46 1.41-4.25 3.75-4.25.9 0 1.66.26 2.25.72a.75.75 0 0 1 1.49-.08l.01.11V10c0 2.1.73 3.25 1.75 3.25s1.75-1.15 1.75-3.25a6.75 6.75 0 1 0-4.45 6.35.75.75 0 0 1 .5 1.4A8.23 8.23 0 0 1 1.76 10c0-4.56 3.7-8.25 8.25-8.25Zm-.5 5.5C8.08 7.25 7.25 8.3 7.25 10c0 1.67.87 2.75 2.25 2.75s2.25-1.08 2.25-2.75c0-1.7-.83-2.75-2.25-2.75Z";
   
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