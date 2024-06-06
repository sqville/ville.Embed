/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowStepOut",
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

   var pathdregular = "M10 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z";
   var pathdfilled = "M12 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2-4a.5.5 0 0 0 .5-.5V3.7l3.15 3.15a.5.5 0 0 0 .7-.7l-4-4a.5.5 0 0 0-.7 0l-4 4a.5.5 0 1 0 .7.7L9.5 3.71v7.79c0 .28.22.5.5.5Z";
   
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