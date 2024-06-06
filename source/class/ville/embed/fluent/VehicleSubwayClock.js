/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VehicleSubwayClock",
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

   var pathdregular = "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 0 0 0-1H6V3.5a.5.5 0 0 0-.5-.5ZM4 11v-.2c-.35-.1-.68-.24-1-.4V14a3 3 0 0 0 2.68 2.98L3.3 18.04a.5.5 0 1 0 .4.92L8.1 17h3.8l4.4 1.96a.5.5 0 1 0 .4-.92l-2.38-1.06A3 3 0 0 0 17 14V6a3 3 0 0 0-3-3h-3.6c.16.32.3.65.4 1H14a2 2 0 0 1 2 2v5H4Zm4 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-.99 1H6a2 2 0 0 1-2-2v-2h12v2a2 2 0 0 1-2 2h-1.99Z";
   var pathdfilled = "M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM5.5 3a.5.5 0 0 0-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 0 0 0-1H6V3.5a.5.5 0 0 0-.5-.5ZM4 11v-.2c-.35-.1-.68-.24-1-.4V14a3 3 0 0 0 2.68 2.98L3.3 18.04a.5.5 0 1 0 .4.92L8.1 17h3.8l4.4 1.96a.5.5 0 1 0 .4-.92l-2.38-1.06A3 3 0 0 0 17 14V6a3 3 0 0 0-3-3h-3.6c.16.32.3.65.4 1H14a2 2 0 0 1 2 2v5H4Zm4 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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