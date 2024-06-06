/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.DesktopSync",
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

   var pathdregular = "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 1 1-.71-.71A3 3 0 0 1 16 3.15V3c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 13 7.85V8a.5.5 0 0 1-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.98 1.98 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 1 1 .71.71 3 3 0 0 1-1 .66ZM17 13v-2.6c.36-.18.7-.4 1-.66V13a2 2 0 0 1-2 2h-3v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6.26c-.26.3-.48.64-.66 1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Zm-5 2H8v2h4v-2Z";
   var pathdfilled = "M10 5.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0Zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.47a1.98 1.98 0 0 0-1.72-.1 2 2 0 0 0-.66.44.5.5 0 1 1-.71-.71A3 3 0 0 1 16 3.15V3c0-.28.22-.5.5-.5Zm-.88 5.53A3 3 0 0 1 13 7.85V8a.5.5 0 0 1-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 0 1 0 1h-.47a1.98 1.98 0 0 0 1.72.1 2 2 0 0 0 .66-.44.5.5 0 1 1 .71.71 3 3 0 0 1-1 .66ZM14.5 11c1.33 0 2.55-.47 3.5-1.26v3.76c0 .83-.67 1.5-1.5 1.5H13v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H3.5A1.5 1.5 0 0 1 2 13.5v-10C2 2.67 2.67 2 3.5 2h6.76a5.5 5.5 0 0 0 4.24 9ZM12 15H8v2h4v-2Z";
   
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