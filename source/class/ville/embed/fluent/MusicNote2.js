/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MusicNote2",
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

   var pathdregular = "M14.7 2.23a1 1 0 0 1 1.3.95V13.5a2.5 2.5 0 1 1-1-2V6.18L8 8.37v7.13a2.5 2.5 0 1 1-1-2V5.37a1 1 0 0 1 .7-.96l7-2.18ZM8 7.32l7-2.19V3.18L8 5.37v1.95ZM5.5 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm6.5-.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z";
   var pathdfilled = "M15.99 3.02a1 1 0 0 0-1.29-.8l-7 2.2a1 1 0 0 0-.7.95v8.13a2.5 2.5 0 1 0 1 2V8.37l7-2.19v5.32a2.5 2.5 0 1 0 1 2V3.18l-.01-.16Z";
   
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