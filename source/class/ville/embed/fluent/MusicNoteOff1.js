/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MusicNoteOff1",
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

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7l7.35 7.36v2.2A3.24 3.24 0 0 0 4 14.74a3.25 3.25 0 1 0 6.5-.25v-3.3l6.65 6.65a.5.5 0 0 0 .7-.7l-15-15ZM5 14.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm5.5-7.57v1.2l-1-1V2.5a.5.5 0 0 1 .65-.48l5.09 1.57A2.5 2.5 0 0 1 17 5.98V8.5a.5.5 0 0 1-.65.48l-5.85-1.8Zm5.5.64V5.98a1.5 1.5 0 0 0-1.06-1.44L10.5 3.18v2.95l5.5 1.7Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7l7.35 7.36v2.2A3.24 3.24 0 0 0 4 14.74a3.25 3.25 0 1 0 6.5-.25v-3.3l6.65 6.65a.5.5 0 0 0 .7-.7l-15-15Zm7.65 5.03v1.2l-1-1V2.5a.5.5 0 0 1 .65-.48l5.09 1.57A2.5 2.5 0 0 1 17 5.98V8.5a.5.5 0 0 1-.65.48l-5.85-1.8Z";
   
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