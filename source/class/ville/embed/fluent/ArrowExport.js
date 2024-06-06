/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowExport",
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

   var pathdregular = "M2.5 4c.28 0 .5.22.5.5v11a.5.5 0 0 1-1 0v-11c0-.28.22-.5.5-.5ZM5 10c0-.28.22-.5.5-.5h10.8l-3.15-3.15a.5.5 0 0 1 .7-.7l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 0 1-.7-.7l3.14-3.15H5.5A.5.5 0 0 1 5 10Z";
   var pathdfilled = "M2.75 3.75c.41 0 .75.34.75.75v11a.75.75 0 0 1-1.5 0v-11c0-.41.34-.75.75-.75ZM5 10c0-.41.34-.75.75-.75h10.19l-2.72-2.72a.75.75 0 0 1 1.06-1.06l4 4a.77.77 0 0 1 .15.22.75.75 0 0 1-.15.84l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H5.75A.75.75 0 0 1 5 10Z";
   
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