/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ArchiveSettings",
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

   var pathdregular = "M2 4.75C2 3.78 2.78 3 3.75 3h12.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V9.6c-.32-.16-.65-.3-1-.4V8H4v6c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 0 1-3-3V7.83c-.6-.28-1-.88-1-1.58v-1.5ZM3.75 4a.75.75 0 0 0-.75.75v1.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 0 0-.75-.75H3.75Zm4.75 6h2.84c-.4.28-.77.62-1.08 1H8.5a.5.5 0 0 1 0-1Zm3.57 1.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   var pathdfilled = "M2 4.25C2 3.56 2.56 3 3.25 3h13.5c.69 0 1.25.56 1.25 1.25v1.5C18 6.44 17.44 7 16.75 7H3.25C2.56 7 2 6.44 2 5.75v-1.5ZM3 8h14v1.6a5.48 5.48 0 0 0-5.66.4H8.5a.5.5 0 0 0 0 1h1.76a5.48 5.48 0 0 0-.66 6H6a3 3 0 0 1-3-3V8Zm9.07 3.44a2 2 0 0 1-1.43 2.48l-.46.12a4.7 4.7 0 0 0 0 1.02l.35.08A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 0 1 1.43-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55Zm2.43 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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