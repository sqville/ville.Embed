/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.PanelTopContract",
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

   var pathdregular = "m10.5 8.83.87 1a.5.5 0 0 0 .76-.66l-1.75-2a.5.5 0 0 0-.76 0l-1.75 2a.5.5 0 0 0 .76.65l.87-1v3.68a.5.5 0 0 0 1 0V8.83ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-3.83a1.5 1.5 0 0 0-.3-.5l-.44-.5H17V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h4.57l-.45.5a1.5 1.5 0 0 0-.29.5H3v5Z";
   var pathdfilled = "m10.5 8.83.87 1a.5.5 0 0 0 .76-.66l-1.75-2a.5.5 0 0 0-.76 0l-1.75 2a.5.5 0 0 0 .76.65l.87-1v3.68a.5.5 0 0 0 1 0V8.83ZM4 16a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4Zm-1-2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-3.83a1.5 1.5 0 0 0-.3-.5l-1.74-2a1.5 1.5 0 0 0-2.26 0l-1.75 2a1.5 1.5 0 0 0-.29.5H3v5Z";
   
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