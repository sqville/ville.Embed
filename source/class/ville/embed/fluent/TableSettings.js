/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.TableSettings",
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

   var pathdregular = "M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1c-.32-.16-.65-.3-1-.4V8h-3v1.2c-.35.1-.68.24-1 .4V8H8v4h1.6c-.16.32-.3.65-.4 1H8v3h1.2c.1.35.24.68.4 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4Zm4-6h4V4H8v3Zm6.5-3H13v3h3V5.5c0-.78-.6-1.42-1.36-1.5h-.14ZM4 5.5V7h3V4H5.5c-.78 0-1.42.6-1.5 1.36v.14ZM7 12V8H4v4h3Zm5.06-.56a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   var pathdfilled = "M17 9.6a5.48 5.48 0 0 0-4-.4V8h4v1.6ZM9.2 13a5.5 5.5 0 0 0 .4 4H8v-4h1.2ZM12 9.6A5.52 5.52 0 0 0 9.6 12H8V8h4v1.6ZM7 8v4H3V8h4Zm0 5H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm10-6h-4V3h1.5A2.5 2.5 0 0 1 17 5.5V7Zm-5 0V3H8v4h4ZM7 7V3H5.5A2.5 2.5 0 0 0 3 5.5V7h4Zm5.06 4.44a2 2 0 0 1-1.43 2.48l-.46.12a4.74 4.74 0 0 0 .01 1.01l.35.09A2 2 0 0 1 12 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 0 1 2.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 0 1 1.44-2.48l.46-.12a4.7 4.7 0 0 0-.01-1.01l-.35-.09A2 2 0 0 1 17 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 0 1-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55Zm2.44 4.06a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
   
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