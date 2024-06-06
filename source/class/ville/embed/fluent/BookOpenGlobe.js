/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.BookOpenGlobe",
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

   var pathdregular = "M18 4.5v5.76a5.5 5.5 0 0 0-1-.66V4.5a.5.5 0 0 0-.5-.5H12c-.83 0-1.5.67-1.5 1.5v5.23c-.4.43-.75.93-1 1.48V5.5C9.5 4.67 8.83 4 8 4H3.5a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5H8c.43 0 .82-.18 1.1-.48.06.37.17.72.3 1.05-.4.27-.88.43-1.4.43H3.5A1.5 1.5 0 0 1 2 15.5v-11C2 3.67 2.67 3 3.5 3H8c.82 0 1.54.4 2 1 .46-.6 1.18-1 2-1h4.5c.83 0 1.5.67 1.5 1.5Z";
   var pathdfilled = "M18 4.75v5.5a5.5 5.5 0 0 0-1.5-.88V4.75a.25.25 0 0 0-.25-.25H12c-.69 0-1.25.56-1.25 1.25v4.73a5.5 5.5 0 0 0-1.5 2.38V5.75c0-.69-.56-1.25-1.25-1.25H3.75a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25H8c.42 0 .8-.2 1.02-.53.05.58.19 1.13.4 1.64-.42.25-.9.39-1.42.39H3.75C2.78 17 2 16.22 2 15.25V4.75C2 3.78 2.78 3 3.75 3H8c.79 0 1.5.33 2 .86.5-.53 1.21-.86 2-.86h4.25c.97 0 1.75.78 1.75 1.75Z";
   
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