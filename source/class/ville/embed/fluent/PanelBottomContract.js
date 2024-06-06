/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PanelBottomContract",
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

   var pathdregular = "m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 1 1 1 0v3.67ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-3.83a1.5 1.5 0 0 1-.3.5l-.44.5H17v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2h4.57l-.45-.5a1.5 1.5 0 0 1-.29-.5H3V6Z";
   var pathdfilled = "m10.5 11.17.87-1a.5.5 0 0 1 .76.66l-1.75 2a.5.5 0 0 1-.76 0l-1.75-2a.5.5 0 1 1 .76-.65l.87 1V7.5a.5.5 0 1 1 1 0v3.67ZM4 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4ZM3 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-3.83a1.5 1.5 0 0 1-.3.5l-1.74 2a1.5 1.5 0 0 1-2.26 0l-1.75-2a1.5 1.5 0 0 1-.29-.5H3V6Z";
   
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