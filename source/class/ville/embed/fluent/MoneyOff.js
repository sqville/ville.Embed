/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MoneyOff",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v7c0 .83.67 1.5 1.5 1.5h9.8l1 1H4.08c.2.58.76 1 1.41 1h9c.25 0 .49-.03.72-.07l1.93 1.92a.5.5 0 0 0 .7-.7l-15-15ZM12 12.7V13H6v-1a2 2 0 0 0-2-2H3V8h1a2 2 0 0 0 1.9-1.39l1.38 1.37a2 2 0 0 0 2.74 2.74L12 12.71ZM4.3 5l.7.7V6a1 1 0 0 1-1 1H3V5.5c0-.28.22-.5.5-.5h.8Zm3.73 3.74 1.23 1.23a1 1 0 0 1-1.23-1.23ZM3.5 13a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1v1H3.5ZM14 10a2 2 0 0 0-1.35.53l.7.7A1 1 0 0 1 14 11h1v1.5c0 .1-.03.2-.1.29l.72.71c.24-.27.38-.62.38-1v-7c0-.83-.67-1.5-1.5-1.5H6.12l1 1H12v1c0 1.1.9 2 2 2h1v2h-1Zm.5-5c.28 0 .5.22.5.5V7h-1a1 1 0 0 1-1-1V5h1.5Zm1.83 9.2.7.72c.6-.63.97-1.48.97-2.42v-5c0-.65-.42-1.2-1-1.41v6.41a2.5 2.5 0 0 1-.67 1.7Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v7c0 .83.67 1.5 1.5 1.5h9.8l1 1H4.08c.2.58.76 1 1.41 1h9c.25 0 .49-.03.72-.07l1.93 1.92a.5.5 0 0 0 .7-.7l-15-15Zm6.98 8.39a1.75 1.75 0 0 1-2.37-2.37l2.37 2.37ZM5.9 6.61A2 2 0 0 1 4 8H3V7h1a1 1 0 0 0 1-1v-.3l.9.91ZM3 11v-1h1a2 2 0 0 1 2 2v1H5v-1a1 1 0 0 0-1-1H3Zm6.42-3.7 1.28 1.28 1.95 1.95A2 2 0 0 1 14 10h1v1h-1a1 1 0 0 0-.65.24l2.27 2.26c.24-.27.38-.62.38-1v-7c0-.83-.67-1.5-1.5-1.5H6.12l3.3 3.3ZM15 7v1h-1a2 2 0 0 1-2-2V5h1v1a1 1 0 0 0 1 1h1Zm1.33 7.2.7.72c.6-.63.97-1.48.97-2.42v-5c0-.65-.42-1.2-1-1.41v6.41a2.5 2.5 0 0 1-.67 1.7Z";
   
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