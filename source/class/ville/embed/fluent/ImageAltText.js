/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ImageAltText",
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

   var pathdregular = "M3 1a2 2 0 0 0-2 2v4c0 1.1.9 2 2 2h5a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm.5 5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1ZM3 3.5c0-.28.22-.5.5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM3 14v-4h1v4c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 0 1 2.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 0 0-2-2h-3V3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm3 2h8a2 2 0 0 0 1.01-.27l-4.66-4.58a.5.5 0 0 0-.7 0l-4.66 4.58A2 2 0 0 0 6 16Zm6.5-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm.5-1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z";
   var pathdfilled = "M1 3c0-1.1.9-2 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3Zm2 3.5c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM3.5 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm9 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM3 10h5a3 3 0 0 0 3-3V3h3a3 3 0 0 1 3 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 0 0-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14v-4Zm9.5-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 0 0-.7 0l-5.38 5.3Z";
   
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