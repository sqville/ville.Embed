/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.StackVertical",
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

   var pathdregular = "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v11a.5.5 0 0 1-1 0v-3c0-.83-.67-1.5-1.5-1.5h-9c-.83 0-1.5.67-1.5 1.5v3a.5.5 0 0 1-1 0v-11Zm1 6c.42-.31.94-.5 1.5-.5h9c.56 0 1.08.19 1.5.5v-2c0-.83-.67-1.5-1.5-1.5h-9C4.67 8 4 8.67 4 9.5v2Zm12-6c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v2c.42-.31.94-.5 1.5-.5h9c.56 0 1.08.19 1.5.5v-2Z";
   var pathdfilled = "M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v10.75a.75.75 0 0 1-1.5 0V13.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v2.75a.75.75 0 0 1-1.5 0V5.5Zm1.5 5.7c.3-.13.64-.2 1-.2h9c.36 0 .7.07 1 .2V9.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v1.7Zm11-5.7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v1.7c.3-.13.64-.2 1-.2h9c.36 0 .7.07 1 .2V5.5Z";
   
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