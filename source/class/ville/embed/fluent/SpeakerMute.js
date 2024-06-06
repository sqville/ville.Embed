/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.SpeakerMute",
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

   var pathdregular = "M12 3a1 1 0 0 0-1.68-.73l-3.88 3.6A.5.5 0 0 1 6.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 0 1 .34.13l3.88 3.6a1 1 0 0 0 1.68-.74V3.01ZM7.12 6.6 11 3v14l-3.88-3.6A1.5 1.5 0 0 0 6.1 13H3.5a.5.5 0 0 1-.5-.5v-5c0-.28.22-.5.5-.5h2.6c.38 0 .75-.14 1.02-.4Zm6.02 1.05c.2-.2.51-.2.71 0l1.65 1.64 1.64-1.64a.5.5 0 1 1 .71.7L16.2 10l1.65 1.65a.5.5 0 1 1-.7.7l-1.65-1.64-1.65 1.64a.5.5 0 1 1-.7-.7L14.78 10l-1.65-1.65a.5.5 0 0 1 0-.7Z";
   var pathdfilled = "M12 3a1 1 0 0 0-1.68-.73l-3.88 3.6A.5.5 0 0 1 6.1 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 0 1 .34.13l3.88 3.6a1 1 0 0 0 1.68-.74V3.01Zm1.14 4.65c.2-.2.51-.2.71 0l1.65 1.64 1.64-1.64a.5.5 0 1 1 .71.7L16.2 10l1.65 1.65a.5.5 0 1 1-.7.7l-1.65-1.64-1.65 1.64a.5.5 0 1 1-.7-.7L14.78 10l-1.65-1.65a.5.5 0 0 1 0-.7Z";
   
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