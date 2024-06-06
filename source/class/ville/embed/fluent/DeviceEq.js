/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DeviceEq",
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

   var pathdregular = "M10 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5Zm3.5 3c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5ZM7 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM16.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5ZM4 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z";
   var pathdfilled = "M10 2c.41 0 .75.34.75.75v14.5a.75.75 0 0 1-1.5 0V2.75c0-.41.34-.75.75-.75Zm3.75 3c.41 0 .75.34.75.75v8.5a.75.75 0 0 1-1.5 0v-8.5c0-.41.34-.75.75-.75ZM7 5.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5ZM17.25 8c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0v-2.5c0-.41.34-.75.75-.75ZM3.5 8.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z";
   
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