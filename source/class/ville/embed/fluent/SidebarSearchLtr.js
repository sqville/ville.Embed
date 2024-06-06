/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SidebarSearchLtr",
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

   var pathdregular = "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-2.59a1.5 1.5 0 0 0-.35-.56l-.44-.44h3.38c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v2.76c-.36.12-.7.3-1 .5V5.5Zm5.3 9.1a3.5 3.5 0 1 0-.7.7l2.55 2.55a.5.5 0 0 0 .7-.7L8.3 14.6Zm-2.8.4a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm8-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5Z";
   var pathdfilled = "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-2.59a1.5 1.5 0 0 0-.35-.56l-2-2A4.49 4.49 0 0 0 5.5 8c-.93 0-1.78.28-2.5.76V5.5Zm10 1v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-1 0Zm-4 6c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 0 1-.7.7L7.6 15.3A3.5 3.5 0 1 1 9 12.5Zm-1 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z";
   
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