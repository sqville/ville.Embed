/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ShapeExclude",
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

   var pathdregular = "M2 10.53V4.5A2.5 2.5 0 0 1 4.5 2h6.06A2.49 2.49 0 0 1 13 4.5V7h2.5A2.5 2.5 0 0 1 18 9.5v6.22A2.5 2.5 0 0 1 15.5 18h-6A2.5 2.5 0 0 1 7 15.5V13H4.5a2.52 2.52 0 0 1-2.09-1.12c-.25-.38-.4-.84-.4-1.32L2 10.53ZM12 8H9.5C8.67 8 8 8.67 8 9.5V12h2.5c.83 0 1.5-.67 1.5-1.5V8ZM3 9.56v.94c0 .23.05.45.15.65l8-8A1.5 1.5 0 0 0 10.5 3h-.94L3 9.56ZM8.14 3H6.56L3 6.56v1.58L8.14 3ZM3 5.14 5.14 3H4.5C3.67 3 3 3.67 3 4.5v.64Zm8.85-1.29L8.5 7.21c.3-.14.64-.21 1-.21h.8L12 5.3v-.8c0-.23-.05-.45-.15-.65ZM7.21 8.5l-3.36 3.35c.2.1.42.15.65.15h.8L7 10.3v-.8c0-.36.07-.7.2-1ZM8 13.7v1.6l2.3-2.3H8.7l-.7.7Zm5-3.4L15.3 8h-1.6l-.7.7v1.6Zm3.4-2-8.1 8.1c.24.32.6.53 1 .59L17 9.3a1.5 1.5 0 0 0-.59-1Zm.6 2.4L10.7 17h1.6l4.7-4.7v-1.6Zm0 3L13.7 17h1.6l1.7-1.7v-1.6Z";
   var pathdfilled = "M2 10.5v-6A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V7H9.5A2.5 2.5 0 0 0 7 9.5V13H4.5A2.5 2.5 0 0 1 2 10.5ZM7 13v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13v3.5a2.5 2.5 0 0 1-2.5 2.5H7Z";
   
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