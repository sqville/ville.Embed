/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Person5",
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

   var pathdregular = "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 13a2 2 0 0 1 2-2h7.59l-.07.25-.12.75H5a1 1 0 0 0-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 0 0 10 17c.78 0 1.51-.07 2.18-.21a1.5 1.5 0 0 0-.14 1.04c-.65.11-1.34.17-2.04.17a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm11-2a.5.5 0 0 0-.5.42l-.5 3a.5.5 0 0 0 .57.58l.08-.02.21-.02a130.74 130.74 0 0 1 1.74-.2l.02-.01a1.63 1.63 0 0 1 0 3.25c-.3 0-.66-.08-1-.23a1.6 1.6 0 0 1-.7-.54.5.5 0 0 0-.84.54c.26.41.7.71 1.13.91.45.2.96.32 1.41.32a2.63 2.63 0 1 0-.48-5.2 59.76 59.76 0 0 0-1.04.12l.32-1.92h3.08a.5.5 0 0 0 0-1H14Z";
   var pathdfilled = "M6 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-3 7a2 2 0 0 1 2-2h7.59l-.07.25-.5 3A1.5 1.5 0 0 0 13.48 16a1.5 1.5 0 0 0-1.44 1.83c-.65.11-1.34.17-2.04.17a9.14 9.14 0 0 1-4.87-1.2A4.35 4.35 0 0 1 3 13Zm11-2a.5.5 0 0 0-.5.42l-.5 3a.5.5 0 0 0 .57.58l.08-.02.21-.02a130.74 130.74 0 0 1 1.74-.2l.02-.01a1.63 1.63 0 0 1 0 3.25c-.3 0-.66-.08-1-.23a1.6 1.6 0 0 1-.7-.54.5.5 0 0 0-.84.54c.26.41.7.71 1.13.91.45.2.96.32 1.41.32a2.63 2.63 0 1 0-.48-5.2 59.76 59.76 0 0 0-1.04.12l.32-1.92h3.08a.5.5 0 0 0 0-1H14Z";
   
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