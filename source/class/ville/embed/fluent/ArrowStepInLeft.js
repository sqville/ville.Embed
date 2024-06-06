/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowStepInLeft",
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

   var pathdregular = "M5 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM4 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm14 2a.5.5 0 0 1-.5.5H9.7l3.15 3.15a.5.5 0 0 1-.7.7l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 0 1 .7.7L9.71 9.5h7.79c.28 0 .5.22.5.5Z";
   var pathdfilled = "M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm14-2a.5.5 0 0 1-.5.5H9.7l3.15 3.15a.5.5 0 0 1-.7.7l-4-4a.5.5 0 0 1 0-.7l4-4a.5.5 0 0 1 .7.7L9.71 9.5h7.79c.28 0 .5.22.5.5Z";
   
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