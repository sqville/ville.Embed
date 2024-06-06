/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowFlowDiagonalUpRight",
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

   var pathdregular = "M10.5 4a.5.5 0 0 0 0 1h3.8l-6.56 6.55a3 3 0 1 0 .7.7L15 5.72V9.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5ZM4 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z";
   var pathdfilled = "M10.5 4a.5.5 0 0 0 0 1h3.8l-6.56 6.55a3 3 0 1 0 .7.7L15 5.72V9.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5h-5Z";
   
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