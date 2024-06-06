/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DocumentBorder",
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

   var pathdregular = "M6.5 2A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2h-7ZM5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5v-11ZM6.75 4a.75.75 0 0 0-.75.75v10.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75V4.75a.75.75 0 0 0-.75-.75h-6.5ZM7 15V5h6v10H7Z";
   var pathdfilled = "M6.5 2A2.5 2.5 0 0 0 4 4.5v11A2.5 2.5 0 0 0 6.5 18h7a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 2h-7ZM5 4.5C5 3.67 5.67 3 6.5 3h7c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 5 15.5v-11ZM6.75 4a.75.75 0 0 0-.75.75v10.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75V4.75a.75.75 0 0 0-.75-.75h-6.5Z";
   
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