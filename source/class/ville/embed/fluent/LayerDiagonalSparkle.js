/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LayerDiagonalSparkle",
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

   var pathdregular = "m14.88 1.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM17.5 13c-.17 0-.34-.03-.5-.1v1.22a.5.5 0 0 1-.32.47l-6 2.37a.5.5 0 0 1-.68-.46V9.88c0-.2.13-.4.32-.47l2.92-1.16a1.4 1.4 0 0 1-.09-.2l-.24-.74-2.96 1.17A1.5 1.5 0 0 0 9 9.88v6.62a1.5 1.5 0 0 0 2.05 1.4l6-2.38c.57-.23.95-.78.95-1.4v-1.2c-.16.06-.33.08-.5.08Zm-7.24-7.68a1.43 1.43 0 0 1-.16-.29L6.26 6.56A2 2 0 0 0 5 8.42v6.08a1.5 1.5 0 0 0 2.05 1.4l.95-.38v-1.08l-1.32.52A.5.5 0 0 1 6 14.5V8.42a1 1 0 0 1 .63-.93l4.24-1.68c-.26-.1-.46-.28-.61-.5Zm.7-2.17.46-.15a1.5 1.5 0 0 0-1.97-.9L3.58 4.44A2.5 2.5 0 0 0 2 6.75v5.75a1.5 1.5 0 0 0 2 1.41v-1.07l-.32.12A.5.5 0 0 1 3 12.5V6.75c0-.61.38-1.16.95-1.39l5.87-2.32a.5.5 0 0 1 .67.38c.14-.12.3-.2.46-.27Z";
   var pathdfilled = "m14.88 1.28.35 1.07a2.2 2.2 0 0 0 1.4 1.4l1.07.35h.02a.42.42 0 0 1 0 .8l-1.07.35a2.2 2.2 0 0 0-1.4 1.4l-.35 1.07a.42.42 0 0 1-.8 0l-.35-1.07a2.23 2.23 0 0 0-1.4-1.4l-1.07-.35a.42.42 0 0 1 0-.8l1.07-.35a2.2 2.2 0 0 0 1.38-1.4l.35-1.07a.42.42 0 0 1 .8 0Zm4.9 7.93-.76-.25a1.58 1.58 0 0 1-1-1l-.25-.76a.3.3 0 0 0-.57 0l-.25.77a1.58 1.58 0 0 1-.98 1l-.77.24a.3.3 0 0 0 0 .57l.77.25a1.58 1.58 0 0 1 1 1l.24.77a.3.3 0 0 0 .58 0l.24-.77a1.58 1.58 0 0 1 1-1l.77-.24a.3.3 0 0 0 0-.57h-.02ZM17.5 13c-.27 0-.52-.08-.74-.23a1.4 1.4 0 0 1-.48-.62l-.26-.8a.52.52 0 0 0-.14-.22.64.64 0 0 0-.22-.14l-.77-.25c-.27-.1-.49-.26-.65-.48a1.3 1.3 0 0 1-.12-1.3 1.32 1.32 0 0 1-.45-.22 1.51 1.51 0 0 1-.52-.69l-.24-.74-2.96 1.17A1.5 1.5 0 0 0 9 9.88v6.62a1.5 1.5 0 0 0 2.05 1.4l6-2.38c.57-.23.95-.78.95-1.4v-1.2c-.16.06-.33.08-.5.08Zm-7.24-7.68a1.43 1.43 0 0 1-.16-.29L6.26 6.56A2 2 0 0 0 5 8.42v6.08a1.5 1.5 0 0 0 2.05 1.4l.95-.38V9.54a2 2 0 0 1 1.26-1.86l3.17-1.26a1.2 1.2 0 0 0-.4-.22l-1.06-.35c-.3-.1-.54-.3-.71-.53Zm.7-2.17.46-.15a1.5 1.5 0 0 0-1.97-.9L3.58 4.44A2.5 2.5 0 0 0 2 6.75v5.75a1.5 1.5 0 0 0 2 1.41v-6c0-.93.56-1.76 1.42-2.1l4.68-1.85a1.42 1.42 0 0 1 .85-.8Z";
   
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