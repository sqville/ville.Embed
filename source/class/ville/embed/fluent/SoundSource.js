/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SoundSource",
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

   var pathdregular = "M3 10a7 7 0 1 1 12.14 4.75l.65.77a8 8 0 1 0-11.58 0l.65-.77A6.97 6.97 0 0 1 3 10Zm11.16 3.6a5.5 5.5 0 1 0-8.32 0l.65-.78a4.5 4.5 0 1 1 7.01 0l.66.78Zm-1.65-1.96a3 3 0 1 0-5.02 0l.69-.81a2 2 0 1 1 3.64 0l.69.81Zm-2.13-.96a.5.5 0 0 0-.76 0l-5.5 6.5a.5.5 0 0 0 .38.82h11a.5.5 0 0 0 .38-.82l-5.5-6.5ZM14.42 17H5.58L10 11.77 14.42 17Z";
   var pathdfilled = "M3 10a7 7 0 1 1 12.14 4.75l.65.77a8 8 0 1 0-11.58 0l.65-.77A6.97 6.97 0 0 1 3 10Zm11.16 3.6a5.5 5.5 0 1 0-8.32 0l.65-.78a4.5 4.5 0 1 1 7.01 0l.66.78Zm-1.65-1.96a3 3 0 1 0-5.02 0l.69-.81a2 2 0 1 1 3.64 0l.69.81Zm-2.13-.96a.5.5 0 0 0-.76 0l-5.5 6.5a.5.5 0 0 0 .38.82h11a.5.5 0 0 0 .38-.82l-5.5-6.5Z";
   
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