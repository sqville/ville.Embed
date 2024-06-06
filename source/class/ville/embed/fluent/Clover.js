/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Clover",
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

   var pathdregular = "M5.5 2a3.5 3.5 0 1 0 0 7h3a.5.5 0 0 0 .5-.5v-3A3.5 3.5 0 0 0 5.5 2ZM3 5.5a2.5 2.5 0 0 1 5 0V8H5.5A2.5 2.5 0 0 1 3 5.5ZM5.5 17a3.5 3.5 0 1 1 0-7h3c.28 0 .5.22.5.5v3A3.5 3.5 0 0 1 5.5 17ZM3 13.5a2.5 2.5 0 0 0 5 0V11H5.5A2.5 2.5 0 0 0 3 13.5Zm14-8a3.5 3.5 0 1 0-7 0v3c0 .28.22.5.5.5h3A3.5 3.5 0 0 0 17 5.5ZM13.5 3a2.5 2.5 0 0 1 0 5H11V5.5A2.5 2.5 0 0 1 13.5 3Zm0 14a3.5 3.5 0 1 0 0-7h-3a.5.5 0 0 0-.5.5v3a3.5 3.5 0 0 0 3.5 3.5Zm2.5-3.5a2.5 2.5 0 0 1-5 0V11h2.5a2.5 2.5 0 0 1 2.5 2.5Z";
   var pathdfilled = "M5.5 2a3.5 3.5 0 1 0 0 7h3a.5.5 0 0 0 .5-.5v-3A3.5 3.5 0 0 0 5.5 2Zm0 15a3.5 3.5 0 1 1 0-7h3c.28 0 .5.22.5.5v3A3.5 3.5 0 0 1 5.5 17Zm8-15a3.5 3.5 0 1 1 0 7h-3a.5.5 0 0 1-.5-.5v-3A3.5 3.5 0 0 1 13.5 2Zm0 15a3.5 3.5 0 1 0 0-7h-3a.5.5 0 0 0-.5.5v3a3.5 3.5 0 0 0 3.5 3.5Z";
   
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