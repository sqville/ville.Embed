/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopMac",
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

   var pathdregular = "M2 4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4v1a1 1 0 0 0 1 1h.5a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1H7a1 1 0 0 0 1-1v-1H4a2 2 0 0 1-2-2V4Zm1 8v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1H3Zm14-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7h14Zm-5.73 6a2 2 0 0 1-.27-1v-1H9v1a2 2 0 0 1-.27 1h2.54Z";
   var pathdfilled = "M4 2a2 2 0 0 0-2 2v9c0 1.1.9 2 2 2h4v1a1 1 0 0 1-1 1h-.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1H13a1 1 0 0 1-1-1v-1h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4ZM3 13v-1h14v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm5.73 4A2 2 0 0 0 9 16v-1h2v1c0 .36.1.7.27 1H8.73Z";
   
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