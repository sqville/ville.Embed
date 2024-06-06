/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArrowExportRtl",
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

   var pathdregular = "M17.5 4a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-.5-.5ZM15 10a.5.5 0 0 0-.5-.5H3.7l3.15-3.15a.5.5 0 0 0-.7-.7l-4 4a.5.5 0 0 0 0 .7l4 4a.5.5 0 0 0 .7-.7L3.71 10.5H14.5a.5.5 0 0 0 .5-.5Z";
   var pathdfilled = "M17.25 3.75a.75.75 0 0 0-.75.75v11a.75.75 0 0 0 1.5 0v-11a.75.75 0 0 0-.75-.75ZM15 10a.75.75 0 0 0-.75-.75H4.06l2.72-2.72a.75.75 0 0 0-1.06-1.06l-4 4a.76.76 0 0 0-.22.53.75.75 0 0 0 .22.53l4 4a.75.75 0 1 0 1.06-1.06l-2.72-2.72h10.19c.41 0 .75-.34.75-.75Z";
   
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