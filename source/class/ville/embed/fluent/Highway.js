/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Highway",
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

   var pathdregular = "M6 2.57a.5.5 0 0 0-1-.14l-2 15a.5.5 0 0 0 1 .14l2-15Zm9-.14a.5.5 0 0 0-1 .14l2 15a.5.5 0 0 0 1-.14l-2-15Zm-4.5.07a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Zm-1 9a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Zm0 3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-1 0v-3Z";
   var pathdfilled = "M6 2.85a.75.75 0 0 0-1.5-.2l-2 14.5a.75.75 0 1 0 1.5.2l2-14.5Zm9.5-.2a.75.75 0 0 0-1.5.2l2 14.5a.75.75 0 0 0 1.5-.2l-2-14.5Zm-4.75.1a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Zm-1.5 8.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5Zm0 3.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-1.5 0v-2.5Z";
   
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