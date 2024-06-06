/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Couch",
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

   var pathdregular = "M6 4a2 2 0 0 0-2 2v1.05A2.5 2.5 0 0 0 2 9.5V12c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2V9.5a2.5 2.5 0 0 0-2-2.45V6a2 2 0 0 0-2-2H6Zm9 3.05A2.5 2.5 0 0 0 13.05 9h-6.1A2.5 2.5 0 0 0 5 7.05V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1.05ZM16 13H4a1 1 0 0 1-1-1V9.5a1.5 1.5 0 1 1 3 0c0 .28.22.5.5.5h7a.5.5 0 0 0 .5-.5 1.5 1.5 0 0 1 3 0V12a1 1 0 0 1-1 1Z";
   var pathdfilled = "M14 4H6a2 2 0 0 0-2 2v1a3 3 0 0 1 2.83 2h6.34A3 3 0 0 1 16 7V6a2 2 0 0 0-2-2Zm2 4a2 2 0 0 0-1.94 1.5c-.07.27-.28.5-.56.5h-7c-.28 0-.5-.23-.56-.5A2 2 0 0 0 2 10v2c0 1.1.9 2 2 2v1.5a.5.5 0 0 0 1 0V14h10v1.5a.5.5 0 0 0 1 0V14a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z";
   
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