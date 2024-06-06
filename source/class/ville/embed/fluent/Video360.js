/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Video360",
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

   var pathdregular = "M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM3.97 4.02A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68c4-.65 8.07-.65 12.06 0A1.7 1.7 0 0 0 18 14.3V5.7a1.7 1.7 0 0 0-1.97-1.68c-4 .64-8.07.64-12.06 0ZM3 5.7a.7.7 0 0 1 .81-.7c4.1.67 8.28.67 12.38 0a.7.7 0 0 1 .81.7v8.6a.7.7 0 0 1-.81.7 31.2 31.2 0 0 0-.19-.04V13a1 1 0 0 0-1-1h-2v2.61l-1-.06V12a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.55l-1 .06V12H5a1 1 0 0 0-1 1v1.96l-.19.03A.7.7 0 0 1 3 14.3V5.7Z";
   var pathdfilled = "M3.97 4.02A1.7 1.7 0 0 0 2 5.7v8.6a1.7 1.7 0 0 0 1.97 1.68 37.94 37.94 0 0 1 12.25.02A1.7 1.7 0 0 0 18 14.3V5.7a1.7 1.7 0 0 0-1.97-1.68c-4 .64-8.07.64-12.06 0ZM16 14.96c-1-.15-2-.27-3-.35V12h2a1 1 0 0 1 1 1v1.96Zm-4-.41a38.84 38.84 0 0 0-4 0V12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.55Zm-5 .06c-1 .08-2 .2-3 .35V13a1 1 0 0 1 1-1h2v2.61ZM10 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-3.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z";
   
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