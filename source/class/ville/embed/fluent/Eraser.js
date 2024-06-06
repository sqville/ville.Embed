/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Eraser",
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

   var pathdregular = "M11.2 2.44a1.5 1.5 0 0 1 2.12 0l4.24 4.24a1.5 1.5 0 0 1 0 2.12L9.36 17h5.14a.5.5 0 1 1 0 1H7.82a1.5 1.5 0 0 1-1.14-.44l-4.24-4.24a1.5 1.5 0 0 1 0-2.12l8.76-8.76Zm1.41.7a.5.5 0 0 0-.7 0L5.53 9.52l4.95 4.95 6.36-6.36a.5.5 0 0 0 0-.71l-4.24-4.24ZM9.78 15.18l-4.95-4.95-1.69 1.69a.5.5 0 0 0 0 .7l4.25 4.25c.2.2.5.2.7 0l1.7-1.7Z";
   var pathdfilled = "M11.2 2.44a1.5 1.5 0 0 1 2.12 0l4.24 4.24a1.5 1.5 0 0 1 0 2.12L9.36 17h5.14a.5.5 0 1 1 0 1H7.82a1.5 1.5 0 0 1-1.14-.44l-4.24-4.24a1.5 1.5 0 0 1 0-2.12l8.76-8.76ZM9.78 15.17l-4.95-4.95-1.69 1.69a.5.5 0 0 0 0 .7l4.25 4.25c.2.2.5.2.7 0l1.7-1.7Z";
   
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