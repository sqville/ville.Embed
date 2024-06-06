/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Midi",
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

   var pathdregular = "M12.5 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM5.75 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM9 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM2 4.5c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v11a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-11ZM3 5v4h14V5H3Zm5 5H6v3.5a.5.5 0 0 1-1 0V10H3v5h14v-5h-2v3.5a.5.5 0 0 1-1 0V10h-2v3.5a.5.5 0 0 1-1 0V10H9v3.5a.5.5 0 0 1-1 0V10Z";
   var pathdfilled = "M2.5 4a.5.5 0 0 0-.5.5v11c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5h-15Zm.5 6h2v3.5a.5.5 0 0 0 1 0V10h2v3.5a.5.5 0 0 0 1 0V10h2v3.5a.5.5 0 0 0 1 0V10h2v3.5a.5.5 0 0 0 1 0V10h2v5H3v-5Zm2.75-2.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm6.25-1c0-.28.22-.5.5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-3 .25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z";
   
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