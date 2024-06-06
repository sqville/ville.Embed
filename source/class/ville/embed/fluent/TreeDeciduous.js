/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TreeDeciduous",
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

   var pathdregular = "M10 2a3.5 3.5 0 0 0-3.39 2.61A3.5 3.5 0 0 0 4.05 8.6 3.5 3.5 0 0 0 6 15h2v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h2a3.5 3.5 0 0 0 1.95-6.4 3.52 3.52 0 0 0-2.56-3.99A3.5 3.5 0 0 0 10 2Zm1 13v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15h2ZM7.53 5.11a2.5 2.5 0 0 1 4.94 0c.03.22.2.39.42.42A2.5 2.5 0 0 1 14.9 8.7a.5.5 0 0 0 .25.58A2.5 2.5 0 0 1 14 14H6a2.5 2.5 0 0 1-1.15-4.72.5.5 0 0 0 .25-.58A2.5 2.5 0 0 1 7.1 5.53a.5.5 0 0 0 .42-.42Z";
   var pathdfilled = "M10 2a3.5 3.5 0 0 0-3.39 2.61A3.5 3.5 0 0 0 4.05 8.6 3.5 3.5 0 0 0 6 15h2v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h2a3.5 3.5 0 0 0 1.95-6.4 3.52 3.52 0 0 0-2.56-3.99A3.5 3.5 0 0 0 10 2ZM9 15h2v1.75c0 .14-.11.25-.25.25h-1.5a.25.25 0 0 1-.25-.25V15Z";
   
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