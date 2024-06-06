/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ThumbLikeDislike",
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

   var pathdregular = "M5.32 3.46c.2-.38.52-.5.72-.43.36.12.52.32.6.58.09.29.08.66 0 1.08a6.04 6.04 0 0 1-.57 1.55v.02h-.01A.5.5 0 0 0 6.5 7H8a1 1 0 0 1 .95 1.3l-.82 2.65a1.5 1.5 0 0 1-1.86 1L2.03 10.7a1 1 0 0 1-.66-.6l-.3-.84a1 1 0 0 1 .43-1.22l1.16-.67a3.5 3.5 0 0 0 1.37-1.42l1.3-2.49ZM8 6h-.72c.13-.3.26-.7.34-1.11.1-.5.14-1.06-.02-1.58-.17-.55-.56-1-1.23-1.23-.86-.3-1.6.31-1.92.92L3.14 5.5a2.5 2.5 0 0 1-.97 1.02L1 7.17a2 2 0 0 0-.88 2.44l.3.83a2 2 0 0 0 1.32 1.22l4.24 1.24a2.5 2.5 0 0 0 3.1-1.66L9.9 8.6A2 2 0 0 0 8 6Zm6.69 10.54c-.2.39-.52.5-.72.44-.36-.12-.52-.33-.6-.58a2.27 2.27 0 0 1 0-1.08 6.03 6.03 0 0 1 .57-1.55v-.02l.01-.01a.5.5 0 0 0-.44-.74H12a1 1 0 0 1-.95-1.3l.82-2.64a1.5 1.5 0 0 1 1.86-1l4.24 1.24a1 1 0 0 1 .66.61l.3.84a1 1 0 0 1-.43 1.22l-1.16.66a3.5 3.5 0 0 0-1.37 1.42l-1.3 2.5ZM12 14h.72c-.13.31-.26.7-.34 1.12-.1.49-.14 1.05.02 1.57.17.55.56 1.01 1.23 1.24.86.29 1.6-.32 1.92-.93l1.3-2.48c.22-.43.56-.78.97-1.02l1.16-.67a2 2 0 0 0 .88-2.43l-.3-.84a2 2 0 0 0-1.32-1.22L14.01 7.1a2.5 2.5 0 0 0-3.1 1.66l-.81 2.65a2 2 0 0 0 1.9 2.6Z";
   var pathdfilled = "M8 6h-.73c.13-.3.26-.7.34-1.11.1-.5.14-1.06-.02-1.58-.17-.55-.56-1-1.23-1.23-.86-.3-1.6.31-1.92.92L3.14 5.5a2.5 2.5 0 0 1-.97 1.02L1 7.17a2 2 0 0 0-.88 2.44l.3.83a2 2 0 0 0 1.32 1.22l4.24 1.24a2.5 2.5 0 0 0 3.1-1.66L9.9 8.6A2 2 0 0 0 8 6Zm4.73 8H12a2 2 0 0 1-1.91-2.59l.82-2.65A2.5 2.5 0 0 1 14 7.1l4.24 1.24a2 2 0 0 1 1.31 1.22l.31.84a2 2 0 0 1-.88 2.43l-1.16.67c-.41.24-.75.59-.97 1.02L15.56 17c-.31.61-1.06 1.22-1.92.93a1.84 1.84 0 0 1-1.23-1.24 3.24 3.24 0 0 1-.02-1.57c.08-.41.21-.8.34-1.12Z";
   
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