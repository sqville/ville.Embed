/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ServerMultiple",
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

   var pathdregular = "M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 12.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5 4.5A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5V5h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1.05a2.5 2.5 0 0 1-2.45 2h-5a2.5 2.5 0 0 1-2.45-2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1v-.5ZM15 15h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1v9ZM5 6H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1V6Zm2.5-3C6.67 3 6 3.67 6 4.5v11c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-5Z";
   var pathdfilled = "M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h5a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 12.5 2h-5Zm0 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM7 12.5c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm0 2c0-.28.22-.5.5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5ZM2 7c0-1.1.9-2 2-2v10.5c0 .17.01.34.04.5H4a2 2 0 0 1-2-2V7Zm14 8.5c0 .17-.01.34-.04.5H16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2v10.5Z";
   
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